import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
// import { Button } from 'antd'
import SignUp from 'pages/SignUp'

import './App.css'
import ProtectedRoutes from './ProtectedRoutes'

const App = ({ loading }) => {
  return (
    <>

      <Switch>
        <Route exact path="/">
          {/* <h1 className="text-red-500">Hi there</h1>
          {!loading && <Button>Btn</Button>} */}

          <SignUp />
        </Route>
        <ProtectedRoutes />
      </Switch>


    </>
  )
}

export default connect(state => ({
  loading: state.common.loading
}))(App)
