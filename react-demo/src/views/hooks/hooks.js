import React from 'react'
import { renderRoutes } from 'react-router-config'

export default class Hooks extends React.Component {
  render() {
    const { route } = this.props
    return <div>{renderRoutes(route.children)}</div>
  }
}
