import { useState } from "react";
import JsonEditor from "./components/JsonEditor";
import FormPreview from "./components/FormPreview";
import { Schema } from "./components/jsonInterfaces";

// Define the schema type

const defaultSchema: Schema = {
  formTitle: "Sample Form",
  formDescription: "This is a sample form description.",
  fields: [
    {
      id: "name",
      type: "text",
      label: "Full Name",
      required: true,
      placeholder: "Enter your full name",
    },

    {
      id: "comments",
      type: "textarea",
      label: "Comments",
      required: false,
      placeholder: "Any additional comments...",
    },
  ],
};

const App = () => {
  const [jsonSchema, setJsonSchema] = useState<Schema>(defaultSchema);

  return (
    <>
      <div className="flex	 pr-auto px-20 text-4xl font-sans	font-semibold	bg-slate-300">
        <h1 className="mx-auto pt-10 pb-10">Dynamic Form Generator</h1>
      </div>
      <div className="flex h-screen bg-slate-100 ">
        <div className="w-1/2">
          <JsonEditor jsonSchema={jsonSchema} onChange={setJsonSchema} />
        </div>

        <div className="w-1/2">
          <FormPreview jsonSchema={jsonSchema} />
        </div>
      </div>
    </>
  );
};

export default App;
