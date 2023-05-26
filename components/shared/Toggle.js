"use client";
import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";

const OPTIONS = [
  {
    name: "Line",
    value: "line",
  },
  {
    name: "Bar",
    value: "bar",
  },
];

export default function Toggle({ onChange }) {
  const [selected, setSelected] = useState(OPTIONS[0]);

  useEffect(() => {
    if (onChange) {
      onChange(selected);
    }
  }, [selected, onChange]);

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
  };

  return (
    <RadioGroup value={selected} onChange={handleChange}>
      <div className="flex">
        {OPTIONS.map((option) => (
          <RadioGroup.Option
            key={option.name}
            value={option}
            className={({ active, checked }) =>
              `${
                active
                  ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                  : ""
              }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer border px-5 py-3 min-w-[50px] shadow-md focus:outline-none`
            }
          >
            {({ checked }) => (
              <>
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-sm">
                      <RadioGroup.Label
                        as="p"
                        className={`font-medium text-center  min-w-[50px] ${
                          checked ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {option.name}
                      </RadioGroup.Label>
                    </div>
                  </div>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
