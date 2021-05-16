const express = require('express');
const router = express.Router();

// @route   GET api/timestamp
// @desc    brings current date in json format as 'unix' and 'utc'
// @access  public

router.get('/', (req, res) => {
    // if there is no custom route, show the current date.
    let dateObj = new Date();
        res.json({
            unix: dateObj.valueOf(),
            utc: dateObj.toUTCString()
        });
})

// @route   GET api/timestamp/:dateString
// @desc    brings custom date in json format as 'unix' and 'utc'
// @access  public

router.get('/:customDate', (req, res) => {
    // assign the route to a constant
    const customDate = req.params.customDate;

    // if there isn't a non-number character in the route, it is in unix format
    if(/\D/.test(customDate) === false){
        let unix = parseInt(customDate);
        res.json({
            unix,
            utc: new Date(unix).toUTCString()
        })
    } else {
        let dateObj = new Date(customDate);
        // if the route is not a valid date, we throw err
        if(dateObj.toString() === 'Invalid Date'){
            res.json({
                error: 'Invalid Date'
            })
        } else {
            res.json({
                unix: dateObj.valueOf(),
                utc: dateObj.toUTCString()
            })
        }
    }
})

module.exports = router;