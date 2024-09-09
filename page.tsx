'use client'
import Image from "next/image";
import styles from "./page.module.css";
import DatePickerValue from "./components/DatePickerValue";
import Checkbox from "./components/CheckBox";
import React, { useState } from "react";

export default function Home() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);   

  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");

  const handleCheckboxChange = (index: number, checked: boolean) => {
    switch (index) {
      case 1:
        setIsChecked1(!checked);
        break;
      case 2:
        setIsChecked2(!checked);
        break;
      case 3:
        setIsChecked3(!checked);
        break;
      default:
        break;
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };

  const handleInputChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue3(event.target.value);
  };

  return (
    <>
      <h1>Search Flights</h1>
      <DatePickerValue />
      {isChecked1 && (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter Origin"
        />
      )}
      <Checkbox
        label="Filter by Origin"
        checked={isChecked1}
        onChange={() => handleCheckboxChange(1, isChecked1)}
      />
      {isChecked2 && (
        <input
          type="text"
          value={inputValue2}
          onChange={handleInputChange2}
          placeholder="Enter Destination"
        />
      )}
      <Checkbox
        label="Filter by Destination"
        checked={isChecked2}
        onChange={() => handleCheckboxChange(2, isChecked2)}
      />
      {isChecked3 && (
        <input
          type="text"
          value={inputValue3}
          onChange={handleInputChange3}
          placeholder="Enter Max Price"
        />
      )}
      <Checkbox
        label="Filter by Max Price"
        checked={isChecked3}
        onChange={() => handleCheckboxChange(3, isChecked3)}
      />
    </>
  );
}
