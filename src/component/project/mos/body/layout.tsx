import React, { ReactNode } from 'react'
import Pargraph from './pargaph'

const Layout = (props: {
  definition: ReactNode,
  purpose: ReactNode,
  procedure: ReactNode,
  criteria: ReactNode,
 }) => {
  return (
    <div className='flex flex-col items-start gap-4'>
      <Pargraph title='a. Definition' desc={props.definition}/>
      <Pargraph title='b. Purpose' desc={props.purpose}/>
      <Pargraph title='c. Procedure' desc={props.procedure}/>
      <Pargraph title='d. Criteria' desc={props.criteria}/>
    </div>
  )
}

export default Layout