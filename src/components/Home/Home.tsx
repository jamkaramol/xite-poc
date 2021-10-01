import React, { useCallback } from "react";
import Filters from '../Filter/Filters';
import SearchBar from '../SearchBar/SearchBar';
import useVideos from "../../hooks/useVideos";
import VideoList from '../VideoList/VideoList';
import { Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import './Home.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useSearch from "../../hooks/useSearch";

const Home = (): JSX.Element => {

    const {
        videoList,
        genreList,
        setSearchStringToState,
        searchString,
        yearList,
        setSelectedYearToState,
        selectedYear,
        selectedGenre,
        setSelectedGenreToState,
        clearFilters,
        isLoading } = useVideos();

    const { videoListToDisplay } = useSearch({ videoList, searchString, selectedYear, selectedGenre });

    const searchVideos = useCallback((searchStringValue: string) => {
        setSearchStringToState(searchStringValue);
    }, [setSearchStringToState]);

    const onYearSelectHandler = useCallback((event: any) => {
        setSelectedYearToState(String(event.target.value));
    }, [setSelectedYearToState]);

    return <React.Fragment>
        <Container >
            <h1 className="home__heading">Video Search Engine</h1>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <i className="btn-green home_search-result"> {searchString.length || selectedGenre.length || selectedYear ? `About ${videoListToDisplay.length} records` : ''}</i>
                <Button onClick={() => clearFilters()} className="btn-floating right" style={{ float: "right" }} variant="text">Clear </Button>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SearchBar searchVideoByInput={searchVideos} searchString={searchString} />
                </Grid>
                <Grid item xs={12}>
                    <Filters
                        yearList={yearList}
                        onYearSelect={onYearSelectHandler}
                        selectedYear={selectedYear}
                        genreList={genreList}
                        selectedGenre={selectedGenre}
                        setSelectedGenreToState={setSelectedGenreToState}
                    />
                </Grid>

                <Grid item xs={12}>
                    {isLoading && <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>}
                    {isLoading && "Loading your favorite videos, please wait"}
                    {!isLoading && <VideoList allVideos={videoListToDisplay} />}
                </Grid>
            </Grid>
        </Container>

    </React.Fragment>
};


export default Home;