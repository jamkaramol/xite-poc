import React from "react";
import { Video } from '../../types/allTypes';
import VideoDetailsCard from '../VideoDetailsCard/VideoDetailsCard';
import Grid from "@mui/material/Grid";

export const NO_RESULTS_MESSAGE = "No result found, try with something else";

type VideoListType = {
    allVideos: Video[]
};

const VideoList = ({ allVideos }: VideoListType): JSX.Element => {

    const loopCards = allVideos.map((videoDetails: Video) => {
        return <VideoDetailsCard key={videoDetails.id} details={videoDetails} />;
    });

    return <React.Fragment>
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="space-evenly"
        >
            {allVideos.length !== 0 && loopCards}
            {allVideos.length === 0 && NO_RESULTS_MESSAGE}
        </Grid>
    </React.Fragment>;

};

export default VideoList;