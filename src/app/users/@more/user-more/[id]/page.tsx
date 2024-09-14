"use client"
import { Card } from 'flowbite-react';
import { GetServerSideProps } from 'next';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Loading from "../../../../../components/loading/loading"

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

export default function UserMorePage() {
  const {id} = useParams();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
  if (id) {
    const timeoutId = setTimeout(() => {
      fetch(`https://fakestoreapi.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => setUser(data))
        .catch((error) => console.error("Error fetching user data:", error));
    }, 2000); // Delay of 2 seconds (2000 ms)

    return () => clearTimeout(timeoutId);
  }
}, [id]);

  if (!user) {
    return <div><Loading/></div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card key={user.id} className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {user.name.firstname} {user.name.lastname}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Email: {user.email}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Phone: {user.phone}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            City: {user.address.city}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Street: {user.address.street}, {user.address.number}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Zipcode: {user.address.zipcode}
          </p>
        </Card>
    </div>
    </div>
  );
}
