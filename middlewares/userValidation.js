const Joi = require('joi');

const userSchema = Joi.object().keys({
    username: Joi.string().required()
}).unknown(true);

const scoreSchema = Joi.object().keys({
    score: Joi.number().required()
}).unknown(true);

const validate = (param) => {
    return (req, res, next) => {
        let result;
        if (param === "user"){
            result = userSchema.validate(req.body)
        }else if(param === "score"){
            result = scoreSchema.validate(req.body)
        }else
            return res.status(400).json({code: 400, message: 'param eror'})

        if (result.error) {
            return res.status(400).json({code: 400, message: 'Invalid Input', error: result.error.details})
        }
        next();
    }
}

module.exports = {validate}