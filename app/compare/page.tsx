"use client";

import { useState, useEffect } from "react";
import { DataColumn } from "@/components/colums";
import { ComboBox } from "../ui/comboBox";
import React from "react";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

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
  const [selectedItem1, setSelectedItem1] = useState<DataColumn | null>(null);
  const [selectedItem2, setSelectedItem2] = useState<DataColumn | null>(null);
  const [selectedItem3, setSelectedItem3] = useState<DataColumn | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getData();
      setData(fetchedData);
    };
    fetchData();
  }, []);

  const handleSelectItem1 = (id: string) => {
    // Find the selected item in the data array
    const foundItem = data.find((item) => item.id === id);
    setSelectedItem1(foundItem || null);
  };

  const handleSelectItem2 = (id: string) => {
    // Find the selected item in the data array
    const foundItem = data.find((item) => item.id === id);
    setSelectedItem2(foundItem || null);
  };

  const handleSelectItem3 = (id: string) => {
    // Find the selected item in the data array
    const foundItem = data.find((item) => item.id === id);
    setSelectedItem3(foundItem || null);
  };

  return (
    <div className="flex flex-col items-stretch">
      <div className="my-8 pb-24 pt-32 border-b bg-[url('/background.jpg')] bg-cover bg-center flex flex-col items-center">
        <div className="text-4xl md:text-5xl text-background font-semibold">
          Compare Schools
        </div>

        <div className="text-xl pt-4 md:pt-8 md:text-2xl font-medium text-card">
          Get clear insights at a glance
        </div>
      </div>
      <div className="flex flex-row justify-center md:px-48 px-8">
        {/* First ComboBox */}
        <div className="flex flex-col items-center p-8 w-1/2 md:w-1/3 ">
          <div className="sticky top-24 h-full">
            <ComboBox data={data} onSelectItem={handleSelectItem1} />
          </div>
          <div className="">
            {selectedItem1 ? (
              <div className="flex flex-col w-44 md:w-56 space-y-4">
                <div className="border-black md:text-3xl sm:text-2xl text-2xl font-semibold h-40 py-16  bg-white">
                  {selectedItem1.institution}
                </div>
                {/* <div className="pb-16 flex flex-row items-start justify-center">
                  <Image
                    src="/harvard.png"
                    alt="Picture of logo"
                    width={72}
                    height={96}
                  />
                </div> */}
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">Ranking</div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    #{selectedItem1.ranking}
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">State</div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem1.state}
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">Tuition</div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    $ {parseInt(selectedItem1.tuition).toLocaleString()}
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">
                    Undergraduate
                    <br />
                    Enrollment
                  </div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem1.enrollment}
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">Acceptance Rate</div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem1.acceptanceRate}%
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">Graduation Rate</div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem1.graduationRate}%
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">Starting Salary</div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    $ {parseInt(selectedItem1.salary).toLocaleString()}
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">Asian Diversity</div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem1.asianDiversity}%
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">
                    <div>Gender</div>
                    <div>Distribution</div>
                  </div>
                  <Divider className="" />
                  {/* Test */}
                  <div className="flex flex-row items-center ">
                    {/* Bar container */}
                    <div className="relative flex flex-row w-full h-6 rounded -z-10">
                      {/* Gender Distribution Bar */}
                      <div
                        className="bg-primary h-full rounded-l relative"
                        style={{
                          width: `${selectedItem1.genderDistribution}%`,
                        }} // Width based on gender distribution
                      >
                        {/* Overlay text */}
                        <span
                          className="absolute left-1/2 transform -translate-x-1/2 text-white font-medium"
                          style={{ whiteSpace: "nowrap" }} // Prevent text from wrapping
                        >
                          {selectedItem1.genderDistribution}%
                        </span>
                      </div>
                      {/* Remaining Bar */}
                      <div
                        className="bg-chart-1 h-full rounded-r relative"
                        style={{
                          width: `${
                            100 - parseInt(selectedItem1.genderDistribution)
                          }%`,
                        }} // Width based on gender distribution
                      >
                        {/* Overlay text */}
                        <span
                          className="absolute left-1/2 transform -translate-x-1/2 text-white font-medium"
                          style={{ whiteSpace: "nowrap" }} // Prevent text from wrapping
                        >
                          {100 - parseInt(selectedItem1.genderDistribution)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">
                    <div>Student-Faculty</div>
                    <div>Ratio</div>
                  </div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem1.studentFacultyRatio}
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">
                    Number of
                    <br />
                    Sports Team
                  </div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem1.sportsTeam}
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-32"> &nbsp;&nbsp;&nbsp;&nbsp; </div>
            )}
          </div>
        </div>
        {/* Second ComboBox */}
        <div className="flex flex-col items-center p-8 w-1/2 md:w-1/3 ">
          <div className="sticky top-24 h-full">
            <ComboBox data={data} onSelectItem={handleSelectItem2} />
          </div>
          <div className="">
            {selectedItem2 ? (
              <div className="flex flex-col w-44 md:w-56 space-y-4">
                <div className="border-black md:text-3xl sm:text-2xl text-2xl font-semibold h-40 py-16  bg-white">
                  {selectedItem2.institution}
                </div>

                {/* <div className="pb-16 flex flex-row justify-center">
                  <Image
                    src="/harvard.png"
                    alt="Picture of logo"
                    height={96}
                    width={72}
                  />
                </div>*/}
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold opacity-0 sm:opacity-100 md:opacity-100">
                    Ranking
                  </div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    #{selectedItem2.ranking}
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold opacity-0 sm:opacity-100 md:opacity-100">
                    State
                  </div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem2.state}
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold opacity-0 sm:opacity-100 md:opacity-100">
                    Tuition
                  </div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    $ {parseInt(selectedItem2.tuition).toLocaleString()}
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold opacity-0 sm:opacity-100 md:opacity-100">
                    Undergraduate
                    <br />
                    Enrollment
                  </div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem2.enrollment}
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold opacity-0 sm:opacity-100 md:opacity-100">
                    Acceptance Rate
                  </div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem2.acceptanceRate}%
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold opacity-0 sm:opacity-100 md:opacity-100">
                    Graduation Rate
                  </div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem2.graduationRate}%
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold opacity-0 sm:opacity-100 md:opacity-100">
                    Starting Salary
                  </div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    $ {parseInt(selectedItem2.salary).toLocaleString()}
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold opacity-0 sm:opacity-100 md:opacity-100">
                    Asian Diversity
                  </div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem2.asianDiversity}%
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold opacity-0 sm:opacity-100 md:opacity-100">
                    <div>Gender</div>
                    <div>Distribution</div>
                  </div>
                  <Divider className="" />
                  {/* Test */}
                  <div className="flex flex-row items-center ">
                    {/* Bar container */}
                    <div className="relative flex flex-row w-full h-6 rounded -z-10">
                      {/* Gender Distribution Bar */}
                      <div
                        className="bg-primary h-full rounded-l relative"
                        style={{
                          width: `${selectedItem2.genderDistribution}%`,
                        }} // Width based on gender distribution
                      >
                        {/* Overlay text */}
                        <span
                          className="absolute left-1/2 transform -translate-x-1/2 text-white font-medium"
                          style={{ whiteSpace: "nowrap" }} // Prevent text from wrapping
                        >
                          {selectedItem2.genderDistribution}%
                        </span>
                      </div>
                      {/* Remaining Bar */}
                      <div
                        className="bg-chart-1 h-full rounded-r relative"
                        style={{
                          width: `${
                            100 - parseInt(selectedItem2.genderDistribution)
                          }%`,
                        }} // Width based on gender distribution
                      >
                        {/* Overlay text */}
                        <span
                          className="absolute left-1/2 transform -translate-x-1/2 text-white font-medium"
                          style={{ whiteSpace: "nowrap" }} // Prevent text from wrapping
                        >
                          {100 - parseInt(selectedItem2.genderDistribution)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold opacity-0 sm:opacity-100 md:opacity-100">
                    <div>Student-Faculty</div>
                    <div>Ratio</div>
                  </div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem2.studentFacultyRatio}
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold opacity-0 sm:opacity-100 md:opacity-100">
                    Number of
                    <br />
                    Sports Team
                  </div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem2.sportsTeam}
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-32"> &nbsp;&nbsp;&nbsp;&nbsp; </div>
            )}
          </div>
        </div>

        {/* Third ComboBox */}
        <div className="md:flex hidden flex-col items-center p-8 w-1/2 md:w-1/3">
          <div className="sticky top-24 h-full">
            <ComboBox data={data} onSelectItem={handleSelectItem3} />
          </div>
          <div className="">
            {selectedItem3 ? (
              <div className="flex flex-col w-44 md:w-56 space-y-4">
                <div className="border-black md:text-3xl sm:text-2xl text-2xl font-semibold h-40 py-32 bg-white">
                  {selectedItem3.institution}
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">Ranking</div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    #{selectedItem3.ranking}
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">State</div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem3.state}
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">Tuition</div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    $ {parseInt(selectedItem3.tuition).toLocaleString()}
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">
                    Undergraduate
                    <br />
                    Enrollment
                  </div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem3.enrollment}
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">Acceptance Rate</div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem3.acceptanceRate}%
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">Graduation Rate</div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem3.graduationRate}%
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">Starting Salary</div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    $ {parseInt(selectedItem3.salary).toLocaleString()}
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">Asian Diversity</div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem3.asianDiversity}%
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">
                    <div>Gender</div>
                    <div>Distribution</div>
                  </div>
                  <Divider className="" />
                  {/* Test */}
                  <div className="flex flex-row items-center ">
                    {/* Bar container */}
                    <div className="relative flex flex-row w-full h-6 rounded -z-10">
                      {/* Gender Distribution Bar */}
                      <div
                        className="bg-primary h-full rounded-l relative"
                        style={{
                          width: `${selectedItem3.genderDistribution}%`,
                        }} // Width based on gender distribution
                      >
                        {/* Overlay text */}
                        <span
                          className="absolute left-1/2 transform -translate-x-1/2 text-white font-medium"
                          style={{ whiteSpace: "nowrap" }} // Prevent text from wrapping
                        >
                          {selectedItem3.genderDistribution}%
                        </span>
                      </div>
                      {/* Remaining Bar */}
                      <div
                        className="bg-chart-1 h-full rounded-r relative"
                        style={{
                          width: `${
                            100 - parseInt(selectedItem3.genderDistribution)
                          }%`,
                        }} // Width based on gender distribution
                      >
                        {/* Overlay text */}
                        <span
                          className="absolute left-1/2 transform -translate-x-1/2 text-white font-medium"
                          style={{ whiteSpace: "nowrap" }} // Prevent text from wrapping
                        >
                          {100 - parseInt(selectedItem3.genderDistribution)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">
                    <div>Student-Faculty</div>
                    <div>Ratio</div>
                  </div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem3.studentFacultyRatio}
                  </div>
                </div>
                <div className="space-y-4 pb-16">
                  <div className="text-xl font-semibold">
                    Number of
                    <br />
                    Sports Team
                  </div>
                  <Divider className="" />
                  <div className="text-xl sm:text-lg font-medium">
                    {selectedItem3.sportsTeam}
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-32">&nbsp;&nbsp;&nbsp;&nbsp;</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
