import React from 'react'
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'
import './Table.css'

const Table = () => {
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
                <tr>
                    <td>Home</td>
                    <td>This is main page</td>
                    <td>
                        <span className='label label-live'>Live</span>
                    </td>
                    <td>
                        <span className='actions'>
                            <BsFillTrashFill className='delete'/>
                            <BsFillPencilFill/>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>About</td>
                    <td>This is about page</td>
                    <td>
                        <span className='label label-draft'>Draft</span>
                    </td>
                    <td>
                        <span className='actions'>
                            <BsFillTrashFill className='delete'/>
                            <BsFillPencilFill/>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>Error</td>
                    <td>This is error page</td>
                    <td>
                        <span className='label label-error'>Error</span>
                    </td>
                    <td>
                        <span className='actions'>
                            <BsFillTrashFill className='delete'/>
                            <BsFillPencilFill/>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table