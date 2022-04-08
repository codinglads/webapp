import React from "react";
import './Viewpage.css';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

function ViewpageStellas(){
    return(

        <div className="viewPage">
            <img className="viewPhoto" src="https://www.syracuse.com/resizer/s9l4PGb4IOTgk1zxV0wBkdXIPVw=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/OI7I2UPRCBGQZASKAQP5NYUEZQ.jpg" alt="" />
            <Typography component="h1" variant="h5">
                Stellas
            </Typography>
            <hr/>
            <Typography className="ratingTitle" component="legend">Spot Rating</Typography>
            <Rating name="spotRating" icon={<StarIcon sx={{color: "black"}} />} defaultValue={0} precision={0.5}/>
            <p>Hefty helpings of comfort food in a spacious diner adorned with vintage signs and Betty Boop cartoons</p>
        </div>

    )
}

export default ViewpageStellas;