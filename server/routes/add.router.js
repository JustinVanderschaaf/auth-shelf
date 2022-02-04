
const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'public/uploads/' })

const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

router.post('/', upload.single('avatar'),rejectUnauthenticated, (req, res, next) => {
    console.log('req.body is', req.body);
    console.log('req.file is', req.file);
    

    const queryText = `
        INSERT INTO "item"(description, image_url, user_id)
        VALUES ($1, $2, $3);
    `;

    const queryParams = [
        req.body.description,
        req.file.filename,
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
