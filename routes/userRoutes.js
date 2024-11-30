const express=require('express');
const router=express.Router();

const { 
    registerUser, 
    loginUser, 
    getAllAdmins 
  } = require('../controllers/userController');

const { 
    validate, 
    registerSchema, 
    loginSchema 
} = require('../middleware/validation');
const { 
    authMiddleware 
} = require('../middleware/auth');

router.post('/register', 
    validate(registerSchema), 
    registerUser
  );
  
router.post('/login', 
    validate(loginSchema), 
    loginUser
);
  
router.get('/admins', 
    authMiddleware, 
    getAllAdmins
);
  
module.exports = router;
