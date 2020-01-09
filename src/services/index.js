import Common from './common'
import Statistics from './statistics'
import Operators from './operators'
import { http } from './axios'

const Services = {
  CommonService: () => {
    return new Common(http)
  },
  StatisticsService: () => {
    return new Statistics(http)
  },
  OperatorsService: () => {
    return new Operators(http)
  }
}

export default Services
