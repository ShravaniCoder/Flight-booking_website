"use client";
import React from "react";
import { useState } from "react";
import { Button } from "/components/ui/button";
import { ChevronRight } from "lucide-react";

function SearchInput() {
  
  return (
    <div className="px-8 md:px-20 py-3">
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

            <label
              htmlFor="to"
              className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="text"
                id="to"
                placeholder="To"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                To
              </span>
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

            <label
              htmlFor="UserEmail"
              className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="from"
                id="from"
                placeholder="From"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                From
              </span>
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
            <label
              htmlFor="name"
              className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="travellers"
                id="travellers"
                placeholder="Travellers"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Travellers
              </span>
            </label>
          </div>
          <div className="flex relative">
            <label
              htmlFor="name"
              className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="class"
                id="class"
                placeholder="Class"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Class
              </span>
            </label>
          </div>
        </div>
        <Button className="py-6 px-4 text-base font-bold gap-2 rounded-r-xl rounded-l-none">
          Search <ChevronRight />
        </Button>
        
      </div>
    </div>
  );
}

export default SearchInput;
