import React from 'react'
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'
const Table = () => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Page</th>
                    <th>Desc</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Home</td>
                    <td>This is main page</td>
                    <td>
                        <span>Live</span>
                    </td>
                    <td>
                        <span>
                            <BsFillTrashFill/>
                            <BsFillPencilFill/>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>About</td>
                    <td>This is about page</td>
                    <td>
                        <span>Live</span>
                    </td>
                    <td>
                        <span>
                            <BsFillTrashFill/>
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