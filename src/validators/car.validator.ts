import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().min(1).max(20).pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        'string.pattern.base': 'Wrong brand name',
        'string.empty': 'Brand cant be empty',
        'string.max': 'Brand cant be more than 20 letters'
    }),
    year: Joi.number().min(1990).max(2024).required().messages({
        'number.min' : 'Year cant be less than 1990',
        'number.max' : 'Year cant be more than 2025'
    }),
    price: Joi.number().min(0).max(1_000_000).required().messages({
        'number.min' : 'Price cant be less than 0',
        'number.max' : 'Price cant be more than 1 000 000'
    }),
});