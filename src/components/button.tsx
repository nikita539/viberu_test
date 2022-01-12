import React from 'react';

type ButtonPropsType = {
    title: string,
    styles?: object,
    classes?: string
}

const Button = ({title,classes}: ButtonPropsType) => {
    return (
        <button className={`button ${classes}`}>{title}</button>
    )
}

export default Button;
