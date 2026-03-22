import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import emojipedia from "./emojipedia";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

const meaning = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(meaning);
