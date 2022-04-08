import React from "react";
import './Viewpage.css';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

function ViewpageDBBQ(){
    return(

        <div className="viewPage">
            <img className="viewPhoto" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Dinosaur_bar-b-que_syracuse.jpg" alt="" />
            <Typography component="h1" variant="h5">
                Big Ditch Brewing Company
            </Typography>
            <hr/>
            <Typography className="ratingTitle" component="legend">Spot Rating</Typography>
            <Rating name="spotRating" icon={<StarIcon sx={{color: "black"}} />} defaultValue={0} precision={0.5}/>
            <p>Barbecue chain serving Southern-style meats and draft brews in a retro setting (most have live music).</p>
        </div>

    )
}

export default ViewpageDBBQ;