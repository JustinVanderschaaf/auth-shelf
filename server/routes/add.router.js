const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res, next) => {
    console.log('req.body is', req.body);
    const item = req.body.itemToAdd

    const queryText = `
        INSERT INTO "item"(description, image_url, user_id)
        VALUES ($1, $2, $3);
    `;

    const queryParams = [
        item.description,
        item.image_url,
        item.user_id
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