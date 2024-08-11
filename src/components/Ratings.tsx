import { useState } from "react";
import RatingReview from "./RatingView";


function Ratings(){
    const [rating, setRating] = useState(0)
    return(
        <>
        <div>
            <RatingReview rating={rating} setRating={setRating} />
        </div>
        </>
    )
}
export default Ratings;