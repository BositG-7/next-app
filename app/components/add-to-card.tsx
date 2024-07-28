"use client";
import React from "react";

const AddToCard = () => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        console.log("Click");
      }}
    >
      Add To Card
    </button>
  );
};

export default AddToCard;
