import React from 'react'
import logo from '@/assets/images/logo.svg'

export default class Logo extends React.Component {
  render() {
    const mouse = this.props.mouse
    return (
      <img
        src={logo}
        className='App-logo'
        alt='logo'
        style={{
          width: 200,
          height: 200,
          position: 'absolute',
          left: mouse.x,
          top: mouse.y
        }}
      />
    )
  }
}
