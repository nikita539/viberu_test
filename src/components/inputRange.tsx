import React from 'react';
import {transformInputValue, transformInputValueTwo} from "../helpers/helpers";

type InputPropsType = {
    label?: string,
    placeholder?: string,
}

const InputRange = ({label = '', placeholder = ''}: InputPropsType) => {
    const [rangeValue, setRangeValue] = React.useState<string>('0')

    return (
        <div className='input__label-container'>
            <label className='input__label'>{label}</label>
            <input
                value={transformInputValueTwo(rangeValue)}
                className="input"
                type='text'
                placeholder={placeholder}
            />
            <input
                type='range'
                min='0'
                max='99000000'
                onChange={(e) => {setRangeValue(e.currentTarget.value + '')}}
                style={{ width: '100%', height: 0 }}
            />
        </div>
    )
}

export default InputRange;
