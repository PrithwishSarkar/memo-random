import React, { useState, useEffect } from "react";
import CreateCard from "./CreateCard";
import Card from "./Card";

//export let lastTime=new Date();
export default function Main({updateTime}) {

  let initMemo;
  if (localStorage.getItem("memos") === null)
    initMemo = "";
  else
    initMemo = JSON.parse(localStorage.getItem("memos"));

  const [NoteList, setList] = useState(initMemo);
  //const [num, setNum] = useState(0)
  //const [lastTime, setTime] = useState(new Date());

  function removeEntry(id) {
    setList(prev =>{
      return prev.filter((item, index) => {
        return index !== id;
      })
    }
      
    );
  }

  // function createEntry(item, id) {
  //   return (
      
  //   );
  // }

  function addEntry(t, c) {
    setList((prev) => {
      return [
        ...prev,
        {
          //id: num,
          title: t,
          content: c
        }
      ];
    });
  }
  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(NoteList));
    //lastTime=new Date();
    updateTime(new Date());
  }, [NoteList]);

  return (
    <main>
      <CreateCard addNew={addEntry} />
      {NoteList.length === 0
        ? <div style={{textAlign:"center"}}>No notes to display. Maybe add some??</div>
        : NoteList.map((item, index)=>(
          <Card
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          delEntry={removeEntry}
        />
        ))}
    </main>
  );
}
//export { lastTime };