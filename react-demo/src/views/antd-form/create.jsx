import React from 'react'

export default function createBaseForm() {
  return function decorate(WrappedComponent) {
    return class Form extends React.Component {
      state = {
        values: {},
        errors: {}
      }

      rules = {}

      getFieldsValue = () => {
        return this.state.values
      }

      handleChange = (ev, name) => {
        this.setState(
          {
            values: {
              ...this.state.values,
              [name]: ev.target.value
            }
          },
          () => {
            this.validateFields([name])
          }
        )
      }

      validateFields = (fields, callback) => {
        if (typeof fields === 'function') {
          callback = fields
          fields = Object.keys(this.rules)
        }
        const { errors } = this.state
        fields.forEach(field => {
          const rules = this.rules[fields]
          if (rules && rules.length > 0) {
            const { values } = this.state
            const value = values[field]
            const fieldErrors = rules
              .map(({ required, min, max, message }) => {
                if ((required && value === undefined) || (max && value.length > max) || (min && value.length < min)) {
                  return { field, message }
                }
                return null
              })
              .filter(Boolean)

            if (fieldErrors.length > 0) {
              errors[field] = { errors: fieldErrors }
            } else {
              delete errors[field]
            }
          }
        })

        const error = Object.keys(errors).length > 0 ? errors : null
        this.setState({ errors }, () => {
          callback && callback(error, this.state.values)
        })
      }

      getFieldDecorator = (name, fieldOption) => {
        const { rules } = fieldOption
        if (rules) {
          this.rules[name] = rules
        }

        return fieldElem => {
          const { values, errors } = this.state
          const fieldErrors = errors[name]
          let messages = []

          const props = {
            value: values[name] || '',
            onChange: ev => this.handleChange(ev, name)
          }
          if (fieldErrors && fieldErrors.errors.length > 0) {
            props.style = { border: '1px solid red' }
            messages = fieldErrors.errors.map(({ message }, index) => (
              <p style={{ color: 'red' }} key={index}>
                {message}
              </p>
            ))
          }

          const inputEl = React.cloneElement(fieldElem, props)
          return (
            <div>
              {inputEl}
              {messages.length > 0 && messages}
            </div>
          )
        }
      }

      render() {
        const props = {
          form: {
            getFieldsValue: this.getFieldsValue,
            getFieldDecorator: this.getFieldDecorator,
            validateFields: this.validateFields
          }
        }
        return <WrappedComponent {...props} />
      }
    }
  }
}
