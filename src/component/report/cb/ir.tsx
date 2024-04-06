import React from 'react';

const IR = ({ data }: { data: { phase1: string; value1: string; phase2: string; value2: string; phase3: string; value3: string; }[] }) => {
  
  return (
    <div>
    <h3 className='pl-6'>3.2. Insulation Resistance Test</h3>
    <h4 className='pl-[60px]'>Test performed at <strong>5 kV DC</strong> for <strong>1 min</strong>, value measured in <strong>TΩ</strong></h4>
    <h4 className='pl-[60px]'>Acceptance criteria is <strong>&gt; 1 MΩ</strong>, as per <strong>IEC</strong> standard</h4>

    
    <table className="w-full table-auto border-collapse mt-4">
      <thead>
        <tr>
          <th className="border border-black px-4 py-2 text-center">Phase</th>
          <th className="border border-black px-4 py-2 text-center">Value</th>
          <th className="border border-black px-4 py-2 text-center">Phase</th>
          <th className="border border-black px-4 py-2 text-center">Value</th>
          <th className="border border-black px-4 py-2 text-center">Phase</th>
          <th className="border border-black px-4 py-2 text-center">Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="border border-black px-4 py-2 text-center">{row.phase1}</td>
            <td className="border border-black px-4 py-2 text-center">{row.value1}</td>
            <td className="border border-black px-4 py-2 text-center">{row.phase2}</td>
            <td className="border border-black px-4 py-2 text-center">{row.value2}</td>
            <td className="border border-black px-4 py-2 text-center">{row.phase3}</td>
            <td className="border border-black px-4 py-2 text-center">{row.value3}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default IR;