const Assignment = require('../models/Assignment');
const User = require('../models/User');

const uploadAssignment = async (req, res) => {
  try {
    const { task, adminId } = req.body;
    
    // Verify admin exists
    const admin = await User.findOne({ 
      _id: adminId, 
      role: 'admin' 
    });
    
    if (!admin) {
      return res.status(400).json({ error: 'Invalid admin selected' });
    }
    
    // Create assignment
    const assignment = new Assignment({
      userId: req.user._id,
      adminId: adminId,
      task: task,
      status: 'pending'
    });
    
    await assignment.save();
    
    res.status(201).json({ 
      message: 'Assignment uploaded successfully', 
      assignment 
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Assignment upload failed', 
      details: error.message 
    });
  }
};

const getAdminAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({ 
      adminId: req.user._id 
    }).populate('userId', 'username');
    
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch assignments', 
      details: error.message 
    });
  }
};

const processAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const { action } = req.body;
    
    // Validate action
    if (!['accepted', 'rejected'].includes(action)) {
      return res.status(400).json({ error: 'Invalid action' });
    }
    
    // Find and update assignment
    const assignment = await Assignment.findOneAndUpdate(
      { _id: id, adminId: req.user._id },
      { status: action },
      { new: true }
    );
    
    if (!assignment) {
      return res.status(404).json({ error: 'Assignment not found' });
    }
    
    res.json({ 
      message: `Assignment ${action} successfully`, 
      assignment 
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to process assignment', 
      details: error.message 
    });
  }
};

module.exports={uploadAssignment,getAdminAssignments,processAssignment};