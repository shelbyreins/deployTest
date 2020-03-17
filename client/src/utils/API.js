import axios from "axios";

export default{
    
    searchQuotes: function (query){
        return axios.get("https://quote-garden.herokuapp.com/quotes/search/happy")
    }
};