const app = require('express')
const router = express.router()
const con = require('../dbcon/dbconnection.js')
router.get("/"), (req, res) => {
    try {
        con.query('select * from users',(err, result) => {
            if (err) throw err
            res.send(result)
        })
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}
module.exports = router