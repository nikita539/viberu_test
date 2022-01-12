import React from 'react';

type InputPropsType = {
    initialPlaceholder: string,
    label?: string,
    items?: Array<any>,
}

const InputSelector = ({label = '', items = [], initialPlaceholder}: InputPropsType) => {
    const [selectedValue, setSelectedValue] = React.useState(initialPlaceholder)
    const [showList, setShowList] = React.useState(false)
    return (
        <div className='input__label-container'>
            <label className='input__label'>{label}</label>
            <div className='input__selector' id='selector' onClick={() => setShowList(!showList)}>
                {selectedValue}
            </div>
            <ul className='input__selector-items' id='list' style={{ display: showList ? 'block' : 'none'  }}>
                {items.map((i, index) => (<li
                    key={index}
                    className='input__selector-item'
                    onClick={() => {setSelectedValue(i)}}
                >{i}</li>))}
            </ul>
        </div>
    )
}

export default InputSelector;
