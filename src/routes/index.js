import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ProtectedRoute } from '../helpers'
import MainLayout from '../layouts/mainLayout'
import LoginLayout from '../layouts/loginLayout'
import NotFoundLayout from '../layouts/notFoundLayout'
// import Home from './Home'
import Login from './Login'
import Statistics from './Statistics'
import Notfound from './Notfound'
import '../styles/app.min.css'
import '../styles/operator.css'

const Routes = ({ store }) => (
  <BrowserRouter>
    <Switch>
      <ProtectedRoute path='/' exact render={(e) => <MainLayout><Statistics {...e} store={store} /></MainLayout>} />
      <Route path='/login' exact render={(e) => <LoginLayout><Login {...e} store={store} /></LoginLayout>} />
      <ProtectedRoute path='/statistics' exact render={(e) => <MainLayout><Statistics {...e} store={store} /></MainLayout>} />
      <Route path='/*' exact render={(e) => <NotFoundLayout><Notfound {...e} store={store} /></NotFoundLayout>} />
    </Switch>
  </BrowserRouter>
)

Routes.propTypes = {
  store: PropTypes.object.isRequired
}

export default Routes
