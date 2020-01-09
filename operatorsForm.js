// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { TextField } from '../../../components/FormComponents'
// import { Field, reduxForm } from 'redux-form'
// import { getCompanyList as getCompany } from '../../../common/actions'
// import { postCompanyFilialData as getCompanyFilial } from '../../../common/actions'
// import { postOperatorsData as postOperatorsDataRedux } from '../redux/action'
// import PropTypes from 'prop-types'

// class OperatorsForm extends Component {
//   static propTypes = {
//     getCompanyList: PropTypes.func.isRequired,
//     postCompanyFilialData: PropTypes.func.isRequired,
//     companyList: PropTypes.object,
//     flialList: PropTypes.object,
//     postOperatorsData: PropTypes.func.isRequired
//   }

//   constructor(props) {
//     super(props)
//   }

//   componentDidMount() {
//     const { getCompanyList, postCompanyFilialData } = this.props
//     getCompanyList()
//     postCompanyFilialData(30000)
//   }

//   componentDidUpdate() {
//     const { postCompanyFilialData, companyList } = this.props
//     if (companyList) {
//       if (!postCompanyFilialData) {
//         postCompanyFilialData(companyList[0].bankId)
//       }
//     }
//   }

//   render() {
//     const { companyList, flialList, postCompanyFilialData } = this.props
//     return (
//       <form onSubmit={ this.handleSubmit}>
//         <div className='row'>
//           <div className='col-lg-2 col-md-2 col-sm-12 mb-10'>
//             <div className='form-group'>
//               <Field name='fullName' component={ TextField } placeholder='FullName' />
//             </div>
//           </div>
//           <div className='col-lg-2 col-md-2 col-sm-12 mb-10'>
//             <Field name='pin' component={ TextField } type='pin' placeholder='pin' />
//           </div>
//           <div className='col-lg-2 col-md-2 col-sm-12 mb-10'>
//             <Field name='bankId' component='select' className='custom-select w-100' onChange={e => postCompanyFilialData(e.target.value)}>
//               {companyList && companyList.map((item) => {
//                 return <option key={item.bankId} value={item.bankId}>{item.bankName}</option>
//               })}
//             </Field>
//           </div>
//           <div className='col-lg-2 col-md-2 col-sm-12 mb-10'>
//             <Field name='flialId' component='select' className='custom-select w-100'>
//               <option value='0'>Hamisi</option>
//               {flialList && flialList.map((item) => {
//                 return <option key={item.branchId} value={item.branchId}>{item.name}</option>
//               })}
//             </Field>
//           </div>
//           <div className='col-lg-2 col-md-2 col-sm-12 mb-10' >
//             <div className='form-group'>
//               <button className='btn btn-fw accent' type='submit'>Tesdiq</button>
//             </div>
//           </div>
//         </div>
//       </form>
//     )
//   }
// }

// OperatorsForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired
// }

// const mapStateToProps = state => ({
//   companyList: state.common.companyList,
//   flialList: state.common.flialList,
//   operatorsData: state.common.operatorsData
// })

// const mapDispatchToProps = {
//   getCompanyList: getCompany,
//   postCompanyFilialData: getCompanyFilial,
//   postOperatorsData: postOperatorsDataRedux
// }

// export default connect(mapStateToProps, mapDispatchToProps)(
//   reduxForm({
//     form: 'operatorsForm',
//     enableReinitialize: true
//   })(OperatorsForm)
// )

