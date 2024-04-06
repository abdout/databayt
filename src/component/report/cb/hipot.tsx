import React from 'react';

const HiPot = ({ data }: { data: { R: string; Y: string; B: string; }[] }) => {
  
  return (
    <div>
    <h3 className='pl-6'>3.7. Vaccum Integrity Test</h3>
    <h4 className='pl-[60px]'>Test performed at <strong>24 kV</strong> for <strong>60 min</strong>, Leakage current measured in <strong>µA</strong></h4>
    <h4 className='pl-[60px]'>Acceptance criteria is <strong>&lt; 25 µΩ</strong>, as per <strong>IEC</strong> standard</h4>
    <table className="w-full table-fixed border-collapse mt-4">
      <thead>
        <tr>
          <td className="border border-black px-4 py-2 text-center">Phase</td>
          <td className="border border-black px-4 py-2 text-center">R</td>
          <td className="border border-black px-4 py-2 text-center">Y</td>
          <td className="border border-black px-4 py-2 text-center">B</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-black px-4 py-2 text-center">Leakage Current</td>
          <td className="border border-black px-4 py-2 text-center">{data[0].R}</td>
          <td className="border border-black px-4 py-2 text-center">{data[0].Y}</td>
          <td className="border border-black px-4 py-2 text-center">{data[0].B}</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default HiPot;