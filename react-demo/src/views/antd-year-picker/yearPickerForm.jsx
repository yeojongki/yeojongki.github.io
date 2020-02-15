import React from 'react'
import { Form, Button } from 'antd'
import YearPicker from './yearPicker'

class YearPickerForm extends React.Component {
  state = {
    open: false,
    date: null
  }

  /**
   * datePicker change handler
   */
  handleChange = date => {
    this.setState({ open: false })
    this.props.form.setFieldsValue({ date })
  }

  /**
   * set datePicker open status
   */
  handleOpenChange = open => {
    this.setState({ open })
  }

  /**
   * form reset handler
   */
  handleReset = () => {
    this.props.form.resetFields()
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form
    const date = getFieldValue('date')
    return (
      <div className='App' style={{ paddingTop: '150px' }}>
        <Form layout='inline'>
          <Form.Item>
            {getFieldDecorator('date', {})(
              <YearPicker
                open={this.state.open}
                onOpenChange={this.handleOpenChange}
                onPanelChange={this.handleChange}
              />
            )}
            <div style={{ margin: '10px 0' }}>
              当前日期：{date ? date.format('YYYY') : '未选择'}
            </div>
          </Form.Item>
          <Form.Item>
            <Button type='primary' onClick={this.handleReset}>
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Form.create({ name: 'datePickerDemo' })(YearPickerForm)
