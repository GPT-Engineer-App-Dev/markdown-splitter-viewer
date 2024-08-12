import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";

const MarkdownEditor = ({ onContentChange }) => {
  const [content, setContent] = useState('# Welcome to Markdown Editor\n\nStart typing your markdown here...');

  const handleChange = (e) => {
    setContent(e.target.value);
    onContentChange(e.target.value);
  };

  return (
    <Textarea
      value={content}
      onChange={handleChange}
      className="w-full h-full resize-none font-mono"
      placeholder="Type your markdown here..."
    />
  );
};

export default MarkdownEditor;