import React from 'react'

const Table = ({ topBar, className, children }) => { //eslint-disable-line
  return (
    <div>
      {topBar}
      <div className='table-responsive'>
        <table className={'table ' + className}>
          {children}
        </table>
      </div>
    </div>
  )
}

export default Table
