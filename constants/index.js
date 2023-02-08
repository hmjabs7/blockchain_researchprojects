const addresses = require("./addresses.json")
const abi = require("./abi.json")
const linkItems = [
    {
        link: "../",
        text: "Home",
    },
    {
        link: "teachers",
        text: "Teachers",
    },
    {
        link: "students",
        text: "Students",
    },
]

module.exports = {
    abi,
    addresses,
    linkItems,
}
