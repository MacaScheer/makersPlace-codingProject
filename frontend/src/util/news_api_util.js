import axios from "axios";

export const getNews = (searchTerms) => {
    return axios.get(`/api/news/${searchTerms}`)
}

// export const getNews = () => {
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