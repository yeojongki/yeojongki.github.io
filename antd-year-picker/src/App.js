import React, { Component } from 'react';
import './App.css';
import { DatePicker, Form, Button } from 'antd';
// import Calendar from './Calendar';

class App extends Component {
  state = {
    open: false,
    date: null
  };

  /**
   * datePicker change handler
   */
  handleChange = date => {
    this.setState({ open: false });
    // this.setState({ date, open: false });
    this.props.form.setFieldsValue({ date });
  };

  /**
   * set datePicker open status
   */
  handleOpenChange = open => {
    this.setState({ open });
  };

  /**
   * form reset handler
   */
  handleReset = () => {
    this.props.form.resetFields();
  };

  render() {
    const { open } = this.state;
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const date = getFieldValue('date');
    return (
      <div className='App' style={{ paddingTop: '150px' }}>
        <Form layout='inline'>
          <Form.Item>
            {getFieldDecorator('date', {})(
              <DatePicker
                format='YYYY'
                // value={date}
                onOpenChange={this.handleOpenChange}
                open={open}
                mode='year'
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
    );
  }
}

export default Form.create({ name: 'datePickerDemo' })(App);
