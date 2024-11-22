import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

interface JsonEditorProps {
  jsonSchema: object;
  onChange: (schema: object) => void;
}

const JsonEditor = ({ jsonSchema, onChange }: JsonEditorProps) => {
  const [error, setError] = useState("");

  const handleEditorChange = (value: string | undefined) => {
    try {
      const parsed = value ? JSON.parse(value) : {};
      setError("");
      onChange(parsed);
    } catch (err) {
      setError("Invalid JSON");
    }
  };

  return (
    <div className="w-full h-full ">
      <h2 className="pl-8 font-medium	">Editor</h2>
      <MonacoEditor
        height="100vh"
        language="json"
        theme="vs-light"
        value={JSON.stringify(jsonSchema, null, 2)}
        onChange={handleEditorChange}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}{" "}
    </div>
  );
};

export default JsonEditor;
