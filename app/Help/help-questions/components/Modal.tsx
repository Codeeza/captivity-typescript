import React, { useState, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  lastname: string;
  email: string;
  company: string;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastname: "",
    email: "",
    company: "",
    message: "",
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Handle form submission, e.g., send data to an API
    setFormData({
      name: "",
      lastname: "",
      email: "",
      company: "",
      message: "",
    });
  };

  if (!isOpen || !isClient) return null;

  return (
    <div className="fixed inset-0 z-auto flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="bg-white h-full rounded-md shadow-lg p-5 w-5/6 overflow-auto max-w-[700px] relative">
        <button
          className="text-gray-700 absolute top-4 right-4 hover:text-red-600"
          onClick={onClose}
          aria-label="Close modal"
        >
          X
        </button>
        <form onSubmit={handleSubmit} className="space-y-5 w-full mx-auto">
          <h1 className="text-3xl font-bold mb-15 text-red-500">
            SEND US A MESSAGE
          </h1>
          <div className="p-2">
            <label
              className="block text-start text-sm font-medium text-gray-500"
            >
              First name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-4 bg-gray-100 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="p-2">
            <label
              className="block text-start text-sm font-medium text-gray-500"
            >
              Last name:
            </label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="mt-1 p-4 bg-gray-100 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="p-2">
            <label
              className="block text-start text-sm font-medium text-gray-500"
            >
              Your e-mail:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-4 bg-gray-100 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="p-2">
            <label
              className="block text-start text-sm font-medium text-gray-500"
            >
              Company:
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 p-4 bg-gray-100 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="p-2">
            <label
              className="block text-start text-sm font-medium text-gray-500"
            >
              Your Message:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-4 bg-gray-100 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-600 focus:border-red-600 sm:text-sm"
              rows={12}
              required
            />
          </div>

          <div className="mt-8 mb-8 flex">
            <button
              type="submit"
              className="lg:w-auto bg-indigo-500 text-white px-10 py-4 mt-4 rounded-sm shadow-md hover:bg-red-600 hover:shadow-xl transition duration-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
