export interface Genre {
    id: number;
    name: string;
}

export interface Video {
    id: number;
    artist: string;
    title: string | number;
    release_year: number;
    genre_id: number;
    image_url: string;
}

export interface ResponseDataSet {
    genres: Genre[];
    videos: Video[];
};