import React from "react";
import { Video } from '../../types/allTypes';
import VideoDetailsCard from '../VideoDetailsCard/VideoDetailsCard';
import Grid from "@mui/material/Grid/Grid";


const VideoList = ({ allVideos }: any) => {

    const loopCards = allVideos.map((videoDetails: Video) => {
        return <VideoDetailsCard key={videoDetails.id} details={videoDetails} />;
    })

    return <React.Fragment>
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="space-evenly"
        >   
            {console.log("from component", allVideos)}
            {allVideos.length !== 0 && loopCards}
            {allVideos.length === 0 && "No result found, try with something else"}
        </Grid>
    </React.Fragment>;

};

export default VideoList;