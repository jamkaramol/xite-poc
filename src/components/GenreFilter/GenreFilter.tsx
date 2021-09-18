import React, { useState } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

import { Genre } from "../../types/allTypes";
import { eventNames } from 'process';

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

const GenreFilter = ({ genreList }: any) => {
    const [selectedGenre, setSelectedGenres] = useState<number[]>([]);

    const getGenreDetails = (idToCompare: number) => {
        const list = genreList.filter((genre: any) => genre.id === Number(idToCompare));
        return list.length ? list[0]?.name : "Unknown";
    };

    const handleChange = (event: any) => {
        let {
            target: { value },
        } = event;
        if (value.length < selectedGenre.length) {
            return setSelectedGenres(value);
        }
        const allGenres: number[] = Array.from(new Set([...selectedGenre, ...value]));
        setSelectedGenres(allGenres);
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={selectedGenre}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((id: any) => (
                                <Chip key={id} label={getGenreDetails(id)} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {genreList.length && genreList.map((genre: Genre) => (
                        <MenuItem
                            key={genre.name}
                            value={genre.id}
                        >
                            {genre.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div >
    );
}


export default GenreFilter;