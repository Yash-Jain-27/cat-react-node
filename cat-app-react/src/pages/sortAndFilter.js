import React, { useState } from 'react';
import SelectComponent from '../components/select';
import TextField from '@mui/material/TextField';
import { useStyles } from './style';

function SortAndFilter(props) {
    const classes = useStyles()
    const { onSearch } = props
    const [catName, setCatName] = useState('')

    const searchMenuItems = [{
        key: 'name',
        value: 'Name'
    }, {
        key: 'breed',
        value: 'Breed'
    }]

    const sortMenuItems = [{
        key: 'name',
        value: 'Name'
    }]

    const handleChange = (event) => {
        setCatName(event.target.value);
        onSearch(event.target.value)
    };

    return (
        <div className={classes.sortAndFilter}>
            <SelectComponent
                title="Search By"
                menuItems={searchMenuItems}
            />
            <TextField onChange={handleChange} value={catName} className={classes.searchField} id="standard-basic" variant="standard" />
            <SelectComponent
                title="Sort By"
                menuItems={sortMenuItems}
            />
        </div>
    );
}

export default SortAndFilter;
