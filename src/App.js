import './App.css';
import Table from './components/Table';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);

  const [rows, setRows ]= useState(
                [{page:"page 1", desc:'desc', status:'live'},
                {page:"page 2", desc:'desc', status:'draft'},
                {page:"page 3", desc:'desc', status:'error'}]);

  function handleDelete(targetIndex){
    setRows(rows.filter((_,index) => index !== targetIndex))
  }  
  
  function handleSubmit(newRow){
    edit === null ? 
    setRows([...rows, newRow]) : 
    setRows(rows.map((currRow, index) =>{
      if(index !== edit) return currRow;

      return newRow;
    }))
  }

  function handleEdit(index){
    setEdit(index);
    setOpen(true)
  }

  return (
    <div className="App">
      <Table rows={rows} deleteRow = {handleDelete} editRow={handleEdit}/>
      <button className='submitBtn' onClick={() => setOpen(true)}> Open</button>
    {open &&  <Modal 
    closeModal={() => setOpen(false)} 
                      onSubmit={handleSubmit} 
                      defaultValue={edit !== null  && rows[edit]}/>}
    </div>
  );
}

export default App;
