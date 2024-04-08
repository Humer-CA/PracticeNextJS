"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error", error);

  return (
    <div className="flex flex-col gap-5">
      <div>An unexpected error has occured.</div>
      <button className="btn btn-accent w-20" onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
};

export default ErrorPage;
