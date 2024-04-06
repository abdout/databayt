import React from 'react';

const Electrical = ({ data }: { data: { item: string; description: string; checked: string; }[] }) => {
  
  return (
    <div>
    <h3>3. Electrical Test</h3>
    <h3 className='pl-6'>3.1. Function Test</h3>

    
    <table className="w-full table-auto border-collapse mt-4">
      <thead>
        <tr>
          <th className="border border-black px-4 py-2 text-center">Item</th>
          <th className="border border-black px-4 py-2 pl-8 text-left">Description</th>
          <th className="border border-black px-4 py-2 text-center">Checked</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="border border-black px-4 py-2 text-center">{row.item.replace('.', '')}</td>
            <td className="border border-black px-4 py-2 pl-8 text-left">{row.description}</td>
            <td className="border border-black px-4 py-2 text-center">{row.checked}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Electrical;