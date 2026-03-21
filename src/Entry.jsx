import React from "react";
function Entry(props) {
  return (
    <div className="container">
      <div className="term">
        <dt className="emoji">
          <span>{props.emoji}</span>
          <br></br>
          <span>{props.name}</span>
        </dt>
        <dd className="description">{props.meaning}</dd>
      </div>
    </div>
  );
}
export default Entry;
