import React, { Component } from 'react';
import { DatePicker } from 'antd';

class YearPicker extends Component {
  render() {
    return (
      <DatePicker
        {...this.props}
        format='YYYY'
        mode='year'
      />
    );
  }
}

export default YearPicker;
