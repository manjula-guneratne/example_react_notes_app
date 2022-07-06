import "./App.css";
import { useState, useEffect } from "react";
import produce from "immer";

const Notes = (props) => props.data.map((note) => <div>{note.text}</div>);

function App() {
  const initialDate = [{ text: "Loading notes ..." }];
  const [data, setData] = useState(initialDate);

  const handleClick = () => {
    const text = document.querySelector("#noteinput").value.trim();
    if (text) {
      const nextState = produce(data, (draftState) => {
        draftState.push({ text });
      });
      document.querySelector("#noteinput").value = "";
      setData(nextState);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getData = localStorage.getItem("data");
      if (getData !== "" && getData !== null) {
        return setData(JSON.parse(getData));
      }
      return setData([]);
    }
  }, 0);

  return (
    <>
      <input
        id="noteinput"
        style={{ width: "80%" }}
        type="text"
        placeholder="Enter a new note"
      />

      <button onClick={() => handleClick()}>Add note</button>

      <Notes data={data} />
    </>
  );
}

export default App;
