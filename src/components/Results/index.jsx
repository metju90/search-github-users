import React from "react";
import uuid from "uuid";
import Item from "./Item";
import Spinner from "../Spinner";
import "./style.css";

const Results = ({
  isLoading,
  queryResult,
  inputValue,
  selectedItem,
  setSelectedItem
}) => {
  return (
    <div id="results-wrapper">
      {isLoading && <Spinner isOverlay={queryResult.length} />}
      {queryResult.map((u, i) => (
        <Item
          key={uuid()}
          isSelected={selectedItem === i}
          avatar_url={u.avatar_url}
          login={u.login}
          html_url={u.html_url}
          inputValue={inputValue}
          onClickHandler={() => setSelectedItem(i)}
        />
      ))}
    </div>
  );
};

export default Results;
