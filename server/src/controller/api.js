
import conn from '../dbSchema';

const BANK = "bank";
const PRICE = 'price_sell';
const ENQUIRY = 'enquires';
const MARKET = 'market';
const CONTACT = 'contact';

function listQuery(tableName, res) {
    conn.query("SELECT * FROM " + tableName, function (err, results) {
        commonFunction(err, results, res)
    })
}

function insertQuery(data, tableName, id , res) {
    conn.query("SELECT * FROM " + tableName, function (err, results) {
        if (err) {
            console.log(err)
        } else {
            if (results.length > 0) {
                conn.query("UPDATE " + tableName + " SET ? WHERE id = " + id + " ", data, function (err, results) {
                    commonFunction(err, results, res)
                })
            } else {
                conn.query("INSERT INTO " + tableName + " SET ?", data, function (err, results) {
                    commonFunction(err, results, res)
                })
            }
        }
    })
}

function commonFunction(err, results, res) {
    if (err) {
        console.log(err)
    } else {
        return res.json({
            status: "Success",
            result: results,
            message: ''
        })

    }
}

module.exports = {
    // Select queries
    bankDetails: async (req, res) => {
        listQuery(BANK, res)
    },
    priceDetails: async (req, res) => {
        listQuery(PRICE, res)
    },
    marketDetails: async (req, res) => {
        listQuery(MARKET, res)
    },
    messageDetails: async (req, res) => {
        listQuery(ENQUIRY, res)
    },
    contactDetails: async (req, res) => {
        listQuery(CONTACT, res)
    },

    // Insert and updated  Queries 
    bankNewDetails: async (req, res) => {
        let data = req.body
        insertQuery(data, BANK, 1,  res)
    },
    priceNewDetails: async (req,  res) => {
        let data = req.body
        insertQuery(data, PRICE,  1, res)
    },
    marketNewDetails: async (req,  res) => {
        let data = req.body
        insertQuery(data, MARKET,  1,res)
    },
    messageNewDetails: async (req, res) => {
        let data = req.body
        insertQuery(data, ENQUIRY, data.id, res)
    },
    contactNewDetails: async (req, res) => {
        let data = req.body
        insertQuery(data, CONTACT, 1, res)
    },

}