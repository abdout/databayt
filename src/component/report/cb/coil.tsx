import React from 'react';

const Coil = ({ data }: { data: { Close: string; Trip1: string; Trip2: string; }[] }) => {
  
  return (
    <div>
    <h3 className='pl-6'>3.4. Coil Resistance Test</h3>
    <h4 className='pl-[60px]'>Test performed at <strong>100 A DC</strong>, value measured in <strong>µΩ</strong></h4>
    <h4 className='pl-[60px]'>Acceptance criteria is <strong>&lt; 25 µΩ</strong>, as per <strong>IEC</strong> standard</h4>
    <table className="w-full table-fixed border-collapse mt-4">
      <thead>
        <tr>
          <td className="border border-black px-4 py-2 text-center">Coil</td>
          <td className="border border-black px-4 py-2 text-center">Close</td>
          <td className="border border-black px-4 py-2 text-center">Trip 1</td>
          <td className="border border-black px-4 py-2 text-center">Trip 2</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-black px-4 py-2 text-center">Value</td>
          <td className="border border-black px-4 py-2 text-center">{data[0].Close}</td>
          <td className="border border-black px-4 py-2 text-center">{data[0].Trip1}</td>
          <td className="border border-black px-4 py-2 text-center">{data[0].Trip2}</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default Coil;