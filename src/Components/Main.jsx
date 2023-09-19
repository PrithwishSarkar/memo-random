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
  const [edit, setEdit]= useState(false);
  //const [num, setNum] = useState(0)
  //const [lastTime, setTime] = useState(new Date());
  const [newtitle, setnewTitle] = useState("");
  const [newcontent, setnewContent] = useState("");
  const [newid, setnewId] = useState(0);


  function removeEntry(id) {
    setList(prev =>{
      return prev.filter((item, index) => {
        return index !== id;
      })
    }
      
    );
  }
  function modifyEntry(n){
      setEdit(true);
      let obj = NoteList[n];
      setnewTitle(obj.title);
      setnewContent(obj.content);
      setnewId(n);
      // removeEntry(n);
  }

  function modifyCard(t, c){
    
    // NoteList[newid].title=t;
    // NoteList[newid].content=c;
    setList(prev =>{
      let arr=prev.slice(0,newid);
      let arr2=prev.slice(newid+1);
      return [
        ...arr,
        {
          //id: num,
          title: t,
          content: c
        },
        ...arr2
      ];
    });
  }
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
    //localStorage.setItem("somoy", JSON.stringify(new Date()));
    if(edit){
      setEdit(false);
    }
    //lastTime=new Date();
    updateTime(new Date());
  }, [NoteList]);

  return (
    <main>
      {/* <CreateCard addNew={addEntry} t={editTitle} c={editContent} cnd={edit} /> */}
      
      {edit
        ?<CreateCard addNew={modifyCard} t={newtitle} c={newcontent} cnd={true}/>
        :<CreateCard addNew={addEntry} t={""} c={""} cnd={false}/>
      }
      {NoteList.length === 0
        ? <div style={{textAlign:"center"}}>No notes to display. Maybe add some??</div>
        : NoteList.map((item, index)=>(
          <Card
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          delEntry={removeEntry}
          editEntry={modifyEntry}
        />
        ))}
    </main>
  );
}
//export { lastTime };