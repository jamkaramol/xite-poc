import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent} from '@mui/material/Select';
import { Grid } from "@mui/material";
import GenreFilter from "../GenreFilter/GenreFilter";
import { Genre } from "../../types/allTypes";


type FiltersType = {
    yearList: number[] | string[], 
    onYearSelect: (event: SelectChangeEvent<string>) => void, 
    selectedYear: string, 
    genreList: Genre[], 
    selectedGenre: number[], 
    setSelectedGenreToState: (list: number[]) => void
}

const Filters = ({ yearList, onYearSelect, selectedYear, genreList, selectedGenre, setSelectedGenreToState }: FiltersType): JSX.Element => {

    return <React.Fragment>

        <Grid container spacing={2}>
            <Grid item xs={6}>
                <GenreFilter
                    genreList={genreList}
                    selectedGenre={selectedGenre}
                    setSelectedGenreToState={setSelectedGenreToState}
                />
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Year</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedYear}
                        label="Select year"
                        onChange={onYearSelect}
                    >
                        <MenuItem key="default" value=""></MenuItem>
                        {yearList.length !== 0 && yearList.map((year: number | string) => <MenuItem key={year} value={year}>{year}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    </React.Fragment>

};


export default Filters;