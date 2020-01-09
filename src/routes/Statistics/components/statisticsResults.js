import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Tabs, Tab } from 'react-bootstrap-tabs'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import moment from 'moment'
import Highcharts from 'highcharts'
import drilldown from 'highcharts/modules/drilldown'
import HighchartsReact from 'highcharts-react-official'
import data from ''

const options = {
  title: {
    text: 'chart test'
  }
}

drilldown(Highcharts)
class StatisticsData extends Component {
  static propTypes = {
    statisticsData: PropTypes.object
  }
  constructor(props) {
    super(props)
    this.state = {
      options: {
        chart: {
          events: {
            redraw() {
              console.log('redraw')
            }
          }
        },
        series: [
          {
            data: [1, 2, 3]
          },
          {
            data: [1, 2, 3].reverse(),
            yAxis: 1
          },
          {
            data: [2, 2, 2],
            yAxis: 2
          }
        ],
        yAxis: [{}, {}, {}]
      },
      data1: [],
      loading: true,
      chartData: 0,
      myArray: [], other: [],
      chartOption: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true,
              color: 'red'
            }
          }],
          xAxes: [{
            gridLines: {
              display: true,
              color: 'red'
            }
          }]
        }
      },
      totalSum: 0,
      certData: 45,
      signData: 0,
      dailySignData: 0,
      certificateChart: 0,
      pinData: 0,
      numberData: 0,
      regcountData: 0,
      certificateCountData: 0,
      activeCertCards: true,
      activePinCards: true,
      activeSignCards: true,
      activeNumberCards: true
    }
  }

  componentDidMount() {
    this.chartRef = React.createRef()
  }

  render() {
    const { statisticsData } = this.props
    if (statisticsData) {
      return (
        <div>
          <div className='row mb-40'>
            <div className='col-md-12'>
              <div className='line-hr' />
            </div>
            <div className='col-md-12 mt-30' />
          </div>
          <div className='row mb-40'>
            <div className='col-md-12 diagramsView'>
              <Tabs onSelect={(index, header) => console.log(header + 'selected')}>
                <Tab className='diatab' label='Diaqram'>
                  <HighchartsReact
                    highcharts={Highcharts}
                    height={80}
                    options={options}
                  />
                </Tab>
                <Tab className='diatab' label='Günlük'>
                  <p>MONTHLY REPORT</p>
                  <Line
                    data={this.state.chartData2}
                    height={80}
                    options={this.state.chartOption}
                  />
                </Tab>
                <Tab className='tabletab' label='Cədvəl'>
                  <table id='table-to-xls' className='table table-striped b-t striped bordered condensed hover'>
                    <tr>
                      <th>Ay</th>
                      <th>İl</th>
                      <th>Sertifikat sayı</th>
                      <th>İmza sayı</th>
                    </tr>
                    {(statisticsData && statisticsData.dailyEventstatistics) ? this.state.myArray.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{moment(item.month, 'MM').format('MMMM')}</td>
                          <td>{item.year}</td>
                          <td>{item.certifikateCount}</td>
                          <td>{item.signingCount}</td>
                        </tr>
                      )
                    }) : <div />}
                  </table>
                  <ReactHTMLTableToExcel
                    id='test-table-xls-button'
                    className='download-table-xls-button btn btn-fw accent'
                    table='table-to-xls'
                    filename='tablexls'
                    sheet='tablexls'
                    buttonText='Download as XLS' />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      )
    }
    else {
      return <div />
    }
  }
}

const mapStateToProps = (state) => ({
  statisticsData: state.statisticees.statisticsData ? state.statisticees.statisticsData : null
})

export default connect(mapStateToProps, null)(StatisticsData)
