import React from 'react'



interface AppbarProps {
  user?: {
      name?: string | null;
  },
  // TODO: can u figure out what the type should be here?
  onSignin: any,
  onSignout: any
}



function Appbar({
  user,
  onSignin,
  onSignout
}: AppbarProps){
  return (
    <div>
        <div className="bg-gray-200 flex items-center justify-between py-5 px-10">
            <div>
                <a href='/' className='text-lg italic font-bold'>My Wallet</a>
            </div>
            <div>
                <button onClick={user ? onSignout : onSignin} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>{user ? "Logout" : "Login"}</button>
            </div>
        </div>
    </div>
  )
}

export default Appbar