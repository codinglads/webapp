import React from "react";
import './Viewpage.css';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

function ViewpageBDBC(){
    return(

        <div className="viewPage">
            <img className="viewPhoto" src="https://images.squarespace-cdn.com/content/v1/55802029e4b08f4843c44d82/1583982228224-CAO9IK4CHJ1H8PTYHEVC/BDBC+6700+Transit+Rendering+-+Facebook.jpg?format=1000w" alt="" />
            <Typography component="h1" variant="h5">
                Big Ditch Brewing Company
            </Typography>
            <hr/>
            <Typography className="ratingTitle" component="legend">Spot Rating</Typography>
            <Rating name="spotRating" icon={<StarIcon sx={{color: "black"}} />} defaultValue={0} precision={0.5}/>
            <p>Spacious taproom serving comfort eats, small plates & house-brewed beer in an industrial-chic setup.</p>
        </div>

    )
}

export default ViewpageBDBC;