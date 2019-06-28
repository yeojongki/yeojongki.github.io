import React, { Component } from 'react'

const authList = ['admin']

function withAuth(WrappedComponent) {
  class HOC extends Component {
    static displayName =  `HOC(${getDisplayName(WrappedComponent)})`
    
    render() {
      const { visible, auth, ...props } = this.props
      if (visible === false || (auth && authList.indexOf(auth) === -1)) {
        return null
      }
      return <WrappedComponent {...props} />
    }
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
  }

  return HOC
}

@withAuth
class AdminButton extends Component {
  render() {
    return <button>AdminButton</button>
  }
}

// const AuthAdminButton = withAuth(AdminButton)

class App extends React.Component {
  state = {
    auth: 'user'
  }
  toggleAuth = () => {
    this.setState({ auth: this.state.auth === 'user' ? 'admin' : 'user' })
  }

  render() {
    return (
      <>
        <p>now auth: {this.state.auth}</p>
        <button onClick={this.toggleAuth}>toggle</button>
        <AdminButton auth={this.state.auth} />
        {/* <AuthAdminButton auth={this.state.auth} /> */}
      </>
    )
  }
}

export default App
