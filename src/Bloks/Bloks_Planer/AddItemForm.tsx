import React, { ChangeEvent, KeyboardEvent, useState } from 'react';


type AddItemFormPropsType = {

    
    addItem: (title: string) => void
    

}


function AddItemForm(p: AddItemFormPropsType){

    let[title, setTitle] = useState("");
    let[error, setError] = useState <string | null> (null);

    const onChengeHander = (e: ChangeEvent<HTMLInputElement>) => { 
        setTitle(e.currentTarget.value)
    }

    const OnKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);    
        if (e.code === 'Enter' ){
            addTask();
            
        }
}

    const addTask = () => {

        if (title.trim() !== ""){
            p.addItem(title.trim());
            setTitle("");
        }
        else{
            setError("Ошибка: это поле не может быть пустым")
        }


        
    }

 return(
    <div>
        <input 
            value={title} 
            onChange={ onChengeHander }
            onKeyDown = { OnKeyPressHandler }
            className={error ? "error" : ""}   
        />
        <button onClick={addTask} >+</button>
        {error && <div className='error-message'>{error}</div>}

    </div>
 )
}

export default AddItemForm;