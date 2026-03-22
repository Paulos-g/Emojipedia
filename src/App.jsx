import React from "react";
import Entry from "./Entry";
import emojipedia from "./emojipedia";

function App(props) {
  return (
    <div>
      <h1 className="heading">Emojipedia</h1>

      <dl className="dictionary">
        {" "}
        {emojipedia.map((emojipedia) => (
          <Entry
            emoji={emojipedia.emoji}
            name={emojipedia.name}
            meaning={emojipedia.meaning}
          />
        ))}
        ;
      </dl>
    </div>
  );
}
export default App;
