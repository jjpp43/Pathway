"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react"; // For sorting controls
import { Button } from "@/components/ui/button";

export type DataColumn = {
  url: string;
  id: string;
  institution: string;
  ranking: string;
  state: string;
  tuition: string;
  salary: string;
  enrollment: string;
  acceptanceRate: string;
  asianDiversity: string;
  genderDistribution: string;
  sportsTeam: string;
  graduationRate: string;
  studentFacultyRatio: string;
};

export const columns: ColumnDef<DataColumn>[] = [
  {
    accessorKey: "institution",
    header: ({ column }) => {
      return <div className="text-center font-bold">Institution</div>;
    },
    centered: false,
    cell: ({ row }) => {
      return <div className="py-4 pl-4">{row.getValue("institution")}</div>;
    },
  },
  {
    accessorKey: "ranking",
    header: ({ column }) => {
      return (
        <Button
          className="font-bold"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {" "}
          Ranking
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    centered: true,
  },
  {
    accessorKey: "state",
    header: ({ column }) => {
      return <div className="font-bold">State</div>;
    },
    centered: true,
  },
  {
    accessorKey: "tuition",
    header: ({ column }) => {
      return (
        <Button
          className="font-bold"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {" "}
          Tuition
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = row.getValue("tuition") as number;
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);

      return <div className="tuition-cell">{formatted}</div>;
    },
    centered: true,
  },
  {
    accessorKey: "salary",
    header: ({ column }) => {
      return (
        <Button
          className="font-bold"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Starting Salary
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = row.getValue("salary") as number;
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);

      return <div className="salary-cell">{formatted}</div>;
    },
    centered: true,
  },
  {
    accessorKey: "enrollment",
    header: ({ column }) => {
      return (
        <Button
          className="font-bold"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Undergraduate
          <br />
          Enrollment
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = row.getValue("enrollment") as number;
      return <div className="enrollment-cell">{amount}</div>;
    },
    centered: true,
  },
  {
    accessorKey: "acceptanceRate",
    header: ({ column }) => {
      return (
        <Button
          className="font-bold text-center"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {" "}
          Acceptance <br />
          Rate
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = row.getValue("acceptanceRate");
      const formatted = amount + "%";
      return <div className="acceptanceRate-cell">{formatted}</div>;
    },
    centered: true,
  },
  {
    accessorKey: "asianDiversity",
    header: ({ column }) => {
      return (
        <Button
          className="font-bold"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {" "}
          Asian <br />
          Diversity
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = row.getValue("asianDiversity");
      const formatted = amount + "%";
      return <div className="asianDiversity-cell">{formatted}</div>;
    },
    centered: true,
  },
  {
    accessorKey: "genderDistribution",
    header: () => (
      <div className="font-bold genderDistribution-header">
        Gender Distribution
      </div>
    ),
    cell: ({ row }) => {
      const amount = row.getValue("genderDistribution") as number;
      const temp1 = amount;
      const temp2 = 100 - amount;

      return (
        <div className="graduationRate-cell">
          <div className="flex flex-row items-center">
            {/* Bar container */}
            <div className="flex flex-row items-center justify-center w-full h-6 rounded">
              {/* Gender Distribution Bar */}
              <div
                className="bg-primary h-full rounded-l relative flex items-center justify-center" // Add flex and centering classes
                style={{
                  width: `${temp1}%`,
                }} // Width based on gender distribution
              >
                {/* Overlay text */}
                <span
                  className="text-white text-sm font-medium"
                  style={{ whiteSpace: "nowrap" }} // Prevent text from wrapping
                >
                  {temp1}
                </span>
              </div>
              {/* Remaining Bar */}
              <div
                className="bg-chart-1 h-full rounded-r relative flex items-center justify-center" // Add flex and centering classes
                style={{
                  width: `${temp2}%`,
                }} // Width based on gender distribution
              >
                {/* Overlay text */}
                <span
                  className="text-white text-sm font-medium"
                  style={{ whiteSpace: "nowrap" }} // Prevent text from wrapping
                >
                  {temp2}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    },
    centered: false,
  },
  {
    accessorKey: "sportsTeam",
    header: () => (
      <div className="font-bold sportsTeam-header">
        Sports
        <br />
        Teams
      </div>
    ),
    centered: true,
  },
  {
    accessorKey: "graduationRate",
    header: () => (
      <div className="font-bold text-center graduationRate-header">
        Graduation Rate
      </div>
    ),
    cell: ({ row }) => {
      const amount = row.getValue("graduationRate");
      const formatted = amount + "%";
      return <div className="graduationRate-cell">{formatted}</div>;
    },
    centered: true,
  },
  {
    accessorKey: "studentFacultyRatio",
    header: () => (
      <div className="font-bold studentFacultyRatio-header">
        Student:Faculty
      </div>
    ),
    centered: false,
    cell: ({ row }) => {
      return <div className="pl-4">{row.getValue("studentFacultyRatio")}</div>;
    },
  },
];

export const data = [{ 0: "url" }, { 1: "id" }];
