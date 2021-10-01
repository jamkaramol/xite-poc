import { useState, useEffect } from "react";
import { Video, Genre, ResponseDataSet } from '../types/allTypes';

const URL = 'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json';

type UseVideo = {
    videoList: Video[],
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
    const [yearList, setYearList] = useState<number[]>([]);

    const [selectedYear, setSelectedYear] = useState<string>("");
    const [searchString, setSearchString] = useState<string>("");
    const [selectedGenre, setSelectedGenre] = useState<number[]>([]);

    const getAllYears = (videoList: Video[]) => {
        let yearList: number[] = [];
        yearList = videoList.map(({ release_year }) => release_year).sort((a, b) => a - b);
        const uniqueList = Array.from(new Set(yearList));
        setYearList(uniqueList);
    };

    useEffect(() => {
        setLoading(true);
        fetch(URL)
            .then((response) => response.json())
            .then((response) => {
                const { videos = [], genres = [] }: ResponseDataSet = response;
                setGenre(genres);
                getAllYears(videos);
                setVideos(videos);
                setLoading(false);
            }).catch(() => {
                setLoading(false);
            });
    }, []);


    const setSelectedYearToState = (year: string): void => {
        setSelectedYear(year)
    };

    const setSearchStringToState = (text: string) => {
        setSearchString(text);
    }

    const setSelectedGenreToState = (goners: number[]): void => {
        setSelectedGenre(goners);
    };

    const clearFilters = (): void => {
        setSearchString("");
        setSelectedYear("");
        setSelectedGenre([]);
    }

    return {
        videoList,
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