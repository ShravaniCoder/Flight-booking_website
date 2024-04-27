"use client"
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi';
import FlightItem from '../_components/FlightItem';

function FlightList() {
    const params = useSearchParams();
  const [category, setCategory] = useState('all');
  const [flightList, setFlightList] = useState([])
    
  useEffect(() => {
    params && setCategory(params.get('category'))
    params && getFlightList(params.get('category'))
  }, [params]);

  const getFlightList = (category_) => {
    GlobalApi.GetFlights(category_).then(resp => {
      setFlightList(resp?.flights)
    })
  };
  
  
  return (
    <div className="mt-5 px-10 md:px-20">
      <h2 className="uppercase font-semibold text-xl">
        Flights from {category}
      </h2>
      <h2 className="font-bold text-primary">{flightList?.length} Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-3">
        {flightList.map((flights, index) => (
          <FlightItem key={index} business={flights} />
        ))}
      </div>
    </div>
  );
}

export default FlightList;