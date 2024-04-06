'use client';
import React, { useState, useEffect } from 'react';
import Modal from '@/component/atom/modal/modal';
import { useFooter } from '@/provider/footer';
import { useModal } from '@/provider/modal';
import Edit from './edit';

interface IFooterProps {
  triggerUpdate: boolean;
  customer: string;
  consultant: string;
}

interface FooterData {
  contractor: string;
  customer: string;
  consultant: string;
  contractorName: string;
  customerName: string;
  consultantName: string;
  contractorSignature: string;
  customerSignature: string;
  consultantSignature: string;
}

const Footer: React.FC<IFooterProps> = ({ triggerUpdate, customer, consultant}) => {
  const { footer, refreshFooter, updateFooter } = useFooter();
  const { modal, openModal } = useModal();

  useEffect(() => {
    refreshFooter();
  }, [triggerUpdate]);

  const handleFieldChange = async (fieldKey: keyof FooterData, newValue: string) => {
    if (footer) {
      const updatedFooter = { ...footer, [fieldKey]: newValue };
      await updateFooter(updatedFooter);
    }
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal(null);
  };

  const fixedColumn = ['Company', 'Name', 'Signature'];
  const fields: (keyof FooterData)[] = ['contractor', 'customer', 'consultant'];

  return (
    <>
      {modal.open && (
        <Modal content={<Edit />} />
      )}
      <div onContextMenu={handleRightClick}>
        <table className="w-full table-fixed border-collapse border border-black">
          <tbody>
            {fixedColumn.map((item, index) => (
              <tr key={index} className="border border-black">
                <td className="border border-black p-2 pl-4">{item}</td>
                {fields.map((field, index) => (
                  <td key={index} className="border border-black p-2">
                    {item === 'Company' && field === 'contractor' ? (
                      <h4>Cont: <strong>ECO LIMITED</strong></h4>
                    ) : item === 'Company' && field === 'customer' ? (
                      <h4>Cust: <strong>{customer}</strong></h4>
                    ) : item === 'Company' && field === 'consultant' ? (
                      <h4>Cons: <strong>{consultant}</strong></h4>
                    ) : (
                    <strong
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleFieldChange(field, e.target.textContent || '')}
                      style={{ outline: 'none' }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.currentTarget.focus();
                      }}
                      onContextMenu={(e) => e.stopPropagation()}
                    >
                      {footer ? (item === 'Company' ? footer[field] : footer[field + item as keyof FooterData]) : 'Loading...'}
                    </strong>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Footer;