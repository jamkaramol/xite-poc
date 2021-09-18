import { useState, useEffect } from "react";
import { response } from './responseMock';
import { Video, Genre, ResponseDataSet } from '../types/allTypes';

type UseVideo = {
    videoListToDisplay: Video[],
    genreList: Genre[],
    setSearchStringToState: (text: string) => void,
    yearList: number[],
    setSelectedYearToState: (year: string) => void,
    selectedYear: string
};

const useVideos = (): UseVideo => {

    const [videoList, setVideos] = useState<Video[]>([]);
    const [genreList, setGenre] = useState<Genre[]>([]);
    const [videoListToDisplay, setVideoListToDisplay] = useState<Video[]>([]);
    const [yearList, setYearList] = useState<number[]>([]);

    const [selectedYear, setSelectedYear] = useState<string>("");
    const [searchString, setSearchString] = useState<string>("");

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

    useEffect(() => {
        const { videos, genres }: ResponseDataSet = response;
        setVideoListToDisplay(videos);
        setGenre(genres);
        getAllYears(videos);
        setVideos(videos);
        setSearchString("");
        setSelectedYear("");
    }, []);


    const setSelectedYearToState = (year: string) => {
        setSelectedYear(year)
    };

    const searchResult = () => {
        return videoList
            .filter(({ artist, title }) => artist.toLowerCase().includes(searchString) || String(title).toLowerCase().includes(searchString));
    }

    useEffect(() => {
        if (searchString || selectedYear) {
            let finalResult = [];
            finalResult = searchResult();
            if (selectedYear) {
                finalResult = finalResult.filter(({ release_year }) => release_year === Number(selectedYear));
            }
            setVideoListToDisplay([...finalResult]);
        }
    }, [searchString, selectedYear])


    const setSearchStringToState = (text: string): void => {
        text = text.toLowerCase();
        setSearchString(text);
    }

    return { videoListToDisplay, genreList, setSearchStringToState, yearList, setSelectedYearToState, selectedYear };

};


export default useVideos;