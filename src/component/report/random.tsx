'use client';
import React, { useRef } from 'react';

const RandomValueTable: React.FC = () => {
  const generateRandomValue = () => (Math.random() * (50 - 20) + 20).toFixed(2);

  const rows = new Array(26).fill(null);
  const columns = new Array(6).fill(null);

  const tableRef = useRef(null);

  const handleCopy = () => {
    let tableText = '';
    for (let row of rows) {
      let rowText = columns.map(() => generateRandomValue()).join('\t');
      tableText += rowText + '\n';
    }
    navigator.clipboard.writeText(tableText);
  };

  return (
    <>
      <button onClick={handleCopy}>Copy to clipboard</button>
      <table ref={tableRef}>
        <tbody>
          {rows.map((_, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((_, columnIndex) => (
                <td key={columnIndex} className="border">
                  {generateRandomValue()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RandomValueTable;