"use client";
import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from "../_utils/GlobalApi";
import Image from 'next/image';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function CategoryList() {
    const listRef=useRef(null)
    const [categoryList, setCategoryList] = useState([]);
    const params = useSearchParams();
    const [selectedCategory, setSelectedCategory]=useState('all')
    useEffect(() => {
        setSelectedCategory(params.get('category'))
    }, [params])

    useEffect(() => {
        getCategoryList();
    }, [])

    const getCategoryList = () => {
        GlobalApi.GetCategory().then(resp => {
            console.log(resp.categories);
            setCategoryList(resp.categories);

        })
    }
     const ScrollRightHandler = () => {
       if (listRef.current) {
         listRef.current.scrollBy({
           left: 200,
           behavior: "smooth",
         });
       }
    };
    const ScrollLeftHandler = () => {
      if (listRef.current) {
        listRef.current.scrollBy({
          right: -200,
          behavior: "smooth",
        });
      }
    };

  return (
    <div className="px-10 md:px-20 md:mt-5 relative">
      <div className="flex gap-5 overflow-auto scrollbar-hide" ref={listRef}>
        <ArrowLeftCircle
          className="absolute left-11 top-14 rounded-full bg-blue-400 text-white h-8 w-8 cursor-pointer"
          onClick={() => ScrollLeftHandler()}
        />
        {categoryList &&
          categoryList.map((category, index) => (
            <Link
                  href={"?category=" + category.slug}
                  key={index}
                  className={`flex flex-col items-center gap-2 border p-3 min-w-40 rounded hover:border-primary hover:bg-blue-50 cursor-pointer group
                  ${selectedCategory==category.slug&&'text-primary border-primary bg-blue-100'}
              `}
            >
              <Image
                src={category.icon?.url}
                alt={category.name}
                width={100}
                height={100}
                className="rounded group-hover:scale-110 transition-all duration-200" // Add Tailwind CSS classes
              />

              <h2 className="text-sm font-medium text-center group-hover:text-primary">
                {category.name}
              </h2>
            </Link>
          ))}
      </div>
      <ArrowRightCircle
        className="absolute right-11 top-14 rounded-full bg-blue-400 text-white h-8 w-8 cursor-pointer"
        onClick={() => ScrollRightHandler()}
      />
    </div>
  );
}

export default CategoryList;