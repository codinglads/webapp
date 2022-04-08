import React from "react";
import './ViewpageD.css';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

function ViewpageDelmonico(){
    return(

        <div className="viewPageD">
            <img className="viewPhotoD" src="https://fastly.4sqi.net/img/general/600x600/9006637_I32brWNMx7f2L8PEFHJEwhGScu9vQKkyaXXQZ_uArI4.jpg" alt="" /> 
            <Typography component="h1" variant="h5">
                Delmonico's
            </Typography>
            <hr/>
            <Typography className="ratingTitleD" component="legend">Spot Rating</Typography>
            <Rating name="spotRating" icon={<StarIcon sx={{color: "black"}} />} defaultValue={0} precision={0.5}/>
            <p>Italian chain serving steak, classic entrees & cocktails in a traditional setting.</p>
        </div>

    )
}

export default ViewpageDelmonico;