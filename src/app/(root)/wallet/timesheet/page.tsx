
import Footer from '@/component/wallet/timesheet/footer'
import Header from '@/component/wallet/timesheet/header'
import TimeList from '@/component/wallet/timesheet/list'
import React from 'react'

const Timesheet = () => {
  return (
    <div>
      <Header />
      <TimeList />
      <Footer />
    </div>
  )
}

export default Timesheet