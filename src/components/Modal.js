import React, { useState } from 'react'
import './Modal.css';

const Modal = ({closeModal, onSubmit, defaultValue}) => {
    const[error , setError] = useState("")
    const [formState, setFormState] = useState(defaultValue || {
        page:'',
        desc:'',
        status:'live',
    })

    
    function handleChange(e){
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!validateForm()) return;
        onSubmit(formState)   
        closeModal() 
    }

    function validateForm(){
        if(formState.page && formState.desc &&  formState.status) {setError(""); return true;}
        else {
            let errorField = [];
            for(const [key, value] of Object.entries(formState)){
                if(!value){
                    errorField.push(key)
                }
            }
            setError(errorField.join(", "))
            return false;}
    }

  return (
    <div className='modal-container' 
        onClick={(e) => {
            if(e.target.className === 'modal-container') closeModal()
        }}>
        <div className='modal'>
            <form >
                <div className='form-grp'>
                    <label htmlFor='page'>Page</label>
                    <input
                        name='page'
                        value={formState.page}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-grp'>
                    <label htmlFor='desc'>Desc</label>
                    <textarea
                        name='desc'
                        value={formState.desc}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-grp'>
                    <label htmlFor='status'>Status</label>
                    <select name='status' value={formState.status} onChange={handleChange}>
                        <option value='live'>Live</option>
                        <option value='draft'>Draft</option>
                        <option value='error'>Error</option>

                    </select>
                </div>
                {error && <div className='err'>{`Please include: ${error}`}</div>}
                <button type='submit' className='submitBtn' onClick={handleSubmit}>Add</button>
            </form>
        </div>
    </div>
  )
}

export default Modal