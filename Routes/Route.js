const express= require('express');
const Contact= require('../Model/ModelUser');
const { addUser, getAllUsers, deleteUser, updateUser, getOneUser } = require('../Controller/ControllerUser');
const router = express.Router();

router.post('/addUser', addUser )
// get all users
router.get('/allUser',getAllUsers)
//delete user
router.delete("/deleteUser/:id", deleteUser)
//update user
router.put('/updateUser/:id',updateUser)
// get one user
router.get('/getOneUser/:id', getOneUser)


module.exports=router
