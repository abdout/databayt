import React from 'react'

const Description = () => {
  return (
    <p>
      Remove the ground from the CT circuit. If relays are left connected to the CTs during the test, the relay manufacturer should be consulted before test values above 500V are used. A 500V megger should be connected from the CT circuit to ground for the test readings. If a fault is detected, the cables should be disconnected from the CTs secondary in order to determine the source of the lower reading.
    </p>
  )
}

export default Description