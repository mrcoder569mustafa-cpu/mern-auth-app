const express = require('express');
const ensureAuthenticated = require('../Middlewares/Auth');

const router = express.Router(); // ✅ router object create


router.get('/', ensureAuthenticated, (req, res) => {
    console.log('------ Logged In User Detail ------', req.user);
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
         {
            name: "laptop",
            price: 50000
        },

    ])
});



module.exports = router;
