import React from "react";
import { TextField, FormControl } from "@mui/material";

type SearchBarType = {
    searchVideoByInput: (searchString: string) => void,
    searchString: string
}

const SearchBar = ({ searchVideoByInput, searchString }: SearchBarType) => {

    return (<React.Fragment>
        <FormControl fullWidth>
            <TextField
                label="Search by artist or title"
                fullWidth
                id="fullWidth"
                value={searchString}
                onChange={(e) => searchVideoByInput(e.target.value)}
            />
        </FormControl>
    </React.Fragment>);

};


export default SearchBar;