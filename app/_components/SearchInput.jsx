"use client";
import React from "react";
import { useState } from "react";
import { Button } from "/components/ui/button";
import { ChevronRight } from "lucide-react";

function SearchInput() {
  const [inputValue1, setInputValue1] = useState("");
  const [isFocused1, setIsFocused1] = useState(false);

  const handleChange1 = (e) => setInputValue1(e.target.value);
  const handleFocus1 = () => setIsFocused1(true);

  const [inputValue2, setInputValue2] = useState("");
  const [isFocused2, setIsFocused2] = useState(false);

  const handleChange2 = (e) => setInputValue2(e.target.value);
  const handleFocus2 = () => setIsFocused2(true);

  const [inputValue3, setInputValue3] = useState("");
  const [isFocused3, setIsFocused3] = useState(false);

  const handleChange3 = (e) => setInputValue3(e.target.value);
  const handleFocus3 = () => setIsFocused3(true);

  const [inputValue4, setInputValue4] = useState("");
  const [isFocused4, setIsFocused4] = useState(false);

  const handleChange4 = (e) => setInputValue4(e.target.value);
  const handleFocus4 = () => setIsFocused4(true);

  return (
    <div className="px-10 md:px-20 py-3">
      
      <div className="lg:flex bg-white drop-shadow-xl p-2 rounded-2xl sm:flex md:flex-wrap flex-wrap gap-4 items-center justify-center">
        <div className="flex bg-gray-100 rounded-l-xl py-1 mb-2 sm:mb-0 px-2 divide-x">
          <div className="flex items-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clip-rule="evenodd"
              />
            </svg>

            <input
              type="text"
              value={inputValue1}
              onChange={handleChange1}
              onFocus={handleFocus1}
              className={`p-2 bg-transparent w-[120px] sm:w-[200px] outline-none transition-all duration-300 ${
                isFocused1 ? "border-blue-700" : "border-gray-500"
              }`}
            />
            <label
              htmlFor="text"
              className={`absolute left-4 transition-all duration-300 ${
                isFocused1 || inputValue1
                  ? "-top-3 text-sm text-blue-600 px-1 bg-white"
                  : "top-2 text-base text-gray-500 px-1"
              }`}
            >
              From
            </label>
          </div>
          <div className="flex items-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clip-rule="evenodd"
              />
            </svg>

            <input
              type="text"
              value={inputValue2}
              onChange={handleChange2}
              onFocus={handleFocus2}
              className={`p-2 bg-transparent w-[120px] sm:w-[200px] outline-none transition-all duration-300 ${
                isFocused2 ? "border-blue-700" : "border-gray-500"
              }`}
            />
            <label
              htmlFor="to"
              className={`absolute left-4 transition-all duration-300 ${
                isFocused2 || inputValue2
                  ? "-top-3 text-sm text-blue-600 px-1 bg-white"
                  : "top-2 text-base text-gray-500 px-1"
              }`}
            >
              To
            </label>
          </div>
        </div>
        <div className="flex divide-x mb-2 sm:mb-0">
          <div className="bg-gray-100 flex flex-col">
            <label htmlFor="text" className="-top-3 text-sm text-blue-600 px-1">
              Departure
            </label>
            <input
              type="date"
              className="px-1 bg-transparent w-[140px] outline-none"
            />
          </div>
          <div className="bg-gray-100 flex flex-col">
            <label htmlFor="text" className="-top-3 text-sm text-blue-600 px-1">
              Return
            </label>
            <input
              type="date"
              className="px-1 bg-transparent w-[140px] outline-none"
            />
          </div>
        </div>
        <div className="flex bg-gray-100 py-1 mb-2 sm:mb-0 px-2 divide-x">
          <div className="flex relative">
            <input
              type="text"
              value={inputValue3}
              onChange={handleChange3}
              onFocus={handleFocus3}
              className={`p-2 bg-transparent w-[140px] sm:w-[200px] outline-none transition-all duration-300 ${
                isFocused3 ? "border-blue-700" : "border-gray-500"
              }`}
            />
            <label
              htmlFor="text"
              className={`absolute left-2 transition-all duration-300 ${
                isFocused3 || inputValue3
                  ? "-top-3 text-sm text-blue-600 px-1 bg-white"
                  : "top-2 text-base text-gray-500 "
              }`}
            >
              Travellers
            </label>
          </div>
          <div className="flex relative">
            <input
              type="type"
              value={inputValue4}
              onChange={handleChange4}
              onFocus={handleFocus4}
              className={`p-2 bg-transparent w-[140px] sm:w-[200px] outline-none transition-all duration-300 ${
                isFocused2 ? "border-blue-700" : "border-gray-500"
              }`}
            />
            <label
              htmlFor="to"
              className={`absolute left-2 transition-all duration-300 ${
                isFocused4 || inputValue4
                  ? "-top-3 text-sm text-blue-600 px-1 bg-white"
                  : "top-2 text-base text-gray-500"
              }`}
            >
              Class
            </label>
          </div>
        </div>
        <Button
          className="py-6 px-4 text-base font-bold gap-2 rounded-r-xl rounded-l-none" 
        >
          Search <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default SearchInput;
