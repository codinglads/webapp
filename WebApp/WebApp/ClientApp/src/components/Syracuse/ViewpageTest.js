import React from "react";
import './Viewpage.css';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

function ViewpageTest(){
    return(

        <div className="viewPage">
            <img className="viewPhoto" src="https://www.syracuse.edu/images/oiWrNcqzEzq4u5LKMMhd-1D4ZUU=/5080/fill-1600x1040/ashlee_haste_global.jpg" alt="" />
            <Typography component="h1" variant="h5">
                Title
            </Typography>
            <hr/>
            <Typography className="ratingTitle" component="legend">Spot Rating</Typography>
            <Rating name="spotRating" icon={<StarIcon sx={{color: "black"}} />} defaultValue={0} precision={0.5}/>
            <p>this is a description</p>
        </div>

    )
}

export default ViewpageTest;