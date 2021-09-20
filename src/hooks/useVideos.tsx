import { useState, useEffect, useCallback, useMemo } from "react";
// import { response } from './responseMock';
import { Video, Genre, ResponseDataSet } from '../types/allTypes';

const URL = 'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json';

type UseVideo = {
    videoListToDisplay: Video[],
    genreList: Genre[],
    searchString: string,
    setSearchStringToState: (text: string) => void,
    yearList: number[],
    setSelectedYearToState: (year: string) => void,
    selectedYear: string,
    selectedGenre: number[],
    setSelectedGenreToState: (genres: number[]) => void,
    clearFilters: () => void,
    isLoading: boolean
};

const useVideos = (): UseVideo => {

    const [isLoading, setLoading] = useState<boolean>(true);
    const [videoList, setVideos] = useState<Video[]>([]);
    const [genreList, setGenre] = useState<Genre[]>([]);
    const [videoListToDisplay, setVideoListToDisplay] = useState<Video[]>([]);
    const [yearList, setYearList] = useState<number[]>([]);

    const [selectedYear, setSelectedYear] = useState<string>("");
    const [searchString, setSearchString] = useState<string>("");
    const [selectedGenre, setSelectedGenre] = useState<number[]>([]);

    const getAllYears = (videoList: Video[]) => {
        let yearList: number[] = [];
        videoList.forEach(({ release_year }) => {
            if (!yearList.includes(release_year)) {
                yearList.push(release_year);
            }
        });
        const sortedList = yearList.sort((a, b) => a - b);
        setYearList(sortedList);
    };

    const setVideoListToSet = (list: Video[]): void => {
        setVideoListToDisplay(list);
    };

    useEffect(() => {
        setLoading(true);
        fetch(URL)
            .then((response) => response.json())
            .then((response) => {
        const { videos, genres }: ResponseDataSet = response;
        setVideoListToSet(videos);
        setGenre(genres);
        getAllYears(videos);
        setVideos(videos);
        setSearchString("");
        setSelectedYear("");
        setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, []);


    const setSelectedYearToState = (year: string): void => {
        setSelectedYear(year)
    };

    const filterByReleaseYear = (videoList: Video[]) => {
        return videoList.filter(({ release_year }) => release_year === Number(selectedYear))
    }

    const releaseYearVideos = useCallback(filterByReleaseYear, [selectedYear]);

    const filterByGenre = (videoList: Video[]) => {
        return videoList.filter(({ genre_id }) => selectedGenre.includes(genre_id));
    };

    const allVideoOfSelectedGenre = useCallback(filterByGenre, [selectedGenre]);

    const filterBySearchString = (): Video[] => {
        return videoList
            .filter(({ artist, title }) => artist.toLowerCase().includes(searchString.toLowerCase()) || String(title).toLowerCase().includes(searchString.toLowerCase()));
    }

    const searchedVideos = useMemo(filterBySearchString, [searchString, videoList]);

    useEffect(() => {
        let finalResult: Video[] = [];
        if (searchString) {
            finalResult = searchedVideos;
            if (selectedYear) {
                finalResult = releaseYearVideos(finalResult);
            }
            if (selectedGenre.length) {
                finalResult = allVideoOfSelectedGenre(finalResult);
            }
            setVideoListToSet(finalResult);
        } else {
            setVideoListToSet(videoList);
        }

    }, [videoList, searchString, selectedYear, selectedGenre, searchedVideos, allVideoOfSelectedGenre, releaseYearVideos])


    const setSearchStringToStateNew = (text: string) => {
        let timeoutId: any;
        setSearchString(text);
        return function () {
            if (timeoutId) {
                clearInterval(timeoutId)
            } else {
                timeoutId = setTimeout(() => setSearchString(text), 100);
            }
        }
    }

    const setSearchStringToState = useCallback(setSearchStringToStateNew, []);

    const setSelectedGenreToState = (goners: number[]): void => {
        setSelectedGenre(goners);
    };

    const clearFilters = (): void => {
        setSearchString("");
        setSelectedYear("");
        setSelectedGenre([]);
    }

    return {
        videoListToDisplay,
        genreList,
        searchString,
        setSearchStringToState,
        yearList,
        setSelectedYearToState,
        selectedYear,
        selectedGenre,
        setSelectedGenreToState,
        clearFilters,
        isLoading
    };

};


export default useVideos;