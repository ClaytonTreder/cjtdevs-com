const axios = require("axios");
require("dotenv").config();

const headers = {
  "Content-Type": "application/json"
};

const profile = {
  GetProfile: async function (props) {
    return await axios({
      method: "GET",
      url: `/api/profiles/${props.id}`,
      headers: headers,
    })
      .then((info) => {
        return info;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  },
  GetProfileIDs: async function () {
    return await axios({
      method: "GET",
      url: `/api/profiles/`,
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
  },
};

export default profile;
  