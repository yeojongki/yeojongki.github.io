import React from 'react'
import Form from './Form'

function UserForm(props) {
  // const { getFieldsValue } = props.form
  const { getFieldDecorator, validateFields } = props.form

  const handleSubmit = event => {
    event.preventDefault()
    // let values = getFieldsValue()
    // console.log(values)
    validateFields((err, values) => {
      if (err) {
        console.error('error', err)
      } else {
        console.log('Received values of form: ', values)
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item label='用户名'>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: '用户名不能为空' }]
        })(<input />)}
      </Form.Item>
      <Form.Item label='密码'>
        {getFieldDecorator('password', {
          rules: [
            { required: true, message: '密码不能为空' },
            { min: 6, message: '密码不能少于6位' },
            { max: 8, message: '密码不能不能大于8位' }
          ]
        })(<input />)}
      </Form.Item>
      <Form.Item>
        <button type='submit'>提交</button>
      </Form.Item>
    </Form>
  )
}

export default Form.create()(UserForm)
