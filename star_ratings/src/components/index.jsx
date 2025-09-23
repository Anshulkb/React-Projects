import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';
import './styles.css';

export default function StarRatings({ totalStars }) {
    const [hover, setHover] = useState(0);
    const [rating, setRating] = useState(0);

    function fnOnClick(currentIndex) {
        setRating(currentIndex);
    }
    function fnOnMouseHover(currentIndex) {
        setHover(currentIndex);
    }
    function fnOnMouseLeave() {
        setHover(rating);
    }
    return <div style={{
        paddingTop: "10px"
    }}>
        {
            [...Array(totalStars)].map((_, index) => {
                index += 1;
                return <FaStar className={index <= (hover || rating) ? 'enabled' : 'disabled'} fontSize="40px"
                    key={index} onClick={() => fnOnClick(index)} onMouseMove={() => fnOnMouseHover(index)} onMouseLeave={() => fnOnMouseLeave()}></FaStar>;
            })
        }
    </div>
}