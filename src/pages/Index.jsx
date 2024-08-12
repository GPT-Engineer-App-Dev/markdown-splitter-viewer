import React, { useState } from 'react';
import MarkdownEditor from '../components/MarkdownEditor';
import MarkdownPreview from '../components/MarkdownPreview';

const Index = () => {
  const [markdownContent, setMarkdownContent] = useState('# Welcome to Markdown Editor\n\nStart typing your markdown here...');

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">Markdown Preview Editor</h1>
      </header>
      <main className="flex-grow flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4 border-r">
          <h2 className="text-xl font-semibold mb-2">Editor</h2>
          <MarkdownEditor onContentChange={setMarkdownContent} />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-2">Preview</h2>
          <MarkdownPreview content={markdownContent} />
        </div>
      </main>
    </div>
  );
};

export default Index;