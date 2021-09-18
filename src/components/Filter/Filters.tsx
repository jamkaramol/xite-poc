import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid } from "@mui/material";
import GenreFilter from "../GenreFilter/GenreFilter";
import { Genre } from "../../types/allTypes";



const Filters = ({ yearList, onYearSelect, selectedYear, genreList }: any) => {

    return <React.Fragment>

        <Grid container spacing={2}>
            <Grid item xs={6}>
                <GenreFilter genreList={genreList} />
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
                        {yearList.length !== 0 && yearList.map((year: number) => <MenuItem key={year} value={year}>{year}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    </React.Fragment>

};


export default Filters;