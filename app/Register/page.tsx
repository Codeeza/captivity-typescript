"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { countries } from "@/lib/CountrySelect";

// Define the interface for form fields
interface FormFields {
  companyName: string;
  vatNumber: number;
  ckNumber: string;
  userName: string;
  passWord: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  natureOfBussiness: string;
  supplierOption: string;
  ifOther?: string;
  webLink: string;
  posInComp: string;
  streetOne: string;
  streetTwo: string;
  suburb: string;
  city: string;
  zipCode: string;
  country: string;
  salesRep: string;
  termsAgree: boolean;
}
interface Country {
  code: string;
  name: string;
}

// Initialize form fields
const initialFields: FormFields = {
  companyName: "",
  vatNumber: 0,
  ckNumber: "",
  userName: "",
  passWord: "",
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  natureOfBussiness: "",
  supplierOption: "",
  ifOther: "",
  webLink: "",
  posInComp: "",
  streetOne: "",
  streetTwo: "",
  suburb: "",
  city: "",
  zipCode: "",
  country: "",
  salesRep: "",
  termsAgree: false,
};

const Register: React.FC = () => {
  const [fields, setFields] = useState<FormFields>(initialFields);

  useEffect(() => {
    // Ensures that the component renders correctly on the client side
    // and matches the initial HTML structure
  }, []);

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFields((prevFields) => ({
        ...prevFields,
        [name]: checked,
      }));
    } else {
      setFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <div>
      <div className="p-12">
        <h1 className="text-slate-600 font-bold text-2xl">
          Our Brand is strictly distributed via authorised distributors namely:
        </h1>
        <ul className="list-disc ml-10 my-3">
          <li>Promotional Companies</li>
          <li>Advertising</li>
          <li>Branders and Event Companies</li>
          <li>Independent resellers</li>
        </ul>
        <h1 className="text-slate-600 font-bold text-xl">
          Should you fall into one of these categories and would like to
          register as a vendor.
        </h1>
      </div>
      <div className="bg-gray-50 pb-5">
        <Image
          src="/registration-form.png"
          alt="Registration Form"
          width={1827}
          height={243}
          priority
        />
        <h3 className="ml-10 my-5 text-slate-500 font-semibold text-xl">
          Existing customers of Captivity can also complete the form below to
          create a web account.
        </h3>
        <div className="text-sm border m-10 border-slate-500">
          <form
            onSubmit={handleSubmit}
            className="p-5 text-slate-500 font-bold space-y-5"
          >
            {/* Company Name Input */}
            <div className="mt-5">
              <label htmlFor="companyName">
                Company Name / Account Number{" "}
                <span className="text-red-600">*</span>
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={fields.companyName}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* VAT Number Input */}
            <div>
              <label htmlFor="vatNumber">VAT Number</label>
              <input
                id="vatNumber"
                name="vatNumber"
                type="number"
                value={fields.vatNumber}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* CK Number Input */}
            <div>
              <label htmlFor="ckNumber">CK Number</label>
              <input
                id="ckNumber"
                name="ckNumber"
                type="text"
                value={fields.ckNumber}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* Username Input */}
            <div>
              <label htmlFor="userName">
                Username
                <span className="text-red-600">*</span>
              </label>
              <input
                id="userName"
                name="userName"
                type="text"
                value={fields.userName}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
              <label className="font-normal">Enter a Unique Username</label>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="passWord">
                Password
                <span className="text-red-600">*</span>
              </label>
              <input
                id="passWord"
                name="passWord"
                type="password"
                value={fields.passWord}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* User Email Input */}
            <div>
              <label htmlFor="email">
                User Email
                <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={fields.email}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* First Name Input */}
            <div>
              <label htmlFor="firstName">
                First Name
                <span className="text-red-600">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={fields.firstName}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* Last Name Input */}
            <div>
              <label htmlFor="lastName">
                Last Name
                <span className="text-red-600">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={fields.lastName}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <label htmlFor="phoneNumber">
                Phone Number
                <span className="text-red-600">*</span>
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                value={fields.phoneNumber}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* Nature of Business Option */}
            <div>
              <label htmlFor="natureOfBussiness">
                Nature of Business
                <span className="text-red-600">*</span>
              </label>
              <select
                id="natureOfBussiness"
                name="natureOfBussiness"
                value={fields.natureOfBussiness}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border font-normal"
              >
                <option value="">Select Business Nature</option>
                <option value="business1">Business 1</option>
                <option value="business2">Business 2</option>
              </select>
            </div>

            {/* Supplier Option */}
            <div>
              <label htmlFor="supplierOption">
                Are you a supplier for:
                <span className="text-red-600">*</span>
              </label>
              <select
                id="supplierOption"
                name="supplierOption"
                value={fields.supplierOption}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border font-normal"
              >
                <option value="">Select Option</option>
                <option value="captivity">Captivity</option>
                <option value="other">Other</option>
              </select>
              {fields.supplierOption === "other" && (
                <input
                  id="ifOther"
                  name="ifOther"
                  type="text"
                  placeholder="Specify if other"
                  value={fields.ifOther || ""}
                  onChange={handleChange}
                  className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                />
              )}
            </div>

            {/* Web Link Input */}
            <div>
              <label htmlFor="webLink">
                Web Link
                <span className="text-red-600">*</span>
              </label>
              <input
                id="webLink"
                name="webLink"
                type="url"
                value={fields.webLink}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* Position in Company Input */}
            <div>
              <label htmlFor="posInComp">
                Position in Company
                <span className="text-red-600">*</span>
              </label>
              <input
                id="posInComp"
                name="posInComp"
                type="text"
                value={fields.posInComp}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* Street Address Inputs */}
            <div>
              <label htmlFor="streetOne">
                Street Address 1<span className="text-red-600">*</span>
              </label>
              <input
                id="streetOne"
                name="streetOne"
                type="text"
                value={fields.streetOne}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>
            <div>
              <label htmlFor="streetTwo">Street Address 2</label>
              <input
                id="streetTwo"
                name="streetTwo"
                type="text"
                value={fields.streetTwo}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* Suburb Input */}
            <div>
              <label htmlFor="suburb">
                Suburb
                <span className="text-red-600">*</span>
              </label>
              <input
                id="suburb"
                name="suburb"
                type="text"
                value={fields.suburb}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* City Input */}
            <div>
              <label htmlFor="city">
                City
                <span className="text-red-600">*</span>
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={fields.city}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* Zip Code Input */}
            <div>
              <label htmlFor="zipCode">
                Zip Code
                <span className="text-red-600">*</span>
              </label>
              <input
                id="zipCode"
                name="zipCode"
                type="text"
                value={fields.zipCode}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* Country Selector */}
            <div>
              <label htmlFor="country">
                Country
                <span className="text-red-600">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={fields.country}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border font-normal"
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sales Representative Input */}
            <div>
              <label htmlFor="salesRep">Sales Representative</label>
              <input
                id="salesRep"
                name="salesRep"
                type="text"
                value={fields.salesRep}
                onChange={handleChange}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                id="termsAgree"
                name="termsAgree"
                type="checkbox"
                checked={fields.termsAgree}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="termsAgree">
                I agree to the Terms and Conditions
                <span className="text-red-600">*</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
