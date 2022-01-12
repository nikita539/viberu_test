import React from 'react';
import InputRange from "./inputRange";
import InputSelector from "./inputSelector";
import Button from "./button";

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__title-container'>
                    <h1
                        className='header__title'
                        onClick={() => {console.log("Hello World !")}}
                    >
                        Ипотечный калькулятор
                    </h1>
                    <span className='header__title-link'>В Туле</span>
                </div>
            </div>
            <div className='container'>
                <div className='input__container'>
                    <InputRange
                        label="Цель ипотеки"
                        type='range'
                        placeholder="Hello World"
                    />
                    <InputRange
                        label="Стоимость недвижимости"
                        placeholder="Hello World"
                    />
                    <InputSelector
                        label='Цель ипотеки'
                        initialPlaceholder='Любая'
                        items={['1','2','3','4','5','6','7','8']}
                    />
                    <InputSelector
                        initialPlaceholder='Любой'
                        label='Срок'
                        items={['1','2','3','4','5','6','7','8']}
                    />
                    <Button title='Ещё +'/>
                    <Button title='Показать' classes='button__color'/>
                </div>
            </div>
        </header>
    )
}

export default Header;
