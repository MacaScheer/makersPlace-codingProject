const express = require("express")
const router = express.Router()
// const URLS = require("./urls")

router.get("/:searchTerms", (req, res) => {
    let srch = req.params.searchTerms
    var url = `http://newsapi.org/v2/top-${srch}?` +
    'country=us&' +
    'apiKey=c4c866ef7e6b427b842cc0d2bb9e55b6';
    var req1 = new Request(url);
    fetch(req1)
    .then(function (response) {
        console.log(response.json());
    })
    
})

module.exports = router;

// router.get("/news", (req, res) => {
//     return json({})
// })

// export const fetchTopNews = () => {
//     {
//         return $.ajax({
//             method: "GET",
//             url: `https://newsapi.org/v2/top-headlines`,
//             data: {
//                 category: "business",
//                 country: "us",
//                 apiKey: "c4c866ef7e6b427b842cc0d2bb9e55b6",
//                 pageSize: 15
//             }
//         });
//     }
// };

// export const fetchCompanyNews = name => {
//     {
//         return $.ajax({
//             method: "GET",
//             url: `https://newsapi.org/v2/everything`,
//             data: {
//                 q: name,
//                 language: "en",
//                 apiKey: "bb67bedddb454b0bae6d54e125e65d2e",
//                 pageSize: 5
//             }
//         });
//     }
// };
