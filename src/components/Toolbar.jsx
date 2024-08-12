import React from 'react';
import { Button } from "@/components/ui/button";
import { Bold, Italic, List, ListOrdered } from 'lucide-react';

const Toolbar = ({ onInsert }) => {
  const tools = [
    { icon: <Bold className="h-4 w-4" />, action: '**Bold**' },
    { icon: <Italic className="h-4 w-4" />, action: '*Italic*' },
    { icon: <List className="h-4 w-4" />, action: '- Unordered list item' },
    { icon: <ListOrdered className="h-4 w-4" />, action: '1. Ordered list item' },
  ];

  return (
    <div className="flex items-center space-x-2 p-2 border-b">
      {tools.map((tool, index) => (
        <Button
          key={index}
          variant="ghost"
          size="sm"
          onClick={() => onInsert(tool.action)}
        >
          {tool.icon}
        </Button>
      ))}
    </div>
  );
};

export default Toolbar;