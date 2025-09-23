import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./index.css";

export default function ImageSlider({ url, limit, page }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showImgCont, setImageContVisible] = useState(false);


    async function fetchImages(baseUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${baseUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImages(data);
                setLoading(false);
                setErrorMsg(null);
                setImageContVisible(true);
            }
        } catch (e) {
            setLoading(false);
            setErrorMsg(e.message);
        }
    }
    function loadImages() {
        if (url !== '') {
            fetchImages(url);
        }
    }
    function previousSlide() {
        setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1);
    }
    function nextSlide() {
        setCurrentSlide(currentSlide + 1 === images.length ? currentSlide : currentSlide + 1);
    }
    console.log(images);
    if (loading) {
        return <div>Loading data! Please wait...</div>
    }

    if (errorMsg !== null) {
        return <div>An unexpected error occured. Please try again later.</div>
    }
    return <div className="flex-box-Vertical">
        <button type="button" onClick={loadImages} className="button" hidden={images.length > 0}>Load Images</button>
        {showImgCont && (
            <div className="imageContainer">

                <BsArrowLeftCircleFill className="arrow arrow-left" onClick={previousSlide} mode="" ></BsArrowLeftCircleFill>
                {
                    images && images.length > 0 ?
                        images.map((item, index) => (
                            <img key={item.id} src={item.download_url} alt={item.author} className={
                                currentSlide === index ?
                                    "image"
                                    : "image hide-image"
                            } />
                        )) : null
                }
                <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}></BsArrowRightCircleFill>
                <span className="circle-indicator">{
                    images && images.length > 0 ?
                        images.map((_, index) => (
                            <button key={index} className={
                                currentSlide === index ?
                                    "current-indicator"
                                    : "current-indicator inactive-indicator"
                            }
                                onClick={() => setCurrentSlide(index)} />
                        )) : null
                }</span>
            </div>
        )}
    </div>;
}