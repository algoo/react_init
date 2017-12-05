import React from 'react'
import { connect } from 'react-redux'
import {
  // Route,
  withRouter
} from 'react-router-dom'
// import PrivateRoute from './PrivateRoute.jsx'

class Tracim extends React.Component {
  render () {
    return (
      <div>
        {/*
        <PrivateRoute exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/page' component={Page} />
        */}
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user })
export default withRouter(connect(mapStateToProps)(Tracim))
