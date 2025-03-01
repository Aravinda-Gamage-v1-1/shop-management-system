import React, { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import PropTypes from 'prop-types';
import walk from "../../../images/walk.gif";
import Button from '@mui/material/Button';
interface WebCamPicProps {
    setImg: any;
    resetForm?: boolean;
    setResetWebForm:any;
    file:any;
}

const WebCamPic: React.FC<WebCamPicProps> = ({resetForm = false ,setImg,setResetWebForm,file}) => {
    const webcamRef = useRef<Webcam>(null);
    let [imgSrc, setImgSrc] = useState<string | null>(walk);
    const [isCameraOn, setIsCameraOn] = useState<boolean>(false);
    const [reset, setReset] = useState(false)
    const capture = useCallback(() => {
        if (webcamRef.current) {
            let imageSrc = webcamRef.current.getScreenshot();
            setImgSrc(imageSrc);
            setImg(imageSrc);
            setIsCameraOn(false);
            setResetWebForm(false)
        }
    }, [webcamRef, setImg]);

    const retake = () => {
        setImgSrc(null);
        setIsCameraOn(true);
        setResetWebForm(false)
    };

    const startCamera = () => {
        setIsCameraOn(true);
        setResetWebForm(false)
    };

    useEffect(() => {
        if (resetForm){
            setImgSrc(walk);
            setIsCameraOn(false);
        }
    }, [resetForm]);
    useEffect(() => {
            setImgSrc(file);
            setImg(imgSrc);
        setResetWebForm(false)
    }, [file]);

    return (
        <div className="w-[14vw] h-[10vw] flex flex-col items-center">
            {imgSrc ? (
                <img src={imgSrc} alt="webcam" />
            ) : (
                isCameraOn && <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
            )}
            <div className="mt-5">
                {imgSrc ? (
                    <Button variant="contained" color="primary" size="small" type="button" onClick={retake}>Capture</Button>
                ) : (
                    <Button variant="contained" color="error" size="small" type="button" onClick={isCameraOn ? capture : startCamera}>
                        {isCameraOn ? 'Take Picture' : 'Start Camera'}
                    </Button>
                )}
            </div>
        </div>
    );
};

WebCamPic.propTypes = {
    setImg: PropTypes.func.isRequired,
    resetForm: PropTypes.bool,
    setResetWebForm:PropTypes.func,
    file:PropTypes.any
};

export default WebCamPic;
