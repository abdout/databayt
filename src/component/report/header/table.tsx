// Header.tsx
'use client';
import Modal from '@/component/atom/modal/modal';
import { useHeader } from '@/provider/header';
import { useModal } from '@/provider/modal'; // Import useModal
import React, { useEffect, FC } from 'react';
import Edit from './edit';
import { Abb } from '@/constant/abb';


interface HeaderProps {
  triggerUpdate: boolean;
  description: string;
}

interface HeaderData {
  customer: string;
  consultant: string;
  client: string;
  description: string;
  projectName: string;
  date: string;
  location: string;
  tag: string;
  sheet: string;
}

const Header: FC<HeaderProps> = ({ triggerUpdate, description }) => {
  const { header, refreshHeader, updateHeader } = useHeader();
  const { modal, openModal } = useModal(); // Get modal and openModal from useModal

  useEffect(() => {
    refreshHeader();
  }, [triggerUpdate]);

  interface Field {
    label: string;
    key: keyof HeaderData;
  }
  
  const fields: Field[] = [
    { label: 'Customer', key: 'customer' },
    { label: 'Consultant', key: 'consultant' },
    { label: 'Client', key: 'client' },
    { label: 'Description', key: 'description' },
    { label: 'Project Name', key: 'projectName' },
    { label: 'Date', key: 'date' },
    { label: 'Site', key: 'location' },
    { label: 'Designation', key: 'tag' },
    { label: 'Sheet', key: 'sheet' },
  ];

  const chunkedFields = [
    fields.slice(0, 3),
    fields.slice(3, 6),
    fields.slice(6, 9),
  ];

  const handleFieldChange = async (fieldKey: keyof HeaderData, newValue: string) => {
    if (header) {
      const updatedHeader = { ...header, [fieldKey]: newValue };
      await updateHeader(updatedHeader);
    }
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal(null); // Open the modal without a specific fieldKey
  };

  return (
    <>
      {modal.open && (
        <Modal content={<Edit />} /> // Render Modal when modal is open
      )}
      <div onContextMenu={handleRightClick}> {/* Add right-click event listener to the entire div */}
        <table className="table-fixed border-collapse border border-black w-full">
          <tbody>
            {chunkedFields.map((rowFields, rowIndex) => (
              <tr key={rowIndex} className={rowIndex === 0 ? 'min-h-[12rem]' : 'min-h-[4rem]'} >
                {rowFields.map((field, index) => (
                  <td key={index} className="border border-black">
                    <div className="p-2">
                      <h4 className='flex justify-center'>{field.label}:</h4>
                      <strong
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => handleFieldChange(field.key, e.target.textContent || '')}
                        style={{ outline: 'none' }}
                        className='flex justify-center'
                        onClick={(e) => {
                          e.preventDefault();
                          e.currentTarget.focus(); // Focus on left-click
                        }}
                        onContextMenu={(e) => e.stopPropagation()} // Prevent context menu on right-click
                      >
                        {header && (field.key === 'customer' || field.key === 'consultant' || field.key === 'client') ?
                          <img 
                            className= "p-2 "
                            src={`/report/${field.key}/${header[field.key].toLowerCase()}.png`}
                            alt={header[field.key]}
                            onError={(e) => {
                            (e.target as HTMLImageElement).src = '/report/placeholder.png'; // Replace with your placeholder image path
                          }}/> :
                          field.key === 'description' ? ((Abb[description.toUpperCase()] || description).toUpperCase() + " TEST") : header?.[field.key]
                        }
                      </strong>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Header;