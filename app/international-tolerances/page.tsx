"use client";

import React from "react";

const InternationalTolerances = () => {
  return (
    <div className="border-b border-gray-300 shadow-sm font-bold text-gray-500">
      <div>
        <div className="mx-auto p-10">
          <h1 className="text-center text-4xl text-blacktop-10">
            INTERNATIONAL{" "}
            <span className="font-extrabold text-black">TOLERANCES</span>
          </h1>
          <h1 className="text-center text-4xl text-red-600 font-extrabold top-10">
            FOR APPAREL
          </h1>
          <div>
            <div>
              <h3 className="text-3xl text-red-600 font-bold text-left mt-5">
                Garment Specification Sheet
              </h3>
              <h3 className="text-2xl text-black font-bold text-left">
                (Spec Sheet)
              </h3>

              <p className="text-gray-500 mt-2 mb-10">
                A garment specification sheet is a technical document that
                contains detailed information about a garment's construction,
                including:
              </p>
              <h3 className="text-xl text-black font-bold">
                Technical diagrams or sketches of the garment
              </h3>
              <h3 className="text-xl text-black font-bold">
                Measurements of the garment
              </h3>
            </div>
            <h3 className="text-3xl text-red-600 font-bold text-center mt-5">
              Shade Tolerance
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalTolerances;
