'use client'

import { SkeletonCard } from "@/components/SkeletonCard";
import SkeletonList from "@/components/SkeletonList";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import FormCard from "./_components/FormCard";
import { TableList } from "./_components/TableList";
import { MenuBar } from "@/components/MenuBar";
import { NavigationMenuTab } from "@/components/NavigationMenuTab";

export default function Home() {
  const [isFormCardVisible, setIsFormCardVisible] = useState(false);
  const [isTableListVisible, setIsTableListVisible] = useState(false);

  const fetchData = () => {
    setTimeout(() => {
      setIsTableListVisible(true); 
    }, 2000); 
  };

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormCardVisible(true); 
    }, 3000); 

    
    fetchData();

    return () => clearTimeout(timer); 
  }, []);
  
  return (
    <div className="flex min-h-screen w-full items-center justify-center flex-col gap-10 mt-7">
      <NavigationMenuTab />
      <div className="flex items-center space-x-4 text-sm bg-gray-100 p-10 border border-lg rounded-xl">
        <div className="bg-slate-50 p-3">
          {!isFormCardVisible ? <SkeletonCard /> : <FormCard />}
        </div>
        <Separator orientation="vertical" />
        {!isTableListVisible ? <SkeletonList /> : <TableList />}
      </div>
    </div>
  );
}
