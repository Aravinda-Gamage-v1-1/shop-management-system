import React from "react";
import {Link} from "react-router-dom";

interface LogButtonProps {
    id: string;
    content: string;
    className: string;
    navigate:string
}
export function LogButton({id ,content ,className,navigate}: LogButtonProps) {
    return (
        <Link to={navigate}><button
            type="button"
            className={className}
            id={id}
        >{content}
        </button></Link>
    );
}