
const axios = require('axios');

// URL de Api Rest
let restServerUrl = "https://apirest3hunters.herokuapp.com/users";


// Función que retorna la informacion de los usuarios (lista)
const getUsers = async () => {
  return await axios.get(`${restServerUrl}/getUsers`);
};
// createUser
const createUser = (req, res) => {
  const data = {
    name: req.body.name.trim(),
    age: req.body.age.trim(),
    city: req.body.city.trim()
  };
  if (Object.keys(data.name).length === 0 || Object.keys(data.age).length === 0 || Object.keys(data.city).length === 0) {
     console.log('Todos los coampos son requeridos');
  } else {
    console.log('Excelente ...');
    axios.post(`${restServerUrl}/createUser`, data).then((response) => {
    console.log('response: ', response);
    });
  }
};

//Export methods
module.exports = { getUsers, createUser };

