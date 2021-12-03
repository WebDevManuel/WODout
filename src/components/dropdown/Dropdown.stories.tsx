import React from "react";
import Dropdown from "./Dropdown";

export default {
  component: Dropdown,
  title: "Components/Dropdown",
};

const options = [
  {
    label: "--Please choose an option--",
    value: "--Please choose an option--",
  },
  {
    label: "Weightlifting",
    value: "Weightlifting",
  },
  {
    label: "MetCon",
    value: "MetCon",
  },
];

export const Category = () => (
  <Dropdown options={options} label="Category" idSelect="category" />
);
