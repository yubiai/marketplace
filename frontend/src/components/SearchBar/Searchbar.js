import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {
      width:"19rem",
      background:"#F2F1F9",
      border: "none",
      padding:"0.3rem"
    };
  return (
    <input  style={BarStyling} key="random1" value={keyword} placeholder={"Search"}   />
  );
}

export default SearchBar