import React from 'react'

function Appbar() {
  return (
    <div>
        <div className="bg-gray-200 flex items-center justify-between py-5 px-10">
            <div>
                <a href='/' className='text-lg italic font-bold'>My Wallet</a>
            </div>
            <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Appbar