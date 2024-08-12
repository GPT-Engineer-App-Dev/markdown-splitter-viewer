import React, { useRef, useEffect } from 'react';
import { Textarea } from "@/components/ui/textarea";

const MarkdownEditor = ({ content, onContentChange }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [content]);

  const handleChange = (e) => {
    onContentChange(e.target.value);
  };

  return (
    <Textarea
      ref={textareaRef}
      value={content}
      onChange={handleChange}
      className="w-full resize-none border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
      placeholder="Type your markdown here..."
    />
  );
};

export default MarkdownEditor;