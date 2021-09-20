import React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

import { Genre } from "../../types/allTypes";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const GenreFilter = ({ genreList, selectedGenre, setSelectedGenreToState }: any) => {
    
    const getGenreDetails = (idToCompare: number) => {
        const list = genreList.filter((genre: any) => genre.id === Number(idToCompare));
        return list.length ? list[0]?.name : "Unknown";
    };

    const handleChange = (event: any) => {
        let {
            target: { value },
        } = event;
        setSelectedGenreToState(value);
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-multiple-chip-label">Genre</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={selectedGenre}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Genre" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((id: any) => (
                                <Chip key={id} label={getGenreDetails(id)} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {genreList.length && genreList.map(({name, id}: Genre) => (
                        <MenuItem
                            key={name}
                            value={id}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div >
    );
}


export default GenreFilter;