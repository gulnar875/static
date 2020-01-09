import React from 'react'
import PropTypes from 'prop-types'

class SelectField extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { input } = this.props
    return (
      <div>
        <select {...input}>
          <option value=''>Select</option>
        </select>
      </div>
    )
  }
}

SelectField.propTypes = {
  input: PropTypes.object.isRequired
}
export default SelectField
