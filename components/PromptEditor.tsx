"use client";

import { useEffect, useState } from "react";

type Template = {
  id: number;
  title: string;
  content: string;
};

export default function PromptEditor() {
  const [prompt, setPrompt] = useState("");
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/templates.json")
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const loadTemplate = (content: string) => {
    setPrompt(content);
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium">
        Prompt Editor
      </label>

      <textarea
        className="w-full border rounded p-3 min-h-[120px]"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
        aria-label="Prompt editor"
      />

      {loading ? (
        <p className="text-sm text-gray-500">Loading templates...</p>
      ) : (
        <div className="flex gap-2 flex-wrap">
          {templates.map((tpl) => (
            <button
              key={tpl.id}
              onClick={() => loadTemplate(tpl.content)}
              className="border rounded px-3 py-1 text-sm"
            >
              {tpl.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


