// import React from 'react';

// const Timing = ({ data }: { data: { phase: string; close: number; openTC1: number; closeOpenTC1: number; openTC2: number; closeOpenTC2: number; remarks: string; }[] }) => {
  
//   return (
//     <div>
//     <h3 className='pl-6'>Timing</h3>
//     <table className="w-full table-fixed border-collapse mt-4">
//       <thead>
//         <tr>
//           <td className="border border-black px-4 py-2 text-center" rowSpan={2}>Phase</td>
//           <td className="border border-black px-4 py-2 text-center">Close (msec)</td>
//           <td className="border border-black px-4 py-2 text-center" colSpan={2}>Open (TC1) (msec)</td>
//           <td className="border border-black px-4 py-2 text-center" colSpan={2}>Open (TC2) (msec)</td>
//           <td className="border border-black px-4 py-2 text-center" rowSpan={2}>Remarks</td>
//         </tr>
//         <tr>
//           <td className="border border-black px-4 py-2 text-center">Close - Open (TC1) (msec)</td>
//           <td className="border border-black px-4 py-2 text-center">Close - Open (TC2) (msec)</td>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row, index) => (
//           <tr key={index}>
//             <td className="border border-black px-4 py-2 text-center">{row.phase}</td>
//             <td className="border border-black px-4 py-2 text-center">{row.close}</td>
//             <td className="border border-black px-4 py-2 text-center">{row.openTC1}</td>
//             <td className="border border-black px-4 py-2 text-center">{row.closeOpenTC1}</td>
//             <td className="border border-black px-4 py-2 text-center">{row.openTC2}</td>
//             <td className="border border-black px-4 py-2 text-center">{row.closeOpenTC2}</td>
//             <td className="border border-black px-4 py-2 text-center">{row.remarks}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </div>
//   );
// }

// export default Timing;


import React from 'react';

const Timing = ({ data }: { data: { phase: string; close: number; open1: number; col4: number; col5: number; open2: number; col7: number; col8: number; }[] }) => {
  
  return (
    <div>
    <h3 className='pl-6'>3.6. Timing Test</h3>
    <h4 className='pl-[60px]'>3.6.1. At <strong>184 V AC</strong>, 80% of the rated control voltage (230 V AC)</h4>
    <table className="w-full table-fixed border-collapse mt-4">
      <thead>
        <tr>
          <td className="border border-black px-4 py-2 text-center">Phase</td>
          <td className="border border-black px-4 py-2 text-center">Close</td>
          <td className="border border-black px-4 py-2 text-center">Open (TC1)</td>
          <td className="border border-black px-4 py-2 text-center" colSpan={2}>Close - Open (TC1)</td>
          <td className="border border-black px-4 py-2 text-center">Open (TC2)</td>
          <td className="border border-black px-4 py-2 text-center" colSpan={2}>Close - Open (TC2)</td>
        
        </tr>
        
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="border border-black px-4 py-2 text-center">{row.phase}</td>
            <td className="border border-black px-4 py-2 text-center">{row.close}</td>
            <td className="border border-black px-4 py-2 text-center">{row.open1}</td>
            <td className="border border-black px-4 py-2 text-center">{row.col4}</td>
            <td className="border border-black px-4 py-2 text-center">{row.col5}</td>
            <td className="border border-black px-4 py-2 text-center">{row.open2}</td>
            <td className="border border-black px-4 py-2 text-center">{row.col7}</td>
            <td className="border border-black px-4 py-2 text-center">{row.col8}</td>
         
          </tr>
        ))}
      </tbody>
    </table>
    <h4 className='pl-[60px] mt-6'>3.6.2. At <strong>230 V AC</strong>, 100% of the rated control voltage (230 V AC)</h4>
    <table className="w-full table-fixed border-collapse mt-4">
      <thead>
        <tr>
          <td className="border border-black px-4 py-2 text-center">Phase</td>
          <td className="border border-black px-4 py-2 text-center">Close</td>
          <td className="border border-black px-4 py-2 text-center">Open (TC1)</td>
          <td className="border border-black px-4 py-2 text-center" colSpan={2}>Close - Open (TC1)</td>
          <td className="border border-black px-4 py-2 text-center">Open (TC2)</td>
          <td className="border border-black px-4 py-2 text-center" colSpan={2}>Close - Open (TC2)</td>
        
        </tr>
        
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="border border-black px-4 py-2 text-center">{row.phase}</td>
            <td className="border border-black px-4 py-2 text-center">{row.close}</td>
            <td className="border border-black px-4 py-2 text-center">{row.open1}</td>
            <td className="border border-black px-4 py-2 text-center">{row.col4}</td>
            <td className="border border-black px-4 py-2 text-center">{row.col5}</td>
            <td className="border border-black px-4 py-2 text-center">{row.open2}</td>
            <td className="border border-black px-4 py-2 text-center">{row.col7}</td>
            <td className="border border-black px-4 py-2 text-center">{row.col8}</td>
         
          </tr>
        ))}
      </tbody>
    </table>
    <h4 className='pl-[60px] mt-6'>3.5.3. At <strong>253 V AC</strong>, 110% of the rated control voltage (230 V AC)</h4>
    <table className="w-full table-fixed border-collapse mt-4">
      <thead>
        <tr>
          <td className="border border-black px-4 py-2 text-center">Phase</td>
          <td className="border border-black px-4 py-2 text-center">Close</td>
          <td className="border border-black px-4 py-2 text-center">Open (TC1)</td>
          <td className="border border-black px-4 py-2 text-center" colSpan={2}>Close - Open (TC1)</td>
          <td className="border border-black px-4 py-2 text-center">Open (TC2)</td>
          <td className="border border-black px-4 py-2 text-center" colSpan={2}>Close - Open (TC2)</td>
        
        </tr>
        
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="border border-black px-4 py-2 text-center">{row.phase}</td>
            <td className="border border-black px-4 py-2 text-center">{row.close}</td>
            <td className="border border-black px-4 py-2 text-center">{row.open1}</td>
            <td className="border border-black px-4 py-2 text-center">{row.col4}</td>
            <td className="border border-black px-4 py-2 text-center">{row.col5}</td>
            <td className="border border-black px-4 py-2 text-center">{row.open2}</td>
            <td className="border border-black px-4 py-2 text-center">{row.col7}</td>
            <td className="border border-black px-4 py-2 text-center">{row.col8}</td>
         
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Timing;