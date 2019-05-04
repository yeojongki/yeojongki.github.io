import React from 'react'

export default class Mouse extends React.Component {
  state = {
    x: 0,
    y: 0
  }

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div
        style={{ position: 'relative', width: '100%', height: '100%' }}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.render(this.state)}
      </div>
    )
  }
}
