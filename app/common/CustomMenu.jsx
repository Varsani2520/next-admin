import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CustomMenu({ title, firstItem, secondItem, thirdItem }) {
    const [menu, setMenu] = React.useState('');

    const handleChange = (event) => {
        setMenu(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">{title}</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={menu}
                label="menu"
                onChange={handleChange}
            >
                <MenuItem value={firstItem}>{firstItem}</MenuItem>
                <MenuItem value={secondItem}>{secondItem}</MenuItem>
                <MenuItem value={thirdItem}>{thirdItem}</MenuItem>
            </Select>
        </FormControl>
    );
}