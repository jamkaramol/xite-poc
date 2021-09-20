import React from "react";
import { TextField, FormControl } from "@mui/material";



const SearchBar = ({ searchVideoByInput, searchString }: any) => {

    return (<React.Fragment>
        <FormControl fullWidth>
            <TextField
                label="Search by artist or title"
                fullWidth
                id="fullWidth"
                value={searchString}
                onChange={(e) => searchVideoByInput(e)}
            />
        </FormControl>
    </React.Fragment>);

};


export default SearchBar;