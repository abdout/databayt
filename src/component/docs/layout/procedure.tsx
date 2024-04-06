import React, { ReactNode } from 'react'

const ProcedureLayout = (props: {
    description: ReactNode,
    equipment: ReactNode,
    circuit: ReactNode,
}) => {
  return (
    <div>
        <p>{props.description}</p>
        <h2>I. Equipment used</h2>
        {props.equipment}
        <h2>II. Circuit connection</h2>
        {props.circuit}
    </div>
  )
}

export default ProcedureLayout