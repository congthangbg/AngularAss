const bcrypt = require('bcryptjs/dist/bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({

  name: String,
  password: String,
  email: { type:String, unique: true},
  zone: String,
  image: String,
  phone: String,
  enrollDate :{type:Date, default:Date.now()},
  status: {type:String, default:"Working"},
  role:{type:String, default:"Employee"}

})

EmployeeSchema.methods.gravatar = function(size){
  if(!this.size) size =200;
  if(!this.email){
    return "https://www.gravatar.com/avatar/?s"+ size +"&d=retro";
  }else{
  var md5 = bcrypt.hashSync(this.email,10);
  return `https://www.gravatar.com/avatar/` + md5+"?s" + size+"&d=retro";
  }
}
module.exports = mongoose.model("Employee",EmployeeSchema);