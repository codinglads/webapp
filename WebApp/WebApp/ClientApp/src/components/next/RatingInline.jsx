import React, { useState } from 'react'



//we would need to make more of these from weatherwidget.io and add them to location in graphCMS and make a querey to get this 

const RatingInline = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div>
            <div className="star-rating">
                <h3 className="text-l font-semibold pt-4">
                    Have you been here? Let us know how it was!
                </h3>
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hover || rating) ? "on" : "off"}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <span className="star text-3xl">&#9733;</span>
                        </button>
                    );
                })}
            </div>
        </div>
    )
}

export default RatingInline