import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Card(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button id="edit"
        onClick={() => {
          console.log("In edit entry");
          props.editEntry(props.id);
        }}
      >
        <EditIcon />
      </button>
      <button id="del"
        onClick={() => {
          props.delEntry(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}
