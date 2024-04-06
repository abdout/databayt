'use client';
import React from 'react';

export interface ActionProps {
  handleApprove: () => void;
  handleEdit: () => void;
  handleSend: () => void;
  handleDownload: () => void;
}

// Create a context with empty functions as the default value
export const ActionContext = React.createContext<ActionProps>({
  handleApprove: () => {},
  handleEdit: () => {},
  handleSend: () => {},
  handleDownload: () => {},
});