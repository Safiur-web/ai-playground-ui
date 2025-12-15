export default function ChatOutput() {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">
        AI Response / Chat Output
      </label>

      <div className="border rounded p-4 min-h-[160px] bg-gray-50">
        <p className="text-sm text-gray-700">
          This is a mock AI response.
        </p>
      </div>

      <div className="flex gap-2">
        <button
          className="border rounded px-3 py-2"
          aria-label="Copy response"
        >
          Copy
        </button>

        <button
          className="border rounded px-3 py-2"
          aria-label="Clear response"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
