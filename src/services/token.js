
const axios = require('axios');

// postToken
const postToken = async (dataPostToken) => {
  try {
    const { urlPostToken, authuser } = dataPostToken;
    return await axios.post(urlPostToken, { authuser })
  } catch (e) {
    console.log(e);
  }
};

// bearerToken
const bearerToken = async (dataBearerToken) => {
  try {
    const { urlBearerToken, token } = dataBearerToken;
    return await axios.post(urlBearerToken, {}, { "headers": { "Content-type": "application/json", "Authorization": `Bearer ${token}` } });
  } catch (e) {
    console.log(e);
  }
};

//Export methods
module.exports = { postToken, bearerToken };

