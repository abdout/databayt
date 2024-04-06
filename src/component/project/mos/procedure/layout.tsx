import React, { ReactNode } from 'react'
import Pargraph from '../body/pargaph'

const ProcedureLayout = (props: {
    desc: string,
    equipment: ReactNode,
    circuit: ReactNode,
}) => {
  return (
    <div className='flex flex-col space-y-2'>
        <p>{props.desc}</p>
        <Pargraph title='I. Equipment used' desc={props.equipment} sub={true}/>
        <Pargraph title='II. Circuit connection' desc={props.circuit} sub={true}/>
    </div>
  )
}

export default ProcedureLayout