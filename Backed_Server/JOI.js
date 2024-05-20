const Joi = require("joi");

const signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).regex(/^(?=.*[!@#$%^&*(),.?":{}|<>])/).required(),
});



module.exports = { signupSchema };
