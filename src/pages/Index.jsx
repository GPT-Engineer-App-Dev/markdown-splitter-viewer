import React, { useState, useCallback } from 'react';
import MarkdownEditor from '../components/MarkdownEditor';
import MarkdownPreview from '../components/MarkdownPreview';
import Toolbar from '../components/Toolbar';

const Index = () => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [activeTab, setActiveTab] = useState('edit');

  const handleInsert = useCallback((text) => {
    setMarkdownContent(prev => prev + text);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">Markdown Editor</h1>
          <div className="flex space-x-2">
            <button
              className={`px-3 py-1 rounded ${activeTab === 'edit' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('edit')}
            >
              Edit
            </button>
            <button
              className={`px-3 py-1 rounded ${activeTab === 'preview' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('preview')}
            >
              Preview
            </button>
          </div>
        </div>
      </header>
      <main className="flex-grow flex flex-col max-w-5xl mx-auto w-full bg-white shadow-md my-8">
        <Toolbar onInsert={handleInsert} />
        <div className="flex-grow flex">
          {activeTab === 'edit' ? (
            <div className="w-full">
              <MarkdownEditor content={markdownContent} onContentChange={setMarkdownContent} />
            </div>
          ) : (
            <div className="w-full border-l">
              <MarkdownPreview content={markdownContent} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;