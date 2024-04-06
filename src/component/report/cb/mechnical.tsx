import React from 'react';

const Mechnical = ({ data }: { data: { item: string; description: string; checked: string; }[] }) => {
  
  return (
    <div>
    <h3>2. Mechnical Check and Visual Inspection</h3>

    
    <table className="w-full table-auto border-collapse mt-4">
      <thead>
        <tr>
          <th className="border border-black px-4 pb-4  ">Item</th>
          <th className="border border-black px-4 pb-4 pl-8 text-left">Description</th>
          <th className="border border-black px-4 pb-4 text-center">Checked</th>
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

export default Mechnical;