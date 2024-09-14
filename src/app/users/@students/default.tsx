import Link from "next/link";
import React from "react";

interface Geolocation {
  lat: string;
  long: string;
}

interface Address {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

interface Name {
  firstname: string;
  lastname: string;
}

interface User {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
  __v: number;
}

export default async function Page() {
  const response = await fetch("https://fakestoreapi.com/users");
  const users: User[] = await response.json();


  return (
    <div className="page">
      <h3>Students page</h3>
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-sm text-gray-100 uppercase dark:text-gray-400 bg-gray-500">
              <tr className="">
                <th scope="col" className="px-6 py-3">
                  User name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  City
                </th>
                <th scope="col" className="px-6 py-3">
                  more
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((item: User) => (
                <tr key={item.id} className="border hover:bg-gray-100 cursor-pointer bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-1 font-semibold text-[16px] text-gray-900 whitespace-nowrap capitalize dark:text-white"
                  >
                    {item?.name.firstname} {item.name.lastname}
                  </th>
                  <td className="px-6 py-1"><Link href={`email:${item.email}`}>{item.email}</Link></td>
                  <td className="px-6 py-1 text-semibold text-black text-[16px] capitalize">{item.address.city}</td>
                  <td className="px-6 py-1 text-blue-400"><Link href={`users/user-more/${item.id}`}><button>more</button></Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
