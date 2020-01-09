import React, { Component } from 'react'
import { connect } from 'react-redux'
import StatisticsForm from './statisticsForum'
import StatisticsResults from './StatisticsResults'
import PropTypes from 'prop-types'
import { postStatisticsData as postStatisticsDataRedux } from '../redux/actions'

class Statistics extends Component {
  static propTypes = {
    postStatisticsData: PropTypes.func.isRequired,
    postStatisticsByRegData: PropTypes.func.isRequired,
    clearData: PropTypes.func,
    statisticsData: PropTypes.array,
    companyList: PropTypes.array,
    postDailyStatistics: PropTypes.func,
    getDailyCertificateCount: PropTypes.func,
    flialList: PropTypes.array
  }

  constructor(props) {
    super(props)
    this.state = {
      staticData: [
        {
          card: 'orange card-content white-text',
          icon: 'fingerprint',
          name: 'İmza sayı',
          number: 566,
          materialIcon: 'keyboard_arrow_up',
          compare: '15%',
          compareText: 'dünənlə müqayisədə'
        },
        {
          card: 'card-content red accent-2 white-text',
          icon: 'person_outline',
          name: 'Autentikasiya sayı',
          number: 8990,
          materialIcon: 'keyboard_arrow_up',
          compare: '70%',
          compareText: 'dünənlə müqayisədə'
        },
        {
          card: 'card-content cyan lighten-1 white-text',
          icon: 'content_copy',
          name: 'Sertifikat sayı',
          number: 569,
          materialIcon: 'keyboard_arrow_up',
          compare: '15%',
          compareText: 'dünənlə müqayisədə'
        },
        {
          card: 'card-content green lighten-1 white-text',
          icon: 'content_copy',
          name: 'Aktivləşən sertifikat sayı',
          number: 86,
          materialIcon: 'keyboard_arrow_up',
          compare: '15%',
          compareText: 'dünənlə müqayisədə'
        },
        {
          card: 'card-content violet lighten-1 white-text',
          icon: 'content_copy',
          name: 'Ləğv olunan sertifikat sayı',
          number: 900,
          materialIcon: 'keyboard_arrow_up',
          compare: '15%',
          compareText: 'dünənlə müqayisədə'
        }
      ]
    }
  }
  sendData() {
    const { postStatisticsData } = this.props
    let submitData = { filter: { subjectTypeId: 0, eventTypeId: 0, fromDate: '2018-01-22', toDate: '2019-01-22' } }
    postStatisticsData(submitData)
    console.log('args', submitData)
  }

  render() {
    // const { statisticsData } = this.props
    return (
      <div className='main'>
        <div className='row'>
          <div className='col-sm-12 col-md-12'>
            <div className='box'>
              <div className='box-header mb-10'>
                <h3>Mobil imza statistika</h3>
                <div className='navbar navbar-expand-lg'>
                  <div className='row'>
                    <div className='col s12'>
                      <div id='card-stats'>
                        <div className='row'>
                          {this.state.staticData.map((item) => (
                            <div className='col s12 m6 l3'>
                              <div className='card animate fadeLeft'>
                                <div className={item.card}>
                                  <p className='card-stats-title'><i className='material-icons'>{item.icon}</i>{item.name}</p>
                                  <h4 className='card-stats-number white-text'>{item.number}</h4>
                                  <p className='card-stats-compare'>
                                    <i className='material-icons'>{item.materialIcon}</i>
                                    {item.compare}
                                    <span className='cyan text text-lighten-5'>{item.compareText}</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-12'>
                  <StatisticsForm onSubmit={() => this.sendData()} />
                  <StatisticsResults />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = {
  postStatisticsData: postStatisticsDataRedux
}

const mapStateToProps = (state) => ({
  companyList: state.common.companyList,
  flialList: state.common.flialList,
  statisticsData: state.statisticees.statisticsData ? state.statisticees.statisticsData : null
})

export default connect(mapStateToProps, mapDispatchToProps)(Statistics)
