/**
 *
 * Function which handles 3 keyboard keys. Enter, ArrowUp and ArrowDown.
 * The purpose of this function is to execute an operation according to which
 * key was pressed
 *
 * @param {event} event - The event handler. i.e. onKeyDown
 * @param {number} highLightedItem - index of the current highlighted item.
 * @param {function} setHighLightedItem - Function to update the highlighted item
 * @param {number} resultsLength - The length of the users array.
 */

export default (event, highLightedItem, setHighLightedItem, resultsLength) => {
  const selectedElement = document.getElementsByClassName(
    "highlighted-item"
  )[0];
  if (event.key === "Enter") {
    // Two child nodes. `img` and `a`. Picking the latter
    selectedElement.childNodes[1].click();
  }
  if (event.key === "ArrowUp") {
    if (highLightedItem > 0) {
      // I need to focus on the highlighted item.
      // By the time I scroll into it, I am changing the selected item
      // with `setHighLightedItem`. Therefore, I am picking its siblining
      // which will be the actual item.
      selectedElement.previousSibling.scrollIntoView();
      setHighLightedItem(highLightedItem - 1);
    }
  }
  if (event.key === "ArrowDown") {
    if (highLightedItem < resultsLength - 1) {
      selectedElement.nextSibling.scrollIntoView();
      setHighLightedItem(highLightedItem + 1);
    }
  }
};
