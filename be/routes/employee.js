const router = require('express').Router();
const Employee = require('../models/employee');
const bcrypt = require('bcryptjs');
const config = require('../config');

router.post("/",async(req, res, next) => {

  let employee = new Employee();
  employee.name = req.body.name;
  employee.email = req.body.email;
  employee.password = bcrypt.hashSync(req.body.password);
  employee.zone = req.body.zone;
  employee.role= req.body.role;
  employee.phone = req.body.phone;
  employee.image = employee.gravatar();
  employee.status = req.body.status;

  try {
    employee = await employee.save();
    if (!employee){
      return res.status(400).json({error: "Employee not found"});
    }
    res.json({success: true, message: "successfully",data:employee})
  } catch (error) {
    return res.status(400).json({
      success:false ,
      error: error,
      message: "Error saving employee"});
  }
})

module.exports= router;