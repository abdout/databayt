import React from 'react';
import { Editor } from '@tiptap/react';
import { Icon } from "@iconify/react";
import { Toggle } from '@/components/ui/toggle';

interface ToolbarProps {
  editor: Editor | null;
}

const Toolbar: React.FC<ToolbarProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className='fixed top-4 right-[30rem] flex space-x-4 items-center' dir='ltr'>
      <Toggle
        size='sm'
        pressed={editor.isActive('bold')}
        onPressedChange={() =>
          editor.chain().focus().toggleBold().run()}
      >
        <Icon
          icon='octicon:bold-24'
          width={29}
          style={{ opacity: editor.isActive('bold') ? 1 : 0.5 }}
        />
      </Toggle>
      <Toggle
        size='sm'
        pressed={editor.isActive('underline')}
        onPressedChange={() =>
          editor.chain().focus().toggleUnderline().run()}
      >
        <Icon
          icon='bx:bx-underline'
          width={30}
          style={{ opacity: editor.isActive('underline') ? 1 : 0.5 }}
        />
      </Toggle>

      <Toggle
        size='sm'
        pressed={editor.isActive('bulletList')}
        onPressedChange={() =>
          editor.chain().focus().toggleBulletList().run()}
      >
        <Icon
          icon='bx:list-ul'
          width={31}
          style={{ opacity: editor.isActive('bulletList') ? 1 : 0.5 }}
        />
      </Toggle>
      <Toggle
        size='sm'
        pressed={editor.isActive('heading', { level: 1 })}
        onPressedChange={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <Icon
          icon='gravity-ui:heading-1'
          width={29}
          style={{ opacity: editor.isActive('heading', { level: 1 }) ? 1 : 0.5 }}
        />
      </Toggle>

      {/* Toggle for h2 */}
      <Toggle
        size='sm'
        pressed={editor.isActive('heading', { level: 2 })}
        onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <Icon
          icon='gravity-ui:heading-2'
          width={29}
          style={{ opacity: editor.isActive('heading', { level: 2 }) ? 1 : 0.5 }}
        />
      </Toggle>
    </div >
  );
};

export default Toolbar;