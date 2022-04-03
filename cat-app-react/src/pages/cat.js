import { Pagination } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import ListComponent from './list';
import SortAndFilter from './sortAndFilter';
import { useStyles } from './style';
import CircularProgress from '@mui/material/CircularProgress';

const BASE_URL = 'http://localhost:3001'

function CatPage() {
    const [catList, setCatList] = useState([])
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);
    const [count, setCount] = useState(0);
    const [catName, setCatName] = useState('')
    const isFirstRender = useRef(true);
    const limit = 5
    const classes = useStyles()

    useEffect(() => {
        async function fetchCat() {
            const response = await fetch(`${BASE_URL}/cat/getAll?limit=${limit}&page=${page}`)
            const res = await response.json();
            setCatList(res.data)
            setCount(Math.round(res.totalRecords / limit))
            setIsFetching(false)
        }

        if (catName === '') {
            setIsFetching(true)
            fetchCat()
        }
    }, [page, catName])

    useEffect(() => {
        let ignore = false;
        async function fetchCat() {
            const response = await fetch(`${BASE_URL}/cat/getByName/${catName}?limit=${limit}&page=${page}`)
            const json = await response.json();
            if (!ignore) {
                setCatList(json.data)
                setCount(Math.round(json.totalRecords / limit))
                setIsFetching(false)
            }
        }

        if (!isFirstRender.current && catName !== '') {
            setIsFetching(true)
            fetchCat();
        } else {
            isFirstRender.current = false
        }

        return () => { ignore = true };
    }, [catName, page]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleSearchChange = (value) => {
        setCatName(value);
    };

    return (
        <>
            <SortAndFilter onSearch={handleSearchChange} />
            {isFetching ? <CircularProgress /> : <ListComponent catList={catList} />}
            {count ? <Pagination
                count={count}
                page={page}
                classes={{
                    ul: classes.pagination
                }}
                onChange={handleChange}
            /> : <></>}
        </>
    );
}

export default CatPage;
