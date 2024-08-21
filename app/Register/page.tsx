"use client";
import { useEffect, useState } from "react";

import { FaLongArrowAltUp } from "react-icons/fa";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { countries } from "@/lib/CountrySelect";

const Register = () => {
  const [fields, setFields] = useState({
    companyName: "companyName",
    vatNumber: 77009900,
    ckNumber: "6677/88890",
    userName: "userName",
    passWord: "passWord",
    email: "jc@gmail.com",
    firstName: "firstName",
    lastName: "lastName",
    phoneNumber: "0685445888",
    natureOfBussiness: "",
    supplierOption: "",
    ifOther: undefined,
    webLink: "http://localhost:3000",
    posInComp: "posInComp",
    streetOne: "streetOne",
    streetTwo: "streetTwo",
    suburb: "suburb",
    city: "city",
    zipCode: "zipCode",
    country: "country",
    salesRep: "",
    termsAgree: "Yes"
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(fields)
  }

  
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
                onChange={(e) => setFields({...fields, companyName: e.target.value})}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                
              />
            </div>

            {/* vat number Input */}
            <div>
              <label htmlFor="vatNumber" className="">VAT Number</label>
              <input
                id="vatNumber"
                type="number"
                name="vatNumber"
                value={fields.vatNumber}
                onChange={(e) => setFields({...fields, vatNumber: e.target.value})}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* ck number Name Input  */}
            <div>
              <label htmlFor="ckNumber" className="">CK Number</label>
              <input
                id="ckNumber"
                name="ckNumber"
                type="text"
                value={fields.ckNumber}
                onChange={(e) => setFields({...fields, ckNumber: e.target.value})}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500" 
              />
            </div>
            
            {/* Username Input */}
            <div >
              <label htmlFor="userName">
                Username
                <span className="text-red-600">*</span>
              </label>
              <input
                id="userName"
                type="text"
                name="userName"
                value={fields.userName}
                onChange={(e) => setFields({...fields, userName: e.target.value})}
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
                type="password"
                name="passWord"
                value={fields.passWord}
                onChange={(e) => setFields({...fields, passWord: e.target.value})}
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
                type="email"
                name="email"
                value={fields.email}
                onChange={(e) => setFields({...fields, email: e.target.value})}
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
                type="text"
                name="firstName"
                value={fields.firstName}
                onChange={(e) => setFields({...fields, firstName: e.target.value})}
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
                type="text"
                name="lastName"
                value={fields.lastName}
                onChange={(e) => setFields({...fields, lastName: e.target.value})}
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
                type="text"
                name="phoneNumber"
                value={fields.phoneNumber}
                onChange={(e) => setFields({...fields, phoneNumber: e.target.value})}
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
                id="natureOfBusiness"
                name="natureOfBussiness"
                type="text"
                value={fields.natureOfBussiness}
                onChange={(e) => setFields({...fields, natureOfBussiness: e.target.value})}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border font-normal"
              >
                <option value="">Select Option</option>
                <option value="promotional">Promotional</option>
                <option value="brandingAndPrint">Branding & Print</option>
                <option value="nonProfitOrg">Non Profit Organization</option>
                <option value="events">Events</option>
                <option value="tourism">Tourism</option>
                <option value="retail">Retail</option>
                <option value="clothingBrand">Clothing Brand</option>
                <option value="safetyPPE">Safety/PPE</option>
                <option value="uniformShop">Uniform Shop</option>
                <option value="advertMarketing">Advertising/Marketing</option>
                <option value="nob">Non of the above</option>
              </select>
            </div>

            {/* Supplier Option*/}
            <div>
              <label htmlFor="supplierOption">
                Who are you currently buying from ?
                <span className="text-red-600">*</span>
              </label>
              <select
                id="supplierOption"
                name="supplierOption"
                type="text"
                value={fields.supplierOption}
                onChange={(e) => setFields({...fields, supplierOption: e.target.value})}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border font-normal" 
              >
                <option value="">Select Option</option>
                <option value="none">None</option>
                <option value="kevro">KEVRO</option>
                <option value="amrod">AMROD</option>
                <option value="vicbay">VICBAY</option>
                <option value="headwear24">HEADWEAR 24</option>
                <option value="massSupply">MASS SUPPLY</option>
                <option value="other">OTHER</option>
              </select>
            </div>

            {/*Explain if other supplier option input */}
            <div>
              <p className="flex" htmlFor={"ifOther"}>
                <FaLongArrowAltUp className="mt-0.5" /> If "OTHER" then please
                specify
              </p>
              <input
                id="ifOther"
                type="text"
                name="ifOther"
                value={fields.ifOther}
                onChange={(e) => setFields({...fields, ifOther: e.target.value})}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* Social Url Input */}
            <div>
              <label htmlFor="webLink">
                Website or Social Media Page
                <span className="text-red-600">*</span>
              </label>
              <input
                id="webLink"
                type="text"
                placeholder="www.yourcompany.com"
                name="webLink"
                value={fields.webLink}
                onChange={(e) => setFields({...fields, webLink: e.target.value})}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
              <label className="font-normal">
                Where would you be reselling our products?
              </label>
            </div>

            {/* Role at company Input */}
            <div>
              <label htmlFor="posInComp">Position held in company</label>
              <input
                id="posInComp"
                type="text"
                name="posInComp"
                value={fields.posInComp}
                onChange={(e) => setFields({...fields, posInComp: e.target.value})}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* Address Inputs */}

              {/*Address 1 Input */}
            <div>
              <label htmlFor="streetOne">
                Street Address
                <span className="text-red-600">*</span>
              </label>
              <input
                id="streetOne"
                type="text"
                value={fields.streetOne}
                onChange={(e) => setFields({...fields, streetOne: e.target.value})}
                placeholder="House number and street name"
                name="streetOne"
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* Address 2 Input */}
            <div>
              <label htmlFor="streetTwo">Address line 2 (Optional)</label>
              <input
                id="address2"
                type="text"
                name="streetTwo"
                value={fields.streetTwo}
                onChange={(e) => setFields({...fields, streetTwo: e.target.value})}
                placeholder="Enter Second Address"
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* Suburb Input */}
            <div>
              <label htmlFor="suburb">Suburb</label>
              <input
                id="suburb"
                type="text"
                name="suburb"
                value={fields.suburb}
                onChange={(e) => setFields({...fields, suburb: e.target.value})}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* City Input */}
            <div>
              <label htmlFor="city">
                Town / City
                <span className="text-red-600">*</span>
              </label>
              <input
                id="city"
                type="text"
                name="city"
                value={fields.city}
                onChange={(e) => setFields({...fields, city: e.target.value})}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* ZipCode Input */}
            <div>
              <label htmlFor="zipCode">
                Postcode / ZIP
                <span className="text-red-600">*</span>
              </label>
              <input
                id="zipCode"
                type="text"
                name="zipCode"
                value={fields.zipCode}
                onChange={(e) => setFields({...fields, zipCode: e.target.value})}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
              />
            </div>

            {/* Country Input */}
            <div>
              <label htmlFor="country">
                Country
                <span className="text-red-600">*</span>
              </label>
              <select
                id="salesRep"
                name="country"
                type="text"
                value={fields.salesRep}
                onChange={(e) => setFields({...fields, salesRep: e.target.value})}
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border font-normal"
              >
                  {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
            ))}
              </select>
            </div>

            {/* Sales Rep assisted Option */}
            <div>
              <label htmlFor="salesRep">
                The sales rep. that helped you?
                <span className="text-red-600">*</span>
              </label>
              <select
                id="salesRep"
                name="salesRep"
                type="text"
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border font-normal" 
              >
                <option value="">Select Option</option>
                <option value="noOneYet">No one yet</option>
                <option value="bonitaCPT">Bonita - Cape Town</option>
                <option value="leroyCPT">Leroy - Cape Town</option>
                <option value="nickyJHB">Nicky - Johannesburg</option>
                <option value="pearlJHB">Pearl - Johannesburg</option>
              </select>
            </div>

            {/* Terms agreement Input */}
            <div className="flex">
              <div className="mt-0.5 mr-0.5">
                <input 
                    type="checkbox" 
                    id="termsAgree"
                    name="termsAgree"
                    value={fields.termsAgree}
                    onChange={(e) => setFields({...fields, termsAgree: e.target.value})}
                  />
              </div>
              <label htmlFor="termsAgree">
                I agree to the Terms & Conditions
                <span className="text-red-600">*</span>
              </label>
            </div>

            <Link href="/terms-conditions" className="hover:text-red-700">
              <p className="font-normal text-red-600 py-1">
                Terms & Conditions
              </p>
            </Link>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-700 py-3 px-5 text-white font-normal hover:bg-red-600 rounded-sm">
                REGISTER
              </button>
            </div>
          </form>
          
        </div>

        <div className="flex justify-center my-7">
          <Link href="/popi-act-terms">
            <button className=" mt-10 bg-slate-500 text-white py-2 px-4 font-normal rounded-sm hover:bg-slate-700">
              View POPI Act Disclaimer
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white p-12 mb-5 border-t-8 border-slate-200">
        <h1 className="text-slate-600 font-bold text-3xl">NOT A RESELLER?</h1>
        <p className="my-5 text-slate-500 font-normal text-xl">
          Email us on{" "}
          <a
            href="mailto:info@captivity.co.za"
            className="text-red-500 hover:text-red-700"
          >
            info@captivity.co.za
          </a>{" "}
          and we will be sure to direct you to one of our Registered resellers.
        </p>
      </div>
    </div>
  );
};

export default Register;
