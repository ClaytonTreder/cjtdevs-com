const axios = require("axios");
require("dotenv").config();

const headers = {
  "Content-Type": "application/json",
};

const contact = {
  getContact: async function (props) {
    return await axios({
      method: "GET",
      url: `/api/contact/${props.id}`,
      headers: headers,
    })
      .then((info) => {
        return info;
      })
      .catch((err) => {
        return null;
      });
  },
  getAdminContact: async function (props) {
    return await axios({
      method: "GET",
      url: `/api/admin/contact/${props.id}`,
      headers: headers,
    })
      .then((info) => {
        return info;
      })
      .catch((err) => {
        return null;
      });
  },
  putAdminContact: async function (props) {
    return await axios
      .put(`/api/admin/contact/${props.id}`, props.contact)
      .then((info) => {
        return info.status;
      })
      .catch((err) => {
        return null;
      });
  },
};

export default contact;
