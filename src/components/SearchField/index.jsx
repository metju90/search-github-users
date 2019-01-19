import React from "react";
import { FaWindowClose } from "react-icons/fa";
import "./style.css";

const SearchField = ({ inputValue, setInputValue, handleKeyPress }) => {
  return (
    <div id="search-field">
      <input
        placeholder="Search Github's users"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      {inputValue && (
        <FaWindowClose id="close-button" onClick={() => setInputValue("")} />
      )}
    </div>
  );
};

export default SearchField;
