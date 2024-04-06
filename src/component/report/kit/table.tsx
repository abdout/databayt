// Kit.tsx
'use client';
import Modal from '@/component/atom/modal/modal';

import { useModal } from '@/provider/modal';
import React, { useEffect, FC } from 'react';
import Edit from '../footer/edit';
import { useKit } from '@/provider/kit';


interface KitProps {
  triggerUpdate: boolean;
}

interface KitData {
  equipment: string;
  serial: string;
  date: string;
}

const Kit: FC<KitProps> = ({ triggerUpdate }) => {
  const { kit, refreshKit, updateKit } = useKit();
  const { modal, openModal } = useModal();

  useEffect(() => {
    refreshKit();
  }, [triggerUpdate]);

  interface Field {
    label: string;
    key: keyof KitData;
  }
  
  const fields: Field[] = [
    { label: 'No.', key: 'equipment' },
    { label: 'Equipment', key: 'equipment' },
    { label: 'Serial no.', key: 'serial' },
    { label: 'CC due Date', key: 'date' },
  ];

  const handleFieldChange = async (fieldKey: keyof KitData, newValue: string) => {
    if (kit) {
      const updatedKit = { ...kit, [fieldKey]: newValue };
      await updateKit(updatedKit);
    }
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal(null);
  };

  return (
    <>
      {modal.open && (
        <Modal content={<Edit />} />
      )}
      <table className="w-full table-auto border-collapse border border-black" onContextMenu={handleRightClick}>
        <thead>
          <tr className="border border-black">
            {fields.map((field, index) => (
              <th key={index} className="border border-black p-2">{field.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border border-black">
            {fields.map((field, index) => (
              <td key={index} className="border border-black p-2">
                <div
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleFieldChange(field.key, e.target.textContent || '')}
                  style={{ outline: 'none' }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.currentTarget.focus();
                  }}
                  onContextMenu={(e) => e.stopPropagation()}
                >
                  {kit ? kit[field.key] : 'Loading...'}
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Kit;