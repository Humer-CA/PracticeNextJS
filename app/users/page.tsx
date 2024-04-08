import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";
interface Props {
  searchParams: { sortOrder: string };
}

const Users = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1>Users</h1>
      <Link href="/users/new" className="btn btn-primary text-white-900">
        New User
      </Link>
      <label className="input flex items-center gap-4 m-4 bg-gray-700">
        Search
        <input type="text" className="grow text-pink-400" placeholder="Ex. John Doe" />
      </label>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default Users;
