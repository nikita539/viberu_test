import React from 'react';

type InputPropsType = {
    label?: string,
    placeholder?: string,
    type?: string,
}

const Input = ({type = '', label = '', placeholder = ''}: InputPropsType) => {
    const [value, setValue] = React.useState('')
    return (
        <div className='input__label-container'>
            <label className='input__label'>{label}</label>
            <input
                onChange={(e) => {setValue(e.currentTarget.vale)}}
                value={value}
                className="input"
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input;
