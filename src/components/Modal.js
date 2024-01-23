import React from 'react'
import './Modal.css'

const Modal = ({closeModal}) => {
  return (
    <div className='modal-container' 
        onClick={(e) => {
            if(e.target.className === 'modal-container') closeModal()
        }}>
        <div className='modal'>
            <form>
                <div className='form-grp'>
                    <label htmlFor='page'>Page</label>
                    <input
                        name='page'
                    />
                </div>
                <div>
                    <label htmlFor='desc'>Desc</label>
                    <textarea
                        name='desc'
                    />
                </div>
                <div>
                    <label htmlFor='status'>Status</label>
                    <select name='status'>
                        <option value='live'>Live</option>
                        <option value='draft'>Draft</option>
                        <option value='error'>Error</option>

                    </select>
                </div>
                <button type='submit' className='submitBtn'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Modal