import React from 'react'
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'
import './Table.css'

const Table = ({rows, deleteRow, editRow}) => {
  return (
    <div className='table-wrapper'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Pages</th>
                    <th className='expand'>Desc</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                rows.map((row, index) => {

                    const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1);
                    return <tr key={index}>
                    <td>{row.page}</td>
                    <td className='expand'>{row.desc}</td>
                    <td>
                        <span className={`label label-${row.status}`}>{statusText}</span>
                    </td>
                    <td>
                        <span className='actions'>
                            <BsFillTrashFill className='delete' onClick={() => deleteRow(index)}/>
                            <BsFillPencilFill onClick={() => editRow(index)}/>
                        </span>
                    </td>
                    
                    </tr>
                })
            }
               
            </tbody>
        </table>
    </div>
  )
}

export default Table