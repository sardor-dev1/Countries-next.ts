import React from "react";
import Navigation from "@/components/Navigation";

const links = [
  { title: "Home", href: "/" },
  { title: "Users", href: "/users" },
  { title: "Products", href: "/products" },
];

export default function layout({
  children,
  teachers,
  students,
  more,
}: {
  children: React.ReactNode;
  teachers: React.ReactNode;
  students: React.ReactNode;
  more: React.ReactNode
}) {
  return (
    <>
      <Navigation items={links} />
    <div className='layout'>
      <h2>Users layout</h2>
      {children}
      <div className='grid grid-cols-2 gap-2'>
        {teachers}
        {students}
      </div>
      {more}
    </div>
    </>
  );
}
