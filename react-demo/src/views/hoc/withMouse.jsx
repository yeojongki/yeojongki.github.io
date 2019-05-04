import React from 'react'

const withMouse = Component => {
  return class extends React.Component {
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
          {/* {this.props.render(this.state)} */}
          <Component {...this.props} mouse={this.state} />
        </div>
      )
    }
  }
}

export default withMouse
