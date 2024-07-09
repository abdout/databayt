'use client';
import React, { useEffect } from 'react'
import Bold from '@tiptap/extension-bold'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import Text from '@tiptap/extension-text'
import Underline from '@tiptap/extension-underline'
import Heading from '@tiptap/extension-heading'
import { EditorContent, useEditor } from '@tiptap/react'
import Toolbar from './toolbar'

interface EditorProps {
  value: string;
  onChange: (content: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, Bold, Underline, BulletList, ListItem, Heading.configure({
      levels: [1, 2],
    }),],
    editorProps: {
      attributes: {
        class: "border border-gray-300 w-full h-80 p-4  outline-none rounded-none hover:border-gray-300",
      },
    },
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  })

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(value);
    }
  }, [value]);

  if (!editor) {
    return null
  }

  return (
    <div className='flex flex-col space-y-10 '>
      <Toolbar editor={editor} />
      <div className="w-full">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default Editor;