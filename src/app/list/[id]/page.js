// Import necessary dependencies
"use client";
import React from "react";
import { useParams } from "next/navigation";

// Define your component
export default function List() {
  // Use the useParams hook to get the value of [id] from the URL
  const { id } = useParams();

  return (
    <div>
      {/* Now you can use the value of id in your component */}
      <p>Current ID: {id}</p>
    </div>
  );
}
