import React from 'react'
import FormItem from './FormItem'
import create from './create'

const Form = ({ children, ...rest }) => {
  return <form {...rest}>{children}</form>
}

Form.defaultProps = {
  onSubmit: () => {}
}

Form.Item = FormItem
Form.create = create

export default Form
