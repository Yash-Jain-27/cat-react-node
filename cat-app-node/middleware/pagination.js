const slicedResult = (pageValue, limitValue, model) => {
    const page = parseInt(pageValue);
    const limit = parseInt(limitValue);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return model.slice(startIndex, endIndex);
}

const paginatedResults = (model) => {
    return (req, res, next) => {
        let results = {};

        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        results = model.slice(startIndex, endIndex);
        res.paginatedResults = results;
        next();
    };
}

const setResponseHeaders = () => {
    return (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        next();
    };
}

module.exports = { paginatedResults, slicedResult, setResponseHeaders }