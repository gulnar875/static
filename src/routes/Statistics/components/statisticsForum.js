import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector, change } from 'redux-form'
import DateTimeField from 'react-datetime'
import DateTimePicker from '../../../components/DateTimePicker'
import '../../../../node_modules/react-datetime/css/react-datetime.css'
import moment from 'moment'
import PropTypes from 'prop-types'
import { serviceTypes } from '../../../data'
import '../../../styles/dashboard.css'

class StatisticsForm extends Component {
  static propTypes = {
    postCompanyFilialData: PropTypes.func.isRequired,
    postStatisticsByRegData: PropTypes.func.isRequired,
    changeBranchData: PropTypes.func,
    statisticsData: PropTypes.object,
    companyList: PropTypes.object,
    regcountData: PropTypes.object,
    flialList: PropTypes.object,
    from: PropTypes.object
  }
  constructor(props) {
    super(props)
    this.valid = this.valid.bind(this)
    this.state = {
      published: moment(),
      published1: null,
      showUi: false
    }
    this.changeBranchData = this.changeBranchData.bind(this)
  }

  valid(date) {
    const { from } = this.props
    return date.isAfter(DateTimeField.moment(from))
  }
  test(e) {
    if (e === '1') {
      this.setState({ showUi: true })
    }
    else {
      this.setState({ showUi: false })
    }
  }
  changeBranchData(e) {
    const { postCompanyFilialData } = this.props
    postCompanyFilialData(e)
    this.props.change('branchId', '0') //eslint-disable-line
    change('branchId', '0')
  }
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div className='col-md-12 no-padding no-margin'>
          <div className='row'>
            <div className='col-lg-2 col-md-2 col-sm-12'>
              <Field name='branchId' component='select' className='custom-select w-100'>
                <option value='0'>Hamisi</option>
                <option value='1'>Hakimiyyət orqanları</option>
                <option value='2'>EHM</option>
              </Field>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-12'>
              <Field name='logType' component='select' className='custom-select w-100'
                onChange={e => this.test(e.target.value)}>
                {serviceTypes && serviceTypes.map((item, index) => {
                  return <option key={index} value={item.type}>{item.text}</option>
                })}
              </Field>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-12'>
              <Field name='personType' component='select' className='custom-select w-100'>
                <option value='0'>Hamısı</option>
                <option value='1'>Hüquqi</option>
                <option value='2'>Fiziki</option>
                <option value='3'>Sahibkar</option>
                <option value='4'>Dövlət</option>
              </Field>
            </div>
            <Field
              name='fromDate'
              className='col-lg-2 col-md-2 col-sm-12 mb-10'
              defaultValue={moment().subtract(3, 'months')}
              component={DateTimePicker} />
            <Field
              name='toDate'
              className='col-lg-2 col-md-2 col-sm-12 mb-10'
              defaultValue={moment()}
              component={DateTimePicker} />
            {this.state.showUi === true ? <div className='col-lg-2 col-md-2 col-sm-12 mb-10 mt-20'><div className='form-group'><button className='btn btn-fw accent'>Axtar</button></div></div> : <div className='col-lg-2 col-md-2 col-sm-12 mb-10' ><div className='form-group'><button className='btn btn-fw accent'>Axtar</button></div></div>}
          </div>
        </div>
      </form>
    )
  }
}
StatisticsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

const selector = formValueSelector('statisticsForm')
const mapStateToProps = state => ({
  companyList: state.common.companyList,
  flialList: state.common.flialList,
  activeCertCards: state.common.activeCertCards,
  activeSignCards: state.common.activeSignCards,
  activePinCards: state.common.activePinCards,
  activeNumberCards: state.common.activeNumberCards,
  statisticsData: (state.statisticees.statisticsData && state.statisticees.statisticsData.dailyEventStatistics) ? state.statisticees.statisticsData : null,
  regcountData: state.statisticees ? state.statisticees.statisticsByRegData : null,
  from: selector(state, 'from')
})

export default connect(mapStateToProps, null)(
  reduxForm({
    form: 'statisticsForm',
    enableReinitialize: true
  })(StatisticsForm)
)
