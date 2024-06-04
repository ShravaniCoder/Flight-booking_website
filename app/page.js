
import React from "react";
import CategoryList from "./_components/CategoryList";
import FlightList from "./_components/FlightList";
import SearchInput from "./_components/SearchInput"


export default function Home() {

  return (
    <div>
      <SearchInput />
      <CategoryList />
      <FlightList />
      
    </div>
  );
}
