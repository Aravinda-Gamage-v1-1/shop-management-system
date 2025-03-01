import React from "react";

interface SelectProps {
    id: string,
    name:string,
    className: string,
    value:any,
    handleChange:any,
    options: { value: string, label: string }[];
}
export function Select({id,className,options,name,value,handleChange}: SelectProps) {
    return (
        <>
            <select  value={value} name={name} onChange={handleChange} className={`text-[1vw] mb-2 h-9 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 ${className}`}
                    id={id}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
}