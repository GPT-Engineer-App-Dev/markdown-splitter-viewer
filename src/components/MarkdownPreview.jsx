import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownPreview = ({ content }) => {
  return (
    <div className="prose max-w-none p-4 overflow-auto">
      <ReactMarkdown>{content || 'Start typing in the editor to see the preview'}</ReactMarkdown>
    </div>
  );
};

export default MarkdownPreview;