import React from 'react'

const General = (props:{
  data: { columns: string[] }[];
}) => {
  return (
    <div className='flex flex-col space-y-2'>
    <h3>1. General Data and Information</h3>
    <table className='ml-5'>
  <tbody>
    {props.data.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.columns.map((column, columnIndex) => (
          <td key={columnIndex} className={columnIndex % 2 === 0 ? 'w-40' : 'w-96'}>
            {columnIndex % 2 === 0 ? column : `: ${column}`}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>
</div>
  )
}

export default General