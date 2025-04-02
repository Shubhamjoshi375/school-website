import React from 'react'

function Slogan({slogan}) {
  return (
    <div className='px-5 py-20 md:py-40 md:px-80'>
        <h2 className='text-center text-2xl'>"{slogan}"</h2>
    </div>
  )
}

export default Slogan