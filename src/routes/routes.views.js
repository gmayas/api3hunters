const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('./../services/users');
const { postToken, bearerToken } = require('./../services/token');
//
router.get('/', async (req, res) => {
  res.render('index');
});
//
router.get('/newUser', async (req, res) => {
  res.render('newuser');
});

router.get('/ejercicio01', async (req, res) => {
 let dataPostToken = {  urlPostToken: "https://atlantia-dev-test.herokuapp.com/api/auth",
                        authuser: "Pm7EMK6Cfp9gn568" }
  const tokenRes = await postToken(dataPostToken);
  const token = tokenRes.data.token;
  let dataBearerToken= {  urlBearerToken: "https://atlantia-dev-test.herokuapp.com/api/profile", token };
  const bearerTokenRes = await bearerToken(dataBearerToken);
  const superSecret =  bearerTokenRes.data.SuperSecret;
  res.render('ejercicio01', { urlPostToken: dataPostToken.urlPostToken, authuser: dataPostToken.authuser, Token: token, urlBearerToken: dataBearerToken.urlBearerToken, superSecret } );
});
//
router.get('/ejercicio02', async (req, res) => {
  let dataRes = await getUsers();
  res.render('ejercicio02', { dataUsers: JSON.parse(JSON.stringify(dataRes.data.users)) });
});
//
router.post('/saveUser', createUser);
//
module.exports = router;