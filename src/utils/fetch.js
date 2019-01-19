import debounce from "lodash/debounce";

/**
 * I expect to reuse `fetchGet` in the future.
 * Hence, I abstracted  it to general reusable function;
 *
 * @param {string} url - the url to be fetched.
 * @return Promise.
 *
 */

function fetchGet(url) {
  const urlWithToken = `${url}&access_token=d4b7b3a3ef40d4366ebbe5dbea4b6e4e008b7787`;
  return fetch(urlWithToken, {
    method: "GET"
  });
}

/**
 *
 * A Function which makes a call to Github's API to fetch a given username.
 *
 * @param {string} username - the username to be searched
 * @return Promise.
 *
 */

function searchUser(username) {
  const url = `https://api.github.com/search/users?q=${username}`;
  return fetchGet(url);
}

/**
 *
 * Function which debounces the API calls.
 * API response is processed and the consumer's (Component using this function)
 * local set gets updated accordingly
 *
 * @param {string} username - the username to be queried
 * @param {object} updateState - Component's local state to update.
 *
 */

const searchUserDebounced = debounce(async (username, updateState) => {
  try {
    let response = await searchUser(username);
    response = await response.json();
    updateState.setQueryResult(response.items);
  } catch (err) {
    // Could show an error message here instead of logging the error only.
    console.warn("something went wrong!!! ", err);
  }
  updateState.setIsLoading(false);
}, 500);

export { searchUserDebounced };
