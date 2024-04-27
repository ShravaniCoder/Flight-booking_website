
import React from "react";
import CategoryList from "./_components/CategoryList";
import FlightList from "./_components/FlightList"


export default function Home() {

  return (
    <div>
      <CategoryList />
      <FlightList />
    </div>
  );
}
