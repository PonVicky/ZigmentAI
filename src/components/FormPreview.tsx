import React from "react";
import { Schema } from "./jsonInterfaces";

interface FormPreviewProps {
  jsonSchema: Schema;
}

const FormPreview = ({ jsonSchema }: FormPreviewProps) => {
  return (
    <>
      <h2 className="pl-2 font-medium	">Form</h2>

      <div className="p-4">
        <h1 className="text-2xl font-bold">{jsonSchema.formTitle}</h1>
        <p className="text-lg text-gray-600">{jsonSchema.formDescription}</p>

        <form className="mt-4">
          {jsonSchema.fields.map((field) => (
            <div key={field.id} className="mb-4">
              <label htmlFor={field.id} className="block text-lg ">
                {field.label}
              </label>
              {field.type === "text" ||
              field.type === "email" ||
              field.type === "textarea" ? (
                <input
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                />
              ) : field.type === "select" ? (
                <select
                  id={field.id}
                  required={field.required}
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                >
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : field.type === "radio" ? (
                <div className="mt-2">
                  {field.options?.map((option) => (
                    <div key={option.value}>
                      <input
                        type="radio"
                        id={`${field.id}-${option.value}`}
                        name={field.id}
                        value={option.value}
                        required={field.required}
                      />
                      <label
                        htmlFor={`${field.id}-${option.value}`}
                        className="ml-2"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </form>
      </div>
    </>
  );
};

export default FormPreview;
