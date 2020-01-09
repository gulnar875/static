import React from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames'
// import moment from 'moment'
import DatePicker from 'react-datepicker'

const DatePickerF = ({ startDate, className, input, meta: { valid, touched, error } }) => {
  // const classes = classNames('', {
  //   'has-error': (touched && !valid),
  //   'has-success': (touched && valid)
  // })
  return (
    <div className={className}>
      <DatePicker
        name={input.name}
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={startDate}
        onChange={this.handleChangeStart}
      />
      ss
      {(!valid && touched) &&
      <p className='help-block'>{error}</p>
      }
    </div>
  )

}

DatePickerF.propTypes = {
  startDate: PropTypes.object.isRequired,
  endDate: PropTypes.object.isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  callback: PropTypes.func,
  onEvent: PropTypes.func,
  onShow: PropTypes.func,
  onHide: PropTypes.func,
  onShowCalendar: PropTypes.func,
  onHideCalendar: PropTypes.func,
  onApply: PropTypes.func,
  onCancel: PropTypes.func,
  input: PropTypes.object.isRequired,
  // label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  tooltip: PropTypes.string,
  tooltipPlacement: PropTypes.string,
  isValid: PropTypes.func,
  defaultValue: PropTypes.object
}
export default DatePickerF
