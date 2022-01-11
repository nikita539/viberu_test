import React from 'react';
import Input from "./input";

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
                    <Input
                        label="Цель ипотеки"
                        placeholder="Hello World"
                    />
                    <Input
                        label="Стоимость недвижимости"
                        placeholder="Hello World"
                    />
                    <Input
                        label="Первоначальный взнос"
                        placeholder="Hello World"
                    />
                    <Input
                        label="Срок"
                        placeholder="Hello World"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;
