import React from "react";
import Entry from "./Entry";
import emojipedia from "./emojipedia";

function createCard(emojipedia) {
  return (
    <Entry
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}
function App(props) {
  return (
    <div>
      <h1 className="heading">Emojipedia</h1>

      <dl className="dictionary"> {emojipedia.map(createCard)}</dl>
    </div>
  );
}
export default App;
