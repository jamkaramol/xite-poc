import React from "react";
import Filters from '../Filter/Filters';
import SearchBar from '../SearchBar/SearchBar';
import useVideos from "../../hooks/useVideos";
import VideoList from '../VideoList/VideoList';
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

const Home = () => {

    const { videoListToDisplay,
        genreList,
        setSearchStringToState,
        yearList,
        setSelectedYearToState,
        selectedYear } = useVideos();

    const searchVideos = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchStringToState(event.target.value);
    };


    const onYearSelectHandler = (event: any) => {
        setSelectedYearToState(String(event.target.value));
    };

    return <React.Fragment>
        <Container >
            <h1>Welcome to home page</h1>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SearchBar searchVideoByInput={searchVideos} />
                </Grid>
                <Grid item xs={12}>
                    <Filters yearList={yearList} onYearSelect={onYearSelectHandler} selectedYear={selectedYear} genreList={genreList} />
                </Grid>

                <Grid item xs={12}>
                    <VideoList allVideos={videoListToDisplay} />
                </Grid>
            </Grid>
        </Container>

    </React.Fragment>
};


export default Home;