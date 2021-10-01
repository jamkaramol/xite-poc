import React, { useEffect, useState } from "react";
import { Video } from '../../types/allTypes';
import VideoDetailsCard from '../VideoDetailsCard/VideoDetailsCard';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const NO_RESULTS_MESSAGE = "No result found, try with something else";
const COUNT_PER_PAGE = 10;

type VideoListType = {
    allVideos: Video[],
    page: number,
    setPage: (page: number) => void
};

const VideoList = ({ allVideos, page, setPage }: VideoListType): JSX.Element => {

    const [loopCards, setLoopCards] = useState<Video[]>([]);

    const multi = (count: number) => {
        return Math.round(count * COUNT_PER_PAGE);
    };

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        if (value) {
            setPage(value);
        }
    };

    useEffect(() => {
        let cards = page === 1 ? allVideos.slice(0, multi(page)) : allVideos.slice(multi(page - 1), multi(page));
        setLoopCards(cards);
    }, [allVideos, page])


    const totalPages = Math.round(allVideos.length / COUNT_PER_PAGE);
    return <React.Fragment>
        <Stack spacing={2}>
            <Typography>Page: {page}</Typography>
            <Pagination count={totalPages} page={page} onChange={handleChange} />
        </Stack>
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="space-evenly"
        >
            {loopCards.length !== 0 && loopCards.map((videoDetails: Video) => {
                return <VideoDetailsCard key={videoDetails.id} details={videoDetails} />;
            })}
            {allVideos.length === 0 && NO_RESULTS_MESSAGE}
        </Grid>
    </React.Fragment>;

};

export default VideoList;