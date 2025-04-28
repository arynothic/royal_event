'use client';

import React, { useState, useRef, useEffect } from 'react';
import mermaid from 'mermaid';
import { toPng, toJpeg } from 'html-to-image';
import { useAuth } from '@clerk/nextjs';

type MermaidRenderResult = {
  svg: string;
};

// Initialize mermaid
mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
});

export default function DiagramEditor() {
  useAuth(); // Call useAuth if needed for its side effects or other return values
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [remainingUses, setRemainingUses] = useState<number | null>(null);
  const [code, setCode] = useState<string>(`graph TD
    A[Boy sees a girl he likes 😍] --> B[Instant gym motivation 💪]
    A --> C{Does she like me?}
    
    C -->|Maybe!| D[Time to Google 'How to know if she likes you']
    C -->|Not sure| E[Overthinking.exe has started]
    
    D --> F[Analyzing every micro-expression 🔍]
    D --> G[Reading 'Body Language 101' at 3 AM]
    
    E --> H{Is she just being friendly?}
    E --> I{What if her laugh was fake?}
    E --> J[Relief: She has a boyfriend]
    J -->|Wait what?| K[Why am I relieved? 😅]
    
    F --> L{Time to make a move?}
    G --> L
    H --> L
    I --> L
    K --> L
    
    L -->|Yes!| M[Practicing conversation in shower 🚿]
    L -->|No...| N[Back to watching motivational videos]
    
    M --> O[Actually talking to her]
    O -->|Success| P[Found love ❤️]
    O -->|Awkward silence| Q[Becomes gym bro & startup founder 📈]
    
    N --> R[Becomes successful anyway]
    R --> S[Plot twist: She slides into DMs 😎]
    
    P --> T[Happy Ending]
    Q --> T
    S --> T`);
  const [error, setError] = useState<string>('');
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderDiagram = async () => {
      try {
        const result = await mermaid.render('diagram', code) as MermaidRenderResult;
        if (diagramRef.current) {
          diagramRef.current.innerHTML = result.svg;
        }
        setError('');
      } catch (err: unknown) {
        console.error('Mermaid render error:', err);
        setError(err instanceof Error ? err.message : 'Error rendering diagram');
      }
    };

    renderDiagram();
  }, [code]);

  const handleGenerateAiDiagram = async () => {
    if (!aiPrompt.trim()) return;
    
    setIsLoading(true);
    setAiError(null);
    
    try {
      const response = await fetch('/api/diagram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: aiPrompt }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate diagram');
      }
      
      setCode(data.code);
      setRemainingUses(data.remainingUses);
      setIsAiOpen(false);
      setAiPrompt('');
    } catch (err) {
      setAiError(err instanceof Error ? err.message : 'Failed to generate diagram');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExport = async (format: 'png' | 'jpg') => {
    if (!diagramRef.current) return;
    
    try {
      // Find the SVG element within the container
      const svgElement = diagramRef.current.querySelector('svg');
      if (!svgElement) {
        throw new Error('No diagram found');
      }

      // Create a temporary div to hold only the SVG
      const tempDiv = document.createElement('div');
      tempDiv.style.display = 'inline-block'; // Prevent extra spacing
      tempDiv.appendChild(svgElement.cloneNode(true));
      document.body.appendChild(tempDiv);

      // Export only the SVG
      const dataUrl = format === 'png' 
        ? await toPng(tempDiv, { quality: 1.0, pixelRatio: 4, style: { background: 'white' } })
        : await toJpeg(tempDiv, { quality: 1.0, pixelRatio: 4, style: { background: 'white' } });
      
      // Clean up
      document.body.removeChild(tempDiv);

      const link = document.createElement('a');
      link.download = `diagram.${format}`;
      link.href = dataUrl;
      link.click();
    } catch (err: unknown) {
      console.error('Export error:', err);
      setError('Error exporting diagram');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-2xl font-bold">Diagram Editor</h1>
        <button
          onClick={() => setIsInfoOpen(true)}
          className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-400 hover:border-gray-600 hover:text-gray-600"
          title="Information"
        >
          i
        </button>
      </div>

      {isInfoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">About Diagram Editor</h2>
              <button
                onClick={() => setIsInfoOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Features</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Create and edit Diagrams with live preview</li>
                  <li>Export diagrams in high quality PNG or JPG format</li>
                  <li>AI-powered diagram generation from text descriptions</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">AI Usage Limits</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>5 AI-generated diagrams per 24-hour period</li>
                  <li>Usage counter resets automatically after 24 hours</li>
                  <li>Usage is tracked per user account</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-600">
                  <span className="font-semibold">🚧 Beta Notice:</span> We are currently in the testing phase. Future updates will include more features and enhanced AI capabilities. Stay tuned for upgrades!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {isAiOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">Generate Diagram with AI</h2>
            <div className="mb-4">
              <textarea
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder="Describe your diagram in natural language..."
                className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              {aiError && (
                <p className="text-red-500 text-sm mt-2">{aiError}</p>
              )}
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsAiOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                onClick={handleGenerateAiDiagram}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                disabled={isLoading || !aiPrompt.trim()}
              >
                {isLoading ? 'Generating...' : 'Generate'}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="w-full">
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">
              Diagram Code
            </label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-96 p-4 font-mono text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"
              spellCheck={false}
            />
          </div>
          <div className="flex justify-end mt-2">
            <button
              onClick={() => setIsAiOpen(true)}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 relative font-semibold"
              title="Generate with AI"
            >
              AI
              {remainingUses !== null && (
                <span className="absolute -top-2 -right-2 bg-gray-700 text-xs px-2 py-1 rounded-full">
                  {remainingUses}
                </span>
              )}
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-2 flex justify-between items-center">
            <label className="block text-sm font-medium">Preview</label>
            <div className="space-x-2">
              <button
                onClick={() => handleExport('png')}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Export PNG
              </button>
              <button
                onClick={() => handleExport('jpg')}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Export JPG
              </button>
            </div>
          </div>
          {error && (
            <div className="text-red-500 text-sm mb-2">{error}</div>
          )}
          <div
            ref={diagramRef}
            className="w-full min-h-96 p-4 border rounded-lg bg-white flex items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
}
