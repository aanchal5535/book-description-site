import React from 'react'
import Landing from './Landing'
import { Outlet } from 'react-router-dom'
import Gift from './Gift'
import BestSeller from './BestSeller'
import Faq from './Faq'
import Signup from './Signup'
import Search from './Search'



const Home = () => {
  return (
    <>
  <Landing/>
  <Outlet/>
  <BestSeller/>
  <Gift/>
  <Faq/>
  <div className='w-full h-[150px] flex flex-col items-center justify-center bg-white pb-5'>
   <div className='flex flex-col items-center justify-center pt-5'>
    <h1 className='pb-5'>Search For Books</h1>
    </div> <Search/>
  </div>
  <Signup/>
    </>
  )
}

export default Home
