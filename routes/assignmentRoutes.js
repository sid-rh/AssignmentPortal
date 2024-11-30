const express = require('express');
const router=express.Router();  

const { 
    uploadAssignment, 
    getAdminAssignments,
    processAssignment 
  } = require('../controllers/assignmentController');

const { 
    authMiddleware, 
    adminMiddleware 
} = require('../middleware/auth');

  
router.post('/upload', 
    authMiddleware, 
    uploadAssignment
);

router.get('/', 
    authMiddleware, 
    adminMiddleware, 
    getAdminAssignments
  );

router.post('/:id/accept', 
    authMiddleware, 
    adminMiddleware, 
    processAssignment
);

router.post('/:id/reject', 
    authMiddleware, 
    adminMiddleware, 
    processAssignment
);

module.exports = router;