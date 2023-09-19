import React, { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';

export default function CreateCard(props) {
  // let edit=props.cnd;
  //console.log(props.t);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [clik, setClik] = useState(false);

  useEffect(() => {
    setTitle(props.t);
  }, [props.t]);
  useEffect(() => {
    setContent(props.c);
  }, [props.c]);  
  useEffect(() => {
    setClik(props.cnd);
  }, [props.cnd]);
 
  function btnClick(e) {
    e.preventDefault();
    if (!title || !content) alert("Title and Content cannot be empty.");
    else {props.addNew(title, content);
    setTitle("");
    setContent("")
    setClik(false);
  }}

  // if(props.cnd){
  //   console.log("in if");
  //   console.log(props.t);
  //   console.log(props.c);

  //   setClik(true);
  //   setTitle(props.t);
  //   setContent(props.c);
  // }

  
  return (
    <div>
      <form>
       {clik && 
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={clik? 2 : 1}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onClick={()=>setClik(true)}
        />
        {clik && <button onClick={btnClick}><AddIcon/></button>}
      </form>
    </div>
  );
}
