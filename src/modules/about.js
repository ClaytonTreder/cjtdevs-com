const axios = require("axios");
require("dotenv").config();

const headers = {
  "Content-Type": "application/json",
};

const about = {
  getAbout: async function (props) {
    return await axios({
      method: "GET",
      url: `/api/about/${props.id}`,
      headers: headers,
    })
      .then((info) => {
        return info;
      })
      .catch((err) => {
        return null;
      });
  },
  getAdminAbout: async function (props) {
    return await axios({
      method: "GET",
      url: `/api/admin/about/${props.id}`,
      headers: headers,
    })
      .then((info) => {
        return info;
      })
      .catch((err) => {
        return null;
      });
  },
  putAdminAbout: async function (props) {
    return await axios
      .put(`/api/admin/about/${props.id}`, props.about)
      .then((info) => {
        return info.status;
      })
      .catch((err) => {
        return null;
      });
  },
};

export default about;
