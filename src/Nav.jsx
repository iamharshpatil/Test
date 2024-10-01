import React from 'react'

function Nav() {
  return (
    <div>
         <nav className='w-full h-[5vh] text-white px-20 bg-gray-900 my-5 flex items-center  justify-around '>
                    <h2 className=' underline decoration-yellow-500	 '>Home</h2>
                    <h2>ABOUT</h2>
                    <h2>WORK</h2>
                    <h2>BLOG</h2>
                    <h2>CONTACT</h2>
                   </nav>
    </div>
  )
}

export default Nav