import React from 'react';
import InputRange from "./inputRange";

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
                    <InputRange
                        label="Первоначальный взнос"
                        placeholder="Hello World"
                    />
                    <InputRange
                        label="Срок"
                        placeholder="Hello World"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;
