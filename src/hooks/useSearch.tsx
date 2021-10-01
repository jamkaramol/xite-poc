import { useEffect, useCallback, useMemo, useState } from "react";
import { Video } from '../types/allTypes';


type UseSearch = {
    videoList: Video[],
    searchString: string,
    selectedYear: string,
    selectedGenre: number[]
};


const useSearch = ({ videoList, searchString, selectedYear, selectedGenre }: UseSearch): { videoListToDisplay: Video[], page: number, setPage: (page: number) => void } => {

    const [videoListToDisplay, setVideoListToDisplay] = useState<Video[]>([]);
    const [page, setPage] = useState(1);
    

    const filterByReleaseYear = (videoList: Video[]) => {
        return videoList.filter(({ release_year }) => release_year === Number(selectedYear))
    }

    const releaseYearVideos = useCallback(filterByReleaseYear, [selectedYear]);

    const filterByGenre = (videoList: Video[]) => {
        return videoList.filter(({ genre_id }) => selectedGenre.includes(genre_id));
    };

    const selectedGenreVideos = useCallback(filterByGenre, [selectedGenre]);

    const filterBySearchString = (): Video[] => {
        return videoList
            .filter(({ artist, title }) => artist.toLowerCase().includes(searchString.toLowerCase()) || String(title).toLowerCase().includes(searchString.toLowerCase()));
    }

    const searchedVideos = useMemo(filterBySearchString, [searchString, videoList]);

    const searchVideos = useCallback(() => {
        setPage(1);
        let finalResult: Video[] = [];
        finalResult = searchString ? searchedVideos : videoList;
        finalResult = selectedYear ? releaseYearVideos(finalResult) : finalResult;
        finalResult = selectedGenre.length ? selectedGenreVideos(finalResult) : finalResult;
        setVideoListToDisplay(finalResult);
    }, [videoList, searchString, selectedYear, selectedGenre, releaseYearVideos, searchedVideos, selectedGenreVideos])

    useEffect(() => {
        searchVideos();
    }, [videoList, searchString, selectedYear, selectedGenre, searchedVideos, selectedGenreVideos, releaseYearVideos, searchVideos])

    return { videoListToDisplay, page, setPage };

};

export default useSearch;