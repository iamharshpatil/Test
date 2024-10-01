import React from 'react'
import Nav from './Nav'

function App() {
  return (
    <div>
           <div className="page w-[100vw] h-[100vh] flex items-center justify-between bg-black">
              

              <div className="left w-[40%] h-[100%] text-2xl py-6  px-10 flex items-start  justify-center " >
                <h1 className='text-white '>PROTOFILE.</h1>
              </div>
              <div className="right w-[60%] h-[100%] bg-cover bg-center  bg-[url('https://images.unsplash.com/photo-1626569283673-3e5ecbe1f7d9?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
                     <Nav/>
                    </div>
                  
                  <div className=' absolute bottom-[20%] left-[15%] '>
                    <h1 className='text-white text-[3vw] mb-[-6%] '>MY NAME IS</h1>
                    <h1 className='text-white font-semibold text-[5vw] mb-4'>ABDULRAHMAN</h1>
                    <button className='px-8 py-2 font-bold text-[2vw] bg-yellow-400'>I'M A UI DEVELOPER</button>
                  </div>
           </div>
    </div>
  )
}

export default App