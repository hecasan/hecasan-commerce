import React from "react";

const date = new Date().getFullYear();

export default function Footer() {
  return (
    <div>
      <h6 className="text-center text-gray-500">Hecasan Copyright © {date}</h6>
    </div>
  );
}
