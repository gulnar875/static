import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { TextField } from '../../../components/FormComponents'
import PropTypes from 'prop-types'
import '../../../styles/login.css'
import '../../../styles/materialize.css'
import man from '../../../../public/img/man.png'

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <div className='container'>
        <div className='login-back'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='login-user-back-wrap'>
                <div className='login-user-back' />
              </div>
              <div className='user-img'>
                <img src={man} />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='col s12 m6 l4 card-panel border-radius-6 login-card bg-opacity-8'>
                <form className='login-form' onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='input-field col s12'>
                      <h5 className='ml-4'>Daxil ol</h5>
                    </div>
                  </div>
                  <div className='row margin'>
                    <div className='input-field col s12'>
                      <i className='material-icons prefix pt-2'>person_outline</i>
                      <Field name='username' id='username' component={TextField} placeholder='İstifadəçi adı' />
                      {/* <input name='username' id='username' type='text' /> */}
                      {/* <label htmlFor='username' className='center-align'>Username
                        </label> */}
                    </div>
                  </div>
                  <div className='row margin'>
                    <div className='input-field col s12'>
                      <i className='material-icons prefix pt-2'>lock_outline</i>
                      <Field name='password' component={TextField} type='password' placeholder='Şifrə' />
                      {/* <input id='password' type='password' name='password' /> */}
                      {/* <label htmlFor='password' >Password</label> */}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col s12 m12 l12 ml-2 mt-1'>
                      <p className='check-remember'>
                        <label>
                          <input type='checkbox' />
                          <span>Remember Me</span>
                        </label>
                      </p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='input-field col s12'>
                      <a className='btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12'>
                        <button className='submitBtn' type='submit'>Giriş</button>
                      </a>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='input-field col-md-6 l6'>
                      <p className='margin medium-small'>
                        <a className='login-text-btn' href='user-register.html'>Register Now!</a>
                      </p>
                    </div>
                    <div className='input-field col-md-6 l6'>
                      <p className='margin right-align medium-small'>
                        <a className='login-text-btn' href='user-forgot-password.html'>Forgot password ?</a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'login'
})(LoginForm)
