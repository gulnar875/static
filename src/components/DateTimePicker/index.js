import React from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames'
// import moment from 'moment'
import DateTime from 'react-datetime'

const DateTimeField = ({ defaultValue, isValid, className, disabled, input,
  meta: { valid, touched, error } }) => {
  // const classes = classNames('', {
  //   'has-error': (touched && !valid),
  //   'has-success': (touched && valid)
  // })

  return (
    <div className={className}>
      <DateTime
        name={input.name}
        value={input.value}
        locale='az'
        onChange={param => {
          input.onChange(param)
        }}
        defaultValue={defaultValue}
        disabled={disabled}
        isValidDate={isValid}
        closeOnSelect={true}
      />
      {(!valid && touched) &&
      <p className='help-block'>{error}</p>
      }
    </div>
  )

}

DateTimeField.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  // label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  tooltip: PropTypes.string,
  tooltipPlacement: PropTypes.string,
  isValid: PropTypes.func,
  className: PropTypes.string,
  defaultValue: PropTypes.object
}
export default DateTimeField
