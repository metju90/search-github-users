import React, { useState, useEffect } from "react";
import { searchUserDebounced, handleKeyPress } from "./utils";
import SearchField from "./components/SearchField";
import Results from "./components/Results";
import DummyText from "./components/DummyText";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [queryResult, setQueryResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(
    () => {
      if (inputValue) {
        setIsLoading(true);
        searchUserDebounced(inputValue, {
          setIsLoading,
          setQueryResult
        });
      } else {
        // if user deletes all characters, cancel any any pending calls
        searchUserDebounced.cancel();
        setQueryResult([]);
        setIsLoading(false);
      }
    },
    [inputValue]
  );
  return (
    <div className="App">
      <div id="search-wrapper">
        <SearchField
          handleKeyPress={e =>
            handleKeyPress(e, selectedItem, setSelectedItem, queryResult.length)
          }
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Results
          inputValue={inputValue}
          isLoading={isLoading}
          queryResult={queryResult}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>
      <DummyText />
    </div>
  );
};

export default App;
