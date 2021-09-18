import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';




const VideoDetailsCard = ({ details }: any) => {

    const { id, title, artist, image_url } = details;
    return (
        <Card sx={{ maxWidth: 350 }} key={id}>
            <CardMedia
                component="img"
                height="200"
                width="200"
                image={image_url}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {artist}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
};


export default VideoDetailsCard;