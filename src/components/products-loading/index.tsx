"use client";
import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useState, useEffect } from "react";

export default function ResponsiveDrawer() {
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // State to track loading

  // Fetch countries in useEffect
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      const limitedCountries = data.slice(0, 12);
      setCountries(limitedCountries);
      setLoading(false); // Stop loading when data is fetched
    };
    fetchCountries();
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="overflow-x-auto">
        <Table striped>
          <TableHead>
            <TableRow>
              <TableHeadCell>Country Name</TableHeadCell>
              <TableHeadCell>Color</TableHeadCell>
              <TableHeadCell>Category</TableHeadCell>
              <TableHeadCell>Price</TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">Edit</span>
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            {loading
              ? Array.from({ length: 10 }).map((_, index) => (
                  <TableRow
                    key={index}
                    className="animate-pulse bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-24"></div>
                    </TableCell>
                    <TableCell>
                      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-12"></div>
                    </TableCell>
                    <TableCell>
                      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-16"></div>
                    </TableCell>
                    <TableCell>
                      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-12"></div>
                    </TableCell>
                    <TableCell>
                      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-8"></div>
                    </TableCell>
                  </TableRow>
                ))
              : countries.map((item, index) => (
                  <TableRow
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {item.name.common}
                    </TableCell>
                    <TableCell>Red</TableCell>
                    <TableCell>Wearables</TableCell>
                    <TableCell>$999</TableCell>
                    <TableCell>
                      <a
                        href="#"
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Edit
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
