# How to run

`npm i && npm start` to install dependecies and start up in dev mode.

# Features

## Performance

- Debouncing API calls. API call is done once every 500ms and only if the user input contains text. This is an important feature for both the server (mitigates the unnecessary API calls) and the UX.

- Leveraging React's `Memo` in `DummyText` component. Since its parent component is changing its local state but the `DummyText` component itself is not changing, `Memo` prevents unnecessary re-rendering in this case.

## Classless

- Leveraging one of React's hottest features `hooks`. Benefits of this includes in having much smaller bundle for production and aswell a better developer experience

## Built UI's

- Whilst the UI is very simple and minimal, I've following your instructions and most of all UI myself. As far as I am concerned, the only UI dependcies which I have are icons / svg

# Answers to your questions

### What do you like about your solution

- I like the UX
- I love how the code looks (<3 Hooks)
- I like how code is structured.

### What do you dislike about your solution?

- Design is very simple. I struggle to come up with UI designs myself. Tried the bes to my abilities.

- No CSS processors. Such CSS structure cannot scale.

### If you had a full day more to work on this, what would you improve?

- On slow or throttled internet connection, a flicker might be visible in `results-item` section. This could be improved by adding default/static image until the actual one loads.

- Its the first time I had to deal with keyboard input. Most probably I would research more to see whether this section could be improved

- CSS. I would use a processor such as CSS in JS.

### If you would start from scratch now, what would you do differently?

- nothing.
# search-github-users
