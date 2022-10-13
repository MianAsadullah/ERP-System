import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AppLayout from '../layout/Secondary'
import SignUp from '../pages/SignUp'

const ProtectedRoutes = ({ loading }) => {
  return (
    <>
      <AppLayout>
        <Switch>
          <Route exact path="/app">
            {/* <h1 className="text-red-500">Hi there</h1>
          {!loading && <Button>Btn</Button>} */}

            {/* <SignUp /> */}
          </Route>
        </Switch>
      </AppLayout>

    </>
  )
}

export default ProtectedRoutes
