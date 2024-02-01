import React from "react";

const Button = ({ text, onClick, className }) => {
    return (
        <button className={className} onClick={onClick} type="Submit">
            {text}
        </button>
    );
};

export default Button;
