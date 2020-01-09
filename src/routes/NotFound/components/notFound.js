import React from 'react'

const Notfound = () => {
  return (
    <div className='text-center p-5 w-100'>
      <h1 className='display-5 my-5'>Təssüfki belə bir səhifə mövcud deyil.</h1>
      <p>Əsas səhifəyə qayıdın <a href='/' className='b-b b-white'>əsas səhifə</a> və ya <a href='/login' className='b-b b-white'>daxil ol</a></p>
      <p className='my-5 text-muted h4'>-- 404 --</p>
    </div>
  )
}

export default Notfound
