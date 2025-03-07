import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="max-w-4xl mx-auto mt-16 px-4 py-16">
      <h2 className="text-3xl md:text-3xl font-satoshi font-bold text-gray-900 text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        <Accordion open={open === 1}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="flex flex-row-reverse justify-between items-center px-3 py-4  rounded-lg text-lg font-semibold text-gray-800 cursor-pointer hover:bg-gray-100 focus:outline-none border  transition-all duration-200">
            <ChevronDownIcon
              className={`h-6 w-6 transform transition-transform ${
                open === 1 ? "rotate-180" : "rotate-0"
              }`}
            />
            <span className="flex-1 text-left ml-2 font-satoshi">
              What is a resume template?
            </span>
          </AccordionHeader>
          <AccordionBody className="px-3 py-4 text-gray-600 bg-white rounded-b-lg ">
            A resume template is a pre-designed format that helps you quickly
            create a professional resume.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 2}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="flex flex-row-reverse justify-between items-center px-3 py-4  rounded-lg text-lg font-semibold text-gray-800 cursor-pointer hover:bg-gray-100 focus:outline-none border  transition-all duration-200">
            <ChevronDownIcon
              className={`h-6 w-6 transform transition-transform ${
                open === 2 ? "rotate-180" : "rotate-0"
              }`}
            />
            <span className="flex-1 text-left ml-2 font-satoshi">
              How do I use a template?
            </span>
          </AccordionHeader>
          <AccordionBody className="px-3 py-4 text-gray-600 bg-white rounded-b-lg ">
            Simply click the Use Template button on your desired template, and
            you ll be directed to the editor.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="flex flex-row-reverse justify-between items-center px-3 py-4  rounded-lg text-lg font-semibold text-gray-800 cursor-pointer hover:bg-gray-100 focus:outline-none border  transition-all duration-200">
            <ChevronDownIcon
              className={`h-6 w-6 transform transition-transform ${
                open === 3 ? "rotate-180" : "rotate-0"
              }`}
            />
            <span className="flex-1 text-left ml-2 font-satoshi">
              Are these templates free to use?
            </span>
          </AccordionHeader>
          <AccordionBody className="px-3 py-4 text-gray-600 bg-white rounded-b-lg ">
            Yes! All templates are free to use, and you can customize them
            according to your needs.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}
