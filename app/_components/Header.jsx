"use client"
import React from 'react';
import Image from 'next/image';
import { BadgePercent, Search, Hotel, ChevronDown } from "lucide-react";
import { Button } from "/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';





function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center px-5 pl-1 md:px-20 md:py-2 shadow-md mb-2 sticky rounded">
      <div className='flex items-center'>
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <span className="text-transparent text-xs md:text-sm lg:text-base bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        Dream Flights
        </span>
        </div>
      
      <div className="hidden md:flex">
        <Button variant="ghost" className="gap-x-1">
          {" "}
          <Hotel /> Hotels
        </Button>
        <Button variant="ghost" className="gap-x-1">
          {" "}
          <BadgePercent /> Offers
        </Button>
        <Button variant="ghost" className="gap-x-1">
          {" "}
          Explore <ChevronDown />
        </Button>
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-x-3">
          <SignInButton mode="modal">
            <Button variant="outline" className="ml-2">
              LogIn
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button>SignUp</Button>
          </SignUpButton>
        </div>
      )}
    </div>
  );
}

export default Header;
