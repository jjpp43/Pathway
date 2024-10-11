"use client";

import React, { useEffect, useState, Suspense, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

//Import shadcn Table UI Components
import { DataColumn, columns } from "../components/colums";
import { DataTable } from "../components/data-table";

//Import shadcn Checkbox Components
import { Checkbox } from "@/components/ui/checkbox";
import NavBar from "./navbar";
import { Divider } from "@nextui-org/react";
import Loading from "@/components/loading";

//Import for internationalization
//import { getDictionary } from "./dictionaries";

//Drop down
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

async function getData(): Promise<DataColumn[]> {
  try {
    const response = await fetch("api/home");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("Fetched from frontend");
    return response.json();
  } catch (error) {
    console.error("Error fetching data : ", error);
    return [];
  }
}

export default function Home() {
  //API Fetch
  const [data, setData] = useState<DataColumn[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getData();
      setData(fetchedData);
    };
    fetchData();
  }, []);

  //Table horizontal expansion toggle
  var [isChecked, setIsChecked] = useState(false);
  const toggle = () => {
    setIsChecked(!isChecked);
  };

  //Table vertical expansion toggle
  var [isHidden, setIsHidden] = useState(true);
  const hidden = () => {
    setIsHidden(!isHidden);
  };

  // Create a ref to the element you want to scroll to with explicit type
  const scrollToRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to the ref position
  const scrollToElement = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  //Internationalization

  //Language Switch Button
  //const [isExpanded, setIsExpanded] = useState(false);
  // const handleToggle = () => {
  //   setIsExpanded(!isExpanded);
  // };

  return (
    <main className="flex min-h-screen bg-white flex-col py-16">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <div className="flex grow flex-col w-screen items-center justify-between gap-4 bg-primary md:py-8 sm:py-4 md:flex-row md:px-48 ">
        {/* Box Area */}
        <div className="py-2 sm:py-0 md:py-0"></div>
        <div className="flex flex-col justify-center gap-4 rounded-lg bg-gray-50 p-6 sm:p-8 md:px-12 w-4/5 sm:w-3/5 md:w-2/5  ">
          <div className="hidden sm:block">
            <Image
              src="/logo.png"
              alt="Picture of logo"
              width={72}
              height={96}
            />
          </div>
          <div className="text-foreground ">
            <div className="font-semibold text-2xl md:text-5xl md:leading-tight leading-tight py-4">
              Kick-start your next journey
            </div>
            <div className="text-lg font-medium pb-4">
              Find the perfect school that fits your needs, all tailored to your
              goals
            </div>
          </div>
          <div className="flex flex-row justify-between">
            {/* Explore Button */}
            <Link
              href={""}
              onClick={scrollToElement}
              className="flex items-center gap-5 self-start rounded-lg border-2 border-primary bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span className="font-semibold">Explore</span>
            </Link>
            {/* Compare Button */}
            <Link
              href={"/compare"}
              className="flex sm:hidden md:hidden items-center gap-2 self-start rounded-lg border-2 border-primary bg-background px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-card md:text-base"
            >
              <span className="font-semibold">Compare</span>
              <div className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
        {/* Banner Image */}
        <div className="flex items-center justify-center p-12 sm:px-32 md:w-3/5 md:pl-32 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshot desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot mobile version"
          />
        </div>
      </div>
      {/* Container for two text areas */}
      <div
        ref={scrollToRef}
        className="flex flex-row justify-between md:py-36 sm:py-24 py-16 px-4 md:px-48 sm:px-8 xs:px-4"
      >
        <div className="md:text-6xl sm:text-5xl text-4xl font-semibold w-1/2">
          Find the best school that suits you.
        </div>
        <div className="flex flex-col w-2/5">
          <Divider className="border-b-2 border-primary" />
          <div className="text-card-foreground leading-relaxed py-4">
            Discover detailed information on U.S. universities.
            <br />
            With our easy-to-use comparison features, explore and compare top
            schools to find the best fit for your academic journey.
          </div>
        </div>
      </div>
      {/* Table Title Tab*/}
      <div className="w-auto md:px-48 sm:px-16 py-2 text-3xl font-semibold">
        <span className="bg-card py-4 px-8 rounded-t-lg">
          University Statistics
        </span>
      </div>
      {/* Container for DataTable */}
      <div
        className={`flex flex-col bg-card md:pb-8 md:px-16 sm:px-4 items-end transition-all duration-500 ease-in-out ${
          isChecked ? "w-full" : "w-full md:px-48"
        }`}
      >
        <div className="hidden md:inline-flex items-top flex pt-4 space-x-2">
          <Checkbox id="expand" onClick={toggle} />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="expand"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <p>{isChecked ? "Expanded" : "Expand"}</p>
            </label>
          </div>
        </div>
        <div className="dataTable overflow-x-auto py-4 w-full">
          <div
            className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
              isHidden ? "h-96" : ""
            }`}
          >
            <DataTable columns={columns} data={data} />
          </div>
          <div className="pt-1"></div>
          <button
            onClick={hidden}
            className={`relative flex ${
              isHidden ? "flex-col" : "flex-col-reverse"
            } items-center py-1.5 px-4 bg-primary border-2 border-background rounded-lg w-full text-background overflow-hidden group transition-all duration-300`}
          >
            <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
            <div className="text-background relative z-10">
              {isHidden ? "Load more" : "Show Less"}
            </div>
            <div className="pt-0.5 px-4 rounded-lg bg-background"></div>
          </button>
        </div>
      </div>
    </main>
  );
}
