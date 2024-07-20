import React from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

const SearchTextField = ({ onSearch, ...props }) => {
    return (
        <TextField
            {...props}
            variant="outlined"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end" sx={{ background: 'primary' }}>
                        <IconButton onClick={onSearch}>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    )
}

export default SearchTextField
