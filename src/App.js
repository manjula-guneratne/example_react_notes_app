import './App.css';
import {useState} from 'react';

function App() {

  const Notes = props => props.data.map(note => <div>{note.text}</div>);

  const initialDate = [{ text: 'Hey'}, {text: 'There'}];
  const [data, setData] = useState(initialDate);

  return (
    <div>
      
    </div>
  );
}

export default App;
