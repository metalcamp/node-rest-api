import Joi from "@hapi/joi";

export const subscribeToChannelSchema = Joi.object({
    subscriberURL: Joi.string().min(3).max(255).uri().required(),
});

export const unsubscribeFromChannelSchema = Joi.object({
    subscriberURL: Joi.string().min(3).max(255).uri().required(),
});
