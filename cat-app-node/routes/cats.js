const { setResponseHeaders, slicedResult } = require('../middleware/pagination');
var router = require('express').Router();
var fetch = require('node-fetch')

let catList = []

async function getCatList() {
    const catListJson = await fetch('https://api.thecatapi.com/v1/breeds')
    catList = await catListJson.json()
}

getCatList()

router.get('/getAll', setResponseHeaders(), function (req, res, next) {
    const data = {
        data: slicedResult(req.query.page, req.query.limit, catList),
        totalRecords: catList.length
    }

    res.status(200)
    res.json(data);
});

router.delete('/:id', setResponseHeaders(), function (req, res, next) {
    catList = catList.filter(item => item.id !== req.params.id)
    res.status(200)
    res.json({ message: "Successfully deleted" });
});

router.get('/getById/:id', setResponseHeaders(), function (req, res, next) {
    const sortedList = catList.filter(item => item.id == req.params.id)
    const data = {
        data: null
    }

    if (!sortedList.length) {
        res.status(404)
        res.json(data);
        return
    }

    data.data = sortedList[0]

    res.status(200)
    res.json(data);
});

router.get('/getByName/:name', setResponseHeaders(), function (req, res, next) {
    const data = {
        data: catList,
        totalRecords: catList.length
    }

    if (req.params.name !== '') {
        let sortedList = catList.filter(item => item.name.toLowerCase().includes(req.params.name.toLowerCase()))
        data.totalRecords = sortedList.length

        const { page, limit } = req.query

        sortedList = slicedResult(page, limit, sortedList)
        data.data = sortedList

        res.status(200)
        res.json(data);
    } else {
        res.status(200)
        res.json(data);
    }
});

module.exports = router;
