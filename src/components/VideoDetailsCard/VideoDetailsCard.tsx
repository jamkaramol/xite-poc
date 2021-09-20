import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './VideoDetails.css';

const VideoDetailsCard = ({ details }: any) => {

    const { id, title, artist, image_url } = details;

    return (
        <Card sx={{ maxWidth: 214, margin: 1 }} key={id} className="video-details-card">
            <CardMedia
                component="img"
                image={image_url}
                alt={title}
                className="video-details-card__image"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" className="video-details-card__artist">
                    {artist}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="video-details-card__title">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
};


export default VideoDetailsCard;