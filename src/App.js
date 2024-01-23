import './App.css';
import Table from './components/Table';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);


  return (
    <div className="App">
      <Table/>
      <button className='submitBtn' onClick={() => setOpen(true)}> Open</button>
    {open &&  <Modal closeModal={() => setOpen(false)}/>}
    </div>
  );
}

export default App;
