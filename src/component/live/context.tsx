// context.tsx
'use client';
import React from 'react';
import { ComponentConfig } from './component';

export interface ComponentProps {
  size?: string;
  color?: string;
}

export interface ContextType {
  selectedComponent: string;
  componentConfig: ComponentConfig | null;
  props: ComponentProps;
  selectComponent: (componentName: string, newProps: ComponentProps) => void;
  activeProp: string | null;
  setActiveProp: (prop: string | null) => void;
  activeSubItem: ComponentConfig | null; // Add activeSubItem property
  setActiveSubItem: (item: ComponentConfig | null) => void; // Add setActiveSubItem method
}

export const ComponentContext = React.createContext<ContextType>({
  selectedComponent: '',
  componentConfig: null,
  props: {},
  selectComponent: () => {},
  activeProp: null,
  setActiveProp: () => {},
  activeSubItem: null, // Initialize activeSubItem
  setActiveSubItem: () => {}, // Initialize setActiveSubItem
});
