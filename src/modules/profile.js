const axios = require("axios");
require("dotenv").config();

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": `${process.env.REACT_APP_CJTDEVSURL}`,
};

exports.GetProfile = async function (props) {
  return await axios({
    method: "GET",
    url: `${process.env.REACT_APP_APICJTDEVSURL}/api/profiles/${props.id}`,
    headers: headers,
  })
    .then((info) => {
      return info;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};
exports.GetProfileIDs = async function () {
  return await axios({
    method: "GET",
    url: `${process.env.REACT_APP_APICJTDEVSURL}/api/profiles/`,
    headers: headers,
  })
    .then((info) => {
      return info.data.map((value) => {
        return { id: value.id, name: value.name };
      });
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};
