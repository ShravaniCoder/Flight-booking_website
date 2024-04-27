import Image from "next/image";
import React from "react";
import { Button } from "/components/ui/button";

function FlightItem({ business }) {
  return (
    <div className="p-3 hover:border rounded-xl hover:border-primary hover:bg-blue-50 cursor-pointer">
      <Image
        src={business.banner?.url}
        alt={business.name}
        width={500}
        height={130}
        className="h-[130px] rounded-t-xl object-cover"
      />
      <div className="mt-2">
        <h2 className="font-bold text-lg">{business.name}</h2>
      </div>
      <div className="flex justify-between">
        <div>
          <h3 className="text-base font-medium text-gray-500">
            {business.date}
          </h3>
          <h3 className="text-black font-semibold">
            {business.price}{" "}
            <span className="text-gray-600 font-normal">onwards</span>
          </h3>
        </div>
        <Button variant="outline">Book Flight</Button>
      </div>
    </div>
  );
}

export default FlightItem;
