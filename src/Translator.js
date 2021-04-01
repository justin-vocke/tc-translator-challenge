import React, {useState} from 'react';

const onSubmit = () =>{

}
const Translator = () => {
    return (
        <div>
            <input type="form-area" id="original"></input>
            <button onSubmit={onSubmit}>Translate</button>
            <p id="translation"></p>
        </div>
    )
}

export default Translator;
