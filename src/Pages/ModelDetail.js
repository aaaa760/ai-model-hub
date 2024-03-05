import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RefreshIcon } from "@heroicons/react/outline";
// import { ClipboardCopyIcon } from "@heroicons/react/outline";

const ModelDetail = () => {
  const [model, setModel] = useState(null);
  const { id } = useParams();
  const [displayedDescription, setDisplayedDescription] = useState("");
  const [isComputing, setIsComputing] = useState(false);

  const handleCompute = () => {
    setIsComputing(true);
    let index = 0;
    const fullDescription = model.description;

    const typeCharacter = () => {
      if (index < fullDescription.length) {
        setDisplayedDescription((prev) => prev + fullDescription.charAt(index));
        index++;
        setTimeout(typeCharacter, 100); // Adjust the timeout to control speed
      } else {
        setIsComputing(false);
      }
    };

    typeCharacter();
  };

  useEffect(
    () => {
      const fetchModelDetail = async () => {
        try {
          const url = `https://ai-model-backend-laom3xzyu-aaaa760.vercel.app/api/models/${id}`;
          const response = await axios.get(url);
          setModel(response.data);
        } catch (error) {
          console.error("Error fetching model detail:", error);
        }
      };

      fetchModelDetail();
    },
    [id],
    window.innerWidth
  );

  if (!model) {
    return (
      <div className="flex justify-center items-center h-screen">
        <RefreshIcon className="animate-spin h-12 w-12 text-blue-500" />
      </div>
    );
  }

  const exampleCode = `
  from transformers import AutoTokenizer, AutoModelForCausalLM
  
  tokenizer = AutoTokenizer.from_pretrained("${model.name}")
  model = AutoModelForCausalLM.from_pretrained("${model.name}")
  
  input_text = "Write me a poem about Machine Learning."
  input_ids = tokenizer(input_text, return_tensors="pt")
  
  outputs = model.generate(**input_ids)
  print(tokenizer.decode(outputs[0]))
  `;

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full p-4 overflow-aut">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-4">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {model.name}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {model.category}
            </p>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {model.subcategory}
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-4">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">
                  Description
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {model.description}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Use Cases</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {model.useCases}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Provider</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {model.provider}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <h3 className="text-lg leading-6 font-medium text-gray-900 py-4 px-1">
          Usage
        </h3>

        <div className="">
          <p className="font-sm ">
            Below we share some code snippets on how to get quickly started with
            running the model. First make sure to pip install -U {model.name},
            then copy the snippet from the section that is relevant for your
            usecase.
          </p>
        </div>

        <h3 className="text-lg leading-6 font-medium text-gray-900 py-4 px-1">
          Running the model on a CPU
        </h3>
        <div className="my-2">
          <div className="bg-gray-100 text-gray-700 p-4 rounded-lg font-mono text-sm overflow-x-auto">
            <pre>
              <code>{exampleCode.trim()}</code>
            </pre>
          </div>
        </div>

        <h3 className="text-lg leading-6 font-medium text-gray-900 p-4 px-1">
          Running the model on a GPU
        </h3>
        <div className="my-2">
          <div className="bg-gray-100 text-gray-700 p-4 rounded-lg font-mono text-sm overflow-x-auto ">
            <pre>
              <code>{exampleCode.trim()}</code>
            </pre>
          </div>
        </div>
      </div>
      <div className=" w-full md:w-1/3  p-4 h-screen">
        <div className="sticky top-4 p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-2">
            Try the Model with a example{" "}
          </h2>
          <div className="bg-gray-100 p-4 rounded-md">

        
          <div className={isComputing ? "typing-text" : ""}>
            {displayedDescription ||
              model.description.substring(0, model.description.length / 2)}
          </div>
          </div>
          <button
            type="button"
            onClick={handleCompute}
            className="bg-gray-200 hover:bg-gray-200 rounded-md text-black font-xs px-5 py-1 mt-2 rounded w-fit"
          >
            Compute
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelDetail;
