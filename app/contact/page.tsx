"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./contact.module.css";
import MapSection from "./components/MapSection";
import { ContactFormData } from "@/types";

type HelpMeItem = {
  id: number;
  selectedOption: string;
  text: string;
};

type FormData = {
  name: string;
  companyName: string;
  email: string;
  assistance: string;
  suggestions: string[];
  helpMe: HelpMeItem[];
  generalInfo: string[];
};

// Define initial form data
const initialFormData: FormData = {
  name: "",
  companyName: "",
  email: "",
  assistance: "",
  suggestions: [],
  helpMe: [],
  generalInfo: [],
};

const Contact = () => {
  const [mounted, setMounted] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  // Define states
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    surname: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    suggestions: [],
    generalInfo: [],
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [items, setItems] = useState<HelpMeItem[]>([
    { id: 1, selectedOption: "", text: "" },
  ]);

  // Handle mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Validation function
  const validate = () => {
    const tempErrors = {
      name: formData.name ? "" : "Name is required",
      surname: formData.surname ? "" : "Surname is required",
      email: /\S+@\S+\.\S+/.test(formData.email) ? "" : "Email is not valid",
      phone: formData.phone ? "" : "Phone is required",
      company: formData.company ? "" : "Company is required",
      message: formData.message ? "" : "Message is required",
    };

    setErrors(tempErrors);
    return Object.values(tempErrors).every((error) => !error);
  };

  // Handle form field change
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      const updatedFormData = { ...formData, helpMe: items };
      setFormData(updatedFormData);

      // Using a callback to log the form data after the state is updated
      setTimeout(() => {
        console.log("Form submitted:", updatedFormData);
      }, 0);

      alert("Form submitted");
    }
  };

  // Handle option change for HelpMe items
  const handleOptionChange = (
    id: number,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, selectedOption: e.target.value } : item
    );
    setItems(newItems);
  };

  // Handle text change for HelpMe items
  const handleTextChange = (
    id: number,
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, text: e.target.value } : item
    );
    setItems(newItems);
  };

  // Add a new HelpMe item
  const addItem = () => {
    const newItem = { id: items.length + 1, selectedOption: "", text: "" };
    setItems((prev) => [...prev, newItem]);
  };

  // Remove a HelpMe item
  const removeItem = (id: number) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  // Handle suggestions text area changes
  const handleTextareaChange = (
    index: number,
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newSuggestions = [...(formData.suggestions || [])];
    newSuggestions[index] = e.target.value;
    setFormData((prev) => ({ ...prev, suggestions: newSuggestions }));
  };

  // Add a new suggestion text area
  const handleAddTextarea = () => {
    setFormData((prev) => ({
      ...prev,
      suggestions: [...(prev.suggestions || []), ""],
    }));
  };

  // Remove a suggestion text area
  const handleRemoveTextarea = (index: number) => {
    const newSuggestions = (formData.suggestions || []).filter(
      (_, i) => i !== index
    );
    setFormData((prev) => ({ ...prev, suggestions: newSuggestions }));
  };

  // Handle general info text area changes
  const handleGeneralInfoTextAreaChange = (
    index: number,
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newGeneralInfo = [...formData.generalInfo];
    newGeneralInfo[index] = e.target.value;
    setFormData((prev) => ({ ...prev, generalInfo: newGeneralInfo }));
  };

  // Add a new general info text area
  const handleAddGeneralInfoTextArea = () => {
    setFormData((prev) => ({
      ...prev,
      generalInfo: [...prev.generalInfo, ""],
    }));
  };

  // Remove a general info text area
  const handleRemoveGeneralInfoTextArea = (index: number) => {
    const newGeneralInfo = formData.generalInfo.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, generalInfo: newGeneralInfo }));
  };

  // Handle select change
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedOption(value);
    setFormData((prev) => ({ ...prev, assistance: value }));
  };

  // Scroll to form
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <section>
      <div>
        <div>
          <h1 className="text-4xl font-semibold font-sans  text-center text-red-600 mb-16 mt-7 justify justify-center">
            CONTACT US
          </h1>
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              className="bg-red-500 text-white px-6 py-3 rounded-md text-sm"
              onClick={() => {
                const element = document.getElementById("send-us-message");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Send us a message
            </button>
          </div>
        </div>

        {/* Contact Details */}
        <div className="max-w mx-auto mt-7 p-5 bg-gray-100 rounded justify justify-between">
          <div className="">
            {/* Wrapper for the two cards */}
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-3">
              {/* Contact Details Card */}
              <div className="bg-white p-6 shadow-lg rounded-lg w-full md:w-1/2">
                <div className="flex flex-row justify-between">
                  {/* Left Section: Cape Town, Head Office, and Address */}
                  <div className="flex flex-col space-y-2">
                    <h1 className="text-[30px] font-semibold font-sans text-gray-600 mb-4">
                      CAPE TOWN
                    </h1>
                    <p className="font-bold font-serif pb-6">HEAD OFFICE</p>
                    <p>Prestige Park</p>
                    <p>412 Voortrekker Rd</p>
                    <p>Maitland, 7405</p>
                    <p>Cape Town</p>
                  </div>

                  {/* Right Section: Email and Telephone */}
                  <div className="flex flex-col space-y-2 text-right">
                    <button
                      type="button"
                      className="text-gray-700 font-medium border-2 border-black 
                      px-4 py-1 rounded-xl hover:bg-red-500 hover:text-white hover:border-none transition duration-400"
                      // onClick={handleEmailClick}
                    >
                      <a href="mailto:info@captivity.co.za">Email</a>
                    </button>
                    <p>
                      <span className="font-bold">Tel</span>: +27 21-510 3868
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Card */}
              <div className="relative bg-white shadow-lg rounded-sm w-full md:w-1/2 border-8 border-gray-500">
                {/* Text box overlay */}
                <div className="absolute top-4 left-4 bg-white p-2 px-10 rounded shadow-md z-10">
                  <h1 className="text-[20px] font-semibold font-sans">
                    Prestige Park
                  </h1>
                  <a
                    href="https://www.google.com/maps/place/Prestige+Park/@-33.921608,18.508278,16z/data=!4m6!3m5!1s0x1dcc5d808f0240f3:0xfc49b4ee813b3c4e!8m2!3d-33.9212955!4d18.4974127!16s%2Fg%2F11sx28vy8y?hl=en-US&entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D" // Replace with the actual larger map link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    View larger map
                  </a>
                </div>
                <MapSection />
                {/* "Show Street Map" button */}
                <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-md z-10">
                  <a
                    href="https://www.google.com/maps/@-33.921608,18.508278,3a,75y,90t/data=!3m6!1e1!3m4!1s0x1dcc5d808f0240f3:0xfc49b4ee813b3c4e!8m2!3d-33.9212955!4d18.4974127?hl=en" // Replace with street map URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Show Street Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="max-w mx-auto mt-4 p-5 bg-gray-100 rounded">
            <div className="">
              {/* Wrapper for the two cards */}
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-3">
                {/* Contact Details Card */}
                <div className="bg-white p-6 shadow-lg rounded-lg w-full md:w-1/2">
                  <div className="flex flex-row justify-between">
                    {/* Left Section: Johannesburg, Branch, and Address */}
                    <div className="flex flex-col space-y-2">
                      <h1 className="text-[30px] font-semibold font-sans text-gray-600 mb-4">
                        JOHANNESBURG
                      </h1>
                      <p className="font-bold font-serif pb-6">BRANCH</p>
                      <p>6 Village Crescent</p>
                      <p>Linbro Village</p>
                      <p>Linbro Business Park</p>
                      <p>Johannesburg</p>
                    </div>

                    {/* Right Section: Email and Telephone */}
                    <div className="flex flex-col space-y-2 text-right">
                      <button
                        type="button"
                        className="text-gray-700 font-medium border-2 border-black 
                    px-4 py-1 rounded-xl hover:bg-red-500 hover:text-white hover:border-none transition duration-400"
                        // onClick={handleEmailClick}
                      >
                        <a href="mailto:info@captivity.co.za">Email</a>
                      </button>
                      <p>
                        <span className="font-bold">Tel:</span> +27 11-608 3014
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Card */}
                <div className="relative bg-white shadow-lg rounded-sm w-full md:w-1/2 border-8 border-gray-500">
                  {/* Text box overlay */}
                  <div className="absolute top-4 left-4 bg-white p-2 px-10 rounded shadow-md z-10">
                    <h1 className="text-[20px] font-semibold font-sans">
                      6 Village Cres
                    </h1>
                    <a
                      href="https://www.google.com/maps/place/6+Village+Cres,+Frankenwald,+Sandton,+2065,+South+Africa/@-26.076992,28.117539,16z/data=!4m6!3m5!1s0x1e956d5e7b0b10b1:0xe9044545127edf08!8m2!3d-26.0769922!4d28.1175386!16s%2Fg%2F11s7mvt010?hl=en-US&entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      View larger map
                    </a>
                  </div>
                  <MapSection />
                  {/* "Show Street Map" button */}
                  <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-md z-10">
                    <a
                      href="https://www.google.com/maps/@-33.921608,18.508278,3a,75y,90t/data=!3m6!1e1!3m4!1s0x1dcc5d808f0240f3:0xfc49b4ee813b3c4e!8m2!3d-33.9212955!4d18.4974127?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      Show Street Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-semibold font-sans text-center text-red-600 mb-6 mt-5">
              DISTRIBUTORS
            </h1>
          </div>
        </div>

        <div className="max-w mx-auto mt-4 p-5 bg-gray-100 rounded">
          <div className="">
            {/* Wrapper for the two cards */}
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-3">
              {/* Contact Details Card */}
              <div className="bg-white p-6 shadow-lg rounded-lg w-full md:w-1/2">
                <div className="flex flex-row justify-between">
                  {/* Left Section: Port Elizabeth, Distributor, and Address */}
                  <div className="flex flex-col space-y-2">
                    <h1 className="text-[30px] font-semibold font-sans text-gray-600 mb-4">
                      PORT ELIZABETH
                    </h1>
                    <p className="font-bold font-serif pb-6">DISTRIBUTOR</p>
                    <p>The Cap Company</p>
                    <p>57 Bendor Drive</p>
                    <p>Beverley Grove</p>
                    <p>Port Elizabeth</p>
                    <p>6070</p>
                  </div>

                  {/* Right Section: Email and Cell */}
                  <div className="flex flex-col space-y-2 text-right">
                    <p className="text-sm">Charmaine</p>
                    <button
                      type="button"
                      className="text-gray-700 font-medium border-2 border-black 
                      px-4 py-1 rounded-xl hover:bg-red-500 hover:text-white hover:border-none transition duration-400"
                      // onClick={handleEmailClick}
                    >
                      <a href="mailto:info@captivity.co.za">Email</a>
                    </button>
                    <p>
                      <span className="font-bold">Cell:</span> +27 84 848 4726
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Card */}
              <div className="relative bg-white shadow-lg rounded-sm w-full md:w-1/2 border-8 border-gray-500">
                {/* Text box overlay */}
                <div className="absolute top-4 left-4 bg-white p-2 px-10 rounded shadow-md z-10">
                  <h1 className="text-[20px] font-semibold font-sans">
                    57 Bendor Dr
                  </h1>
                  <a
                    href="https://www.google.com/maps?ll=-33.966822,25.490171&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=57+Bendor+Dr+Beverley+Grove+Gqeberha+6070"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    View larger map
                  </a>
                </div>
                <MapSection />
                {/* "Show Street Map" button */}
                <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-md z-10">
                  <a
                    href="https://www.google.com/maps/@-33.921608,18.508278,3a,75y,90t/data=!3m6!1e1!3m4!1s0x1dcc5d808f0240f3:0xfc49b4ee813b3c4e!8m2!3d-33.9212955!4d18.4974127?hl=en" // Replace with street map URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Show Street Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w mx-auto mt-4 p-5 bg-gray-100 rounded">
          <div className="">
            {/* Wrapper for the two cards */}
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-3">
              {/* Contact Details Card */}
              <div className="bg-white p-6 shadow-lg rounded-lg w-full md:w-1/2">
                <div className="flex flex-row justify-between">
                  {/* Left Section: Port Elizabeth, Distributor, and Address */}
                  <div className="flex flex-col space-y-2">
                    <h1 className="text-[30px] font-semibold font-sans text-gray-600 mb-4">
                      EAST LONDON
                    </h1>
                    <p className="font-bold font-serif pb-6">DISTRIBUTOR</p>
                    <p>Garth Westphal Agencies CC</p>
                    <p>5 Manchester Park</p>
                    <p>Manchester Road</p>
                    <p>Chiselhurst</p>
                    <p>East London</p>
                  </div>

                  {/* Right Section: Email and Cell */}
                  <div className="flex flex-col space-y-2 text-right">
                    <p className="text-sm">Garth Westphal</p>
                    <button
                      type="button"
                      className="text-gray-700 font-medium border-2 border-black 
                      px-4 py-1 rounded-xl hover:bg-red-500 hover:text-white hover:border-none transition duration-400"
                      // onClick={handleEmailClick}
                    >
                      <a href="mailto:info@captivity.co.za">Email</a>
                    </button>
                    <p>
                      <span className="font-bold">Tel:</span> 043 726 9952 / 043
                      721 3036
                    </p>
                    <p>
                      <span className="font-bold">Cell:</span> 083 986 7537
                    </p>
                    <p>
                      <span className="font-bold">Fax:</span> 086 562 2987
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Card */}
              <div className="relative bg-white shadow-lg rounded-sm w-full md:w-1/2 border-8 border-gray-500">
                {/* Text box overlay */}
                <div className="absolute top-4 left-4 bg-white p-2 px-10 rounded shadow-md z-10">
                  <h1 className="text-[20px] font-semibold font-sans">
                    5 Manchester Rd
                  </h1>
                  <a
                    href="https://www.google.com/maps?ll=-32.988585,27.887492&z=16&t=m&hl=en-US&gl=US&mapclient=embed&q=5+Manchester+Rd+Chiselhurst+East+London+5247"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    View larger map
                  </a>
                </div>
                <MapSection />
                {/* "Show Street Map" button */}
                <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-md z-10">
                  <a
                    href="https://www.google.com/maps/@-33.921608,18.508278,3a,75y,90t/data=!3m6!1e1!3m4!1s0x1dcc5d808f0240f3:0xfc49b4ee813b3c4e!8m2!3d-33.9212955!4d18.4974127?hl=en" // Replace with street map URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Show Street Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w mx-auto mt-4 p-5 bg-gray-100 rounded">
          <div className="">
            {/* Wrapper for the two cards */}
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-3">
              {/* Contact Details Card */}
              <div className="bg-white p-6 shadow-lg rounded-lg w-full md:w-1/2">
                <div className="flex flex-row justify-between">
                  {/* Left Section: Swaziland, Distributor, and Address */}
                  <div className="flex flex-col space-y-2">
                    <h1 className="text-[30px] font-semibold font-sans text-gray-600 mb-4">
                      SWAZILAND
                    </h1>
                    <p className="font-bold font-serif pb-6">DISTRIBUTOR</p>
                    <p>Dixies International</p>
                    <p>3rd Street Industrial Sites</p>
                    <p>Matsapha – Eswatini</p>
                    <p>Swaziland</p>
                  </div>

                  {/* Right Section: Email and Tel */}
                  <div className="flex flex-col space-y-2 text-right">
                    <p className="text-sm">Patty De Lorenzo</p>
                    <button
                      type="button"
                      className="text-gray-700 font-medium border-2 border-black 
                      px-4 py-1 rounded-xl hover:bg-red-500 hover:text-white hover:border-none transition duration-400"
                      // onClick={handleEmailClick}
                    >
                      <a href="mailto:info@captivity.co.za">Email</a>
                    </button>
                    <p>
                      <span className="font-bold">Tel:</span> +268 2518 6154
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Card */}
              <div className="relative bg-white shadow-lg rounded-sm w-full md:w-1/2 border-8 border-gray-500">
                {/* Text box overlay */}
                <div className="absolute top-4 left-4 bg-white p-2 px-10 rounded shadow-md z-10">
                  <h1 className="text-[20px] font-semibold font-sans">
                    Dixie's International
                  </h1>
                  <a
                    href="https://www.google.com/maps?ll=-26.497062,31.316169&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=7356850210717834368"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    View larger map
                  </a>
                </div>
                <MapSection />
                {/* "Show Street Map" button */}
                <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-md z-10">
                  <a
                    href="https://www.google.com/maps/@-33.921608,18.508278,3a,75y,90t/data=!3m6!1e1!3m4!1s0x1dcc5d808f0240f3:0xfc49b4ee813b3c4e!8m2!3d-33.9212955!4d18.4974127?hl=en" // Replace with street map URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Show Street Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="max-w mx-auto mt-4 p-5 bg-gray-100 rounded">
            <div className="">
              {/* Wrapper for the two cards */}
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-3">
                {/* Contact Details Card */}
                <div className="bg-white p-6 shadow-lg rounded-lg w-full md:w-1/2">
                  <div className="flex flex-row justify-between">
                    {/* Left Section: Zimbabwe, Distributor, and Address */}
                    <div className="flex flex-col space-y-2">
                      <h1 className="text-[30px] font-semibold font-sans text-gray-600 mb-4">
                        ZIMBABWE
                      </h1>
                      <p className="font-bold font-serif pb-6">DISTRIBUTOR</p>
                      <p>Texcolour</p>
                      <p>8 Neil Avenue</p>
                      <p>Msasa, Harare</p>
                      <p>Zimbabwe</p>
                    </div>

                    {/* Right Section: Email and Tel */}
                    <div className="flex flex-col space-y-2 text-right">
                      <p className="text-sm">Paul Howard</p>
                      <button
                        type="button"
                        className="text-gray-700 font-medium border-2 border-black 
                    px-4 py-1 rounded-xl hover:bg-red-500 hover:text-white hover:border-none transition duration-400"
                        // onClick={handleEmailClick}
                      >
                        <a href="mailto:info@captivity.co.za">Email</a>
                      </button>
                      <p>
                        <span className="font-bold">Tel:</span> +263 448 7318 |
                        +263 448 6057
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Card */}
                <div className="relative bg-white shadow-lg rounded-sm w-full md:w-1/2 border-8 border-gray-500">
                  {/* Text box overlay */}
                  <div className="absolute top-4 left-4 bg-white p-2 px-10 rounded shadow-md z-10">
                    <h1 className="text-[20px] font-semibold font-sans">
                      TexColour ZW
                    </h1>
                    <a
                      href="https://www.google.com/maps?ll=-17.840395,31.115856&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=15112726640460557271"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      View larger map
                    </a>
                  </div>
                  <MapSection />
                  {/* "Show Street Map" button */}
                  <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-md z-10">
                    <a
                      href="https://www.google.com/maps/@-33.921608,18.508278,3a,75y,90t/data=!3m6!1e1!3m4!1s0x1dcc5d808f0240f3:0xfc49b4ee813b3c4e!8m2!3d-33.9212955!4d18.4974127?hl=en" // Replace with street map URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      Show Street Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1
            id="send-us-message"
            className="text-2xl font-bold text-center text-red-600 mb-5 mt-10"
          >
            SEND US A MESSAGE
          </h1>
        </div>

        <div className="relative">
          <div className="max-w-[840px] mx-auto mt-3 mb-10 p-5 bg-gray-100 rounded">
            <form ref={formRef}>{/* ... */}</form>{" "}
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col md:flex-row items-start justify-between">
                <div className="w-full md:w-1/2 md:pl-2 mt-4">
                  <label className="block text-gray-500">
                    First Name <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full hover:bg-gray-300 hover:shadow-md transition duration-400 bg-gray-200 ${
                      errors.name
                        ? "border-l-2 border-l-red-500"
                        : "border-gray-300"
                    } py-2 px-3 shadow-sm focus:outline-none`}
                  />
                  {errors.name && (
                    <p className="text-red-500 max-w-[350px] text-xs mt-2 bg-red-100 p-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="w-full md:w-1/2 md:pl-2 mt-4">
                  <label className="block text-gray-500">Surname</label>
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className={`mt-1 block w-full hover:bg-gray-300 hover:shadow-md transition duration-400 bg-gray-200 ${
                      errors.surname
                        ? "border-l-2 border-l-red-500"
                        : "border-gray-300"
                    } py-2 px-3 shadow-sm focus:outline-none`}
                  />
                  {errors.surname && (
                    <p className="text-red-500 text-xs mt-2 bg-red-100 p-1">
                      {errors.surname}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-4 flex flex-col md:flex-row items-start justify-between">
                <div className="w-full md:w-1/2 md:pl-2 mt-4">
                  <label className="block text-gray-500 text-sm">
                    Email Address <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full hover:bg-gray-300 hover:shadow-md transition duration-400 bg-gray-200 ${
                      errors.email
                        ? "border-l-2 border-l-red-500"
                        : "border-gray-300"
                    } py-2 px-3 shadow-sm focus:outline-none`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-2 bg-red-100 p-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="w-full md:w-1/2 md:pl-2 mt-4">
                  <label className="block text-gray-500 text-sm">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`mt-1 block w-full hover:bg-gray-300 hover:shadow-md transition duration-400 bg-gray-200 ${
                      errors.phone
                        ? "border-l-2 border-l-red-500"
                        : "border-gray-300"
                    } py-2 px-3 shadow-sm focus:outline-none`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-2 bg-red-100 p-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-500">
                  Company <span className="text-red-700">*</span>
                </label>
                <textarea
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`mt-1 block w-full resize-y hover:bg-gray-300 hover:shadow-md transition duration-400 bg-gray-200 ${
                    errors.company
                      ? "border-l-2 border-l-red-500"
                      : "border-gray-300"
                  } py-2 px-3 shadow-sm focus:outline-none`}
                  rows={4}
                  placeholder="E.g. Captivity Promotions"
                />
                {errors.company && (
                  <p className="text-red-500 text-xs mt-2 bg-red-100 p-1">
                    {errors.company}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-500">
                  Message <span className="text-red-700">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 block w-full resize-y hover:bg-gray-300 hover:shadow-md transition duration-400 bg-gray-200 ${
                    errors.message
                      ? "border-l-2 border-l-red-500"
                      : "border-gray-300"
                  } py-2 px-3 shadow-sm focus:outline-none`}
                  rows={4}
                  placeholder="Enter your message..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-2 bg-red-100 p-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="mt-10 mb-16 flex">
                <button
                  type="submit"
                  className="bg-red-600 text-white px-4 py-2 text-sm"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="relative mt-32">
            <div className={`${styles.scrollToTop} absolute mt-20 mb-20`}>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Scroll to Top"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
<svg
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  stroke="#ff4d00"
>
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g
    id="SVGRepo_tracerCarrier"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></g>
  <g id="SVGRepo_iconCarrier">
    {" "}
    <path
      d="M15.5 14.5C15.4015 14.5005 15.3038 14.4813 15.2128 14.4435C15.1218 14.4057 15.0392 14.3501 14.97 14.28L11.97 11.28L8.96999 14.28C8.82472 14.3502 8.6607 14.3716 8.50227 14.3411C8.34385 14.3107 8.19947 14.23 8.09056 14.111C7.98165 13.9919 7.91402 13.841 7.89771 13.6805C7.88139 13.52 7.91726 13.3585 7.99999 13.22L11.5 9.72001C11.6406 9.57956 11.8312 9.50067 12.03 9.50067C12.2287 9.50067 12.4194 9.57956 12.56 9.72001L16.06 13.22C16.2004 13.3606 16.2793 13.5513 16.2793 13.75C16.2793 13.9488 16.2004 14.1394 16.06 14.28C15.9873 14.3539 15.8998 14.4116 15.8034 14.4495C15.7069 14.4874 15.6035 14.5046 15.5 14.5Z"
      fill="#ff4d00"
    ></path>{" "}
  </g>
</svg>;
