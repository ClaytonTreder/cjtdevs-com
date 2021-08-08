const axios = require("axios");

const auth = {
  loggedIn: async function () {
    return await axios({
      method: "GET",
      url: "/auth/loggedIn",
    })
      .then((info) => {
        return info;
      })
      .catch((err) => {
        return false;
      });
  },
};

export default auth;
