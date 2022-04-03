import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useStyles } from './style';

export default function SelectComponent(props) {
    const { title, menuItems, onHandleChange } = props
    const [value, setValue] = React.useState(menuItems[0]?.key);
    const classes = useStyles()

    const handleChange = (event) => {
        setValue(event.target.value);
        onHandleChange(event.target.value)
    };

    return (
        <Box className={classes.selectComponent}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={title}
                    onChange={handleChange}
                >
                    {menuItems.map((item) => {
                        return <MenuItem key={item.key} value={item.key}>{item.value}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}