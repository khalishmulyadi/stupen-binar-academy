import { FETCH_CAR } from "./types";

var axios = require("axios");

var config = {
  method: "get",
  url: "https://rent-cars-api.herokuapp.com/admin/car",
  // url: "https://jsonplaceholder.typicode.com/posts",
  headers: {},
};

const getCarData = () => {
  return (dispatch) => {
    axios(config)
      .then(function (response) {
        console.log(response.data);
        dispatch({
          type: FETCH_CAR,
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export default getCarData;
