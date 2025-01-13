'use client'

import { SkeletonCard } from "@/components/SkeletonCard";
import SkeletonList from "@/components/SkeletonList";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import FormCard from "./_components/FormCard";

export default function Home() {
  const [isFormCardVisible, setIsFormCardVisible] = useState(false);
  const [isTableListVisible, setIsTableListVisible] = useState(false);

  // Simulate fetching data for TableList
  const fetchData = () => {
    setTimeout(() => {
      setIsTableListVisible(true); // Data is ready, show TableList
    }, 2000); // Simulate fetching time (2 seconds)
  };

  // Show FormCard after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormCardVisible(true); // Show FormCard after 3 seconds
    }, 3000); // 3 seconds delay

    // Simulate fetching data for TableList
    fetchData();

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);
  
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex items-center space-x-4 text-sm bg-gray-100 p-10 border border-lg rounded-xl">
        <div className="bg-slate-50 p-3">
          {/* Show SkeletonCard initially, then show FormCard after 3 seconds */}
          {!isFormCardVisible ? <SkeletonCard /> : <FormCard />}
        </div>
        <Separator orientation="vertical" />
        <SkeletonList />
      </div>
    </div>
  );
}
