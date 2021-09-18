import React from "react";
import { TextField } from "@mui/material";



const SearchBar = ({ searchVideoByInput} : any) => {


    return (<React.Fragment>
        <TextField
            label="Search by artist or title"
            type="search"
            variant="filled"
            fullWidth
            id="fullWidth"
            onKeyUp={(e) => searchVideoByInput(e)}
        />
    </React.Fragment>);

};


export default SearchBar;