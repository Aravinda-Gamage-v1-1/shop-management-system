import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import classes from "*.module.css";

const Input = styled('input')({
    display: 'none',
});

const FilePicker = ({ onFileSelect }:any) => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event:any) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            onFileSelect(file);
        }
    };

    return (
            <label htmlFor="file-picker">
                <Input
                    accept="image/jpeg, image/png, image/gif"
                    id="file-picker"
                    type="file"
                    onChange={handleFileChange}
                />
                <Button variant="contained" component="span" className={"w-[13.2vw]"}>
                    Choose File
                </Button>
            </label>
    );
};

export default FilePicker;
