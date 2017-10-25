import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
  } from 'react-router-dom'

import Login from "./Login"
import LandingPageCard from './LandingPageCard';


const LoginAuth = () => (
  <Router>
    <div>
      <ul>
      </ul>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/protected" component={LandingPageCard} />
    </div>
  </Router>
)

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      fakeAuth.isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )
}
const fakeAuth = {
    isAuthenticated: true,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }

export default LoginAuth