import React from 'react'
import { DatePicker } from 'antd'

class YearPicker extends React.Component {
  render() {
    return <DatePicker {...this.props} format='YYYY' mode='year' />
  }
}

export default YearPicker
