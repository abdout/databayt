// app/Sidebar.tsx

import { registry } from "./registry";


interface SidebarProps {
  onSelect: (component: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
  return (
    <div className="w-64 p-4 border-r">
      <h2 className="text-sm font-bold px-4">Components</h2>
      <ul>
        {Object.keys(registry).map((component) => (
          <li key={component}>
            <button
              className="text-sm font-medium px-4 reveal"
              onClick={() => onSelect(component)}
            >
              {component}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;