import React from "react";
import Highlighter from "react-highlight-words";
import classnames from "classnames";

const Item = ({
  avatar_url,
  html_url,
  login,
  inputValue,
  isSelected,
  onClickHandler
}) => {
  const classes = classnames({
    "result-item": true,
    "highlighted-item": isSelected
  });

  return (
    <div className={classes} onClick={onClickHandler}>
      <img className="avatar" src={avatar_url} alt={login} />
      <a target="_blank" href={html_url} rel="noopener noreferrer">
        <Highlighter
          highlightClassName="highlighted-text"
          searchWords={inputValue.split("")}
          textToHighlight={login}
        />
      </a>
    </div>
  );
};

export default Item;
