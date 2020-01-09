import React from 'react'

const TextField = ({ input, meta: { error, touched }, ...rest }) => ( //eslint-disable-line react/prop-types
  <div>
    <input {...input} {...rest} className={`form-control ${(error && touched) ? 'is-invalid' : ''}`} />
    <span>{touched && error}</span>
  </div>
)

export default TextField
