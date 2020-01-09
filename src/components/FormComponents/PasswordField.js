
import React from 'react'

const PasswordField = ({ input, label, type, meta: { touched, error } }) => ( //eslint-disable-line react/prop-types
  <div>
    <input {...input} placeholder={label} className={`form-control ${(error && touched) ? 'is-invalid' : ''}`} type={type}/>
    {touched && error && <span>{error}</span>}
  </div>
)

export default PasswordField
