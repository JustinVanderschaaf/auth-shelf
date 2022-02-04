
const express = require('express');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('req.body is', req.body);

    const queryText = `
        INSERT INTO "item"(description, image_url, user_id)
        VALUES ($1, $2, $3);
    `;

    const queryParams = [
        req.body.description,
        req.body.image_url,
        req.body.user_id
    ]

    pool
    .query(queryText, queryParams)
    .then(() => res.sendStatus(201))
    .catch((err) => {
        console.log('Add item failed: ', err);
        res.sendStatus(500);
    });
});

module.exports = router;