import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import FilterDropdown from "@/components/FilterDropdown";
import { Filter, User } from "@/common";
import { useEffect, useState } from "react";
import DateConverter from "@/components/DateConverter";
import Spinner from "@/components/Spinner";

export default function Home() {
  const [filter, setFilter] = useState<Filter>(Filter.ALL);
  const [data, setData] = useState<User[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredUsersByAge = () => {
    const users = data!.filter((user) => {
      if (filter === Filter.BABY) {
        return user.age <= 20;
      } else if (filter === Filter.ADULT) {
        return user.age >= 21 && user.age <= 39;
      } else if (filter === Filter.OLD) {
        return user.age >= 40;
      } else if (filter === Filter.ALL) {
        return true;
      } else {
        return false;
      }
    });

    return users.map((user) => <ProfileCard key={user.id} user={user} />);
  };

  return (
    <main>
      <Navbar />
      <header>
        <div className="flex justify-center items-center bg-[#faf9f4] py-5">
          <h1 className="text-2xl font-bold text-[#574345]">
            DISTRICT MANAGER
          </h1>
        </div>
      </header>
      <div className="lg:mx-[15vw]">
        <section className="mt-12">
          <FilterDropdown filter={filter} setFilter={setFilter} />
        </section>
        <hr className="my-8 h-0.5 border-t-0 bg-[#e7e7e7] opacity-100 " />
        <section>
          <div className="grid lg:grid-cols-3 gap-4">
            {isLoading ? <Spinner /> : filteredUsersByAge()}
          </div>
        </section>
        <hr className="my-12 h-0.5 border-t-0 bg-[#e7e7e7] opacity-100 " />
        <section className="mb-10">
          <DateConverter />
        </section>
      </div>
    </main>
  );
}
