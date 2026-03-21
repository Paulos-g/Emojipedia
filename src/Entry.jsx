import React from "react";
function Entry(props) {
  return (
    <div>
      <h1 className="heading">Emojipedia</h1>
      <dl className="dictionary-container">
        <div className="term">
          {props.emojiTerm}
          <dd>
            <dt className="description">{props.description}</dt>
          </dd>
        </div>
      </dl>
    </div>
  );
}
export default Entry;
