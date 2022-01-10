import React from 'react';

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
        </header>
    )
}

export default Header;
