import axios from "axios";

//function used to handle all API calls, if status is equal to 'error', it means that an issue occured
const apiHandler = async (url, method) => {
  const headerParams = {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  let result = {};

  await axios({
    headers: headerParams,
    url: url,
    method: method,
  })
    .then((response) => {
      const data = response.data.items;
      result = {
        status: "success",
        data: data,
      };
    })
    .catch((error) => {
      result = {
        status: "error",
        error: error.message,
      };
    });
  return result;
};

export default apiHandler;
