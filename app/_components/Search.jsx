"use client";
import { useState } from "react";
import { CalendarDays, ChevronRight } from "lucide-react";

function Search() {
    const [inputValue1, setInputValue1] = useState("")
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState("");
    const [isFocused1, setIsFocused1] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);
    const [isFocused3, setIsFocused3] = useState(false);
    const handleChange1 = (e) => {
      setInputValue1(e.target.value);
    };

    const handleChange2 = (e) => {
      setInputValue2(e.target.value);
    };

    const handleChange3 = (e) => {
      setInputValue3(e.target.value);
    };

    const handleFocus1 = () => {
      setIsFocused1(true);
    };
    const handleFocus2 = () => {
      setIsFocused2(true);
    };
    const handleFocus3 = () => {
      setIsFocused3(true);
    };

    const handleBlur = () => {
      setIsFocused1(false);
    };

  return (
    <section className="flex items-center justify-center mt-10">
      <div className="bg-white h-[10vh] flex w-[65%] gap-3 items-center justify-center p-4 border border-slate-400 rounded-md">
        <div className="relative">
          <input
            type="text"
            value={inputValue1}
            onChange={handleChange1}
            onFocus={handleFocus1}
            onBlur={handleBlur}
            className={`border border-gray-300 rounded-full py-2 px-4 outline-none transition-all duration-300 ${
              isFocused1 ? "border-blue-700" : "border-gray-500"
            }`}
          />
          <label
            htmlFor="destination"
            className={`absolute left-4 transition-all duration-300 ${
              isFocused1 || inputValue1
                ? "-top-3 text-sm text-blue-600 px-1 bg-white"
                : "top-2 text-base text-gray-500"
            }`}
          >
            Destination
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            value={inputValue2}
            onChange={handleChange2}
            onFocus={handleFocus2}
            onBlur={handleBlur}
            className={`border border-gray-300 rounded-full py-2 px-4 outline-none transition-all duration-300 ${
              isFocused2 ? "border-blue-700" : "border-gray-500"
            }`}
          />
          <label
            htmlFor="source"
            className={`absolute left-4 transition-all duration-300 ${
              isFocused2 || inputValue2
                ? "-top-3 text-sm text-blue-600 px-1 bg-white"
                : "top-2 text-base text-gray-500"
            }`}
          >
            Source
          </label>
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            value={inputValue3}
            onChange={handleChange3}
            onFocus={handleFocus3}
            onBlur={handleBlur}
            className={`border rounded-full py-2 px-4 outline-none transition-all duration-300 ${
              isFocused3 ? "border-blue-700" : "border-gray-500"
            }`}
          />
          <CalendarDays className="h-6 w-6 text-black absolute right-4" />
          <label
            htmlFor="date"
            className={`absolute left-4 transition-all duration-300 ${
              isFocused3 || inputValue3
                ? "-top-3 text-sm text-blue-600 px-1 bg-white"
                : "top-2 text-base text-gray-500"
            }`}
          >
            Date
          </label>
        </div>

        <button className="w-[23%] flex items-center justify-between px-4 bg-orange-500 text-white h-[5vh] rounded-full">
          Search
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Search;
