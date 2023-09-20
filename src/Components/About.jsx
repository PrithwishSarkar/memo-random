import React from "react";

export default function About(props) {
  return (
    <div className="about">
        <h2>A simple Note taking Application</h2>
        <br /><br />
        <h3  style={{textAlign: "left"}}>Features</h3>
        <h4 style={{textAlign: "left"}}>
            <ul>
                <li>You can add memos and delete them</li>
                <li>The memos will not be deleted on page reload</li>
                <li>Switching between the about section and the home page will not cause page reload</li>
                <li>You can edit the notes. Edited note will be saved in its original place, not at the end of list.</li>
                <li>Last update time is refreshed on page load and on adding, editing, or deleting a note.</li>
            </ul>
        </h4>
    </div>
  );
}