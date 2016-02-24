var _ = require('lodash');
var validator = require('validator');
module.exports = {
    inputValidateAndSetConfig: function (program) {

        // Whoo this is my Lucky day, there are Credentials inside the ENV lets use them ^, yay!)
        if (process.env.OVH_DNS_APP_KEY) {
            program.applicationKey = process.env.OVH_DNS_APP_KEY;
        }

        if (process.env.OVH_DNS_APP_SECRET) {
            program.applicationSecret = process.env.OVH_DNS_APP_SECRET;
        }

        if (process.env.OVH_DNS_CONSUMER_KEY) {
            program.consumerKey = process.env.OVH_DNS_CONSUMER_KEY;
        }

        if (!program.applicationKey || !validator.isAlphanumeric(program.applicationKey)) {
            console.error("Application Key is missing or not a valid String [Client Side Invalid]");
            process.exit(1);
        }
        if (!program.applicationSecret || !validator.isAlphanumeric(program.applicationSecret)) {
            console.error("Application Secret is missing or not a valid String [Client Side Invalid]");
            process.exit(1);
        }
        if (!program.consumerKey || !validator.isAlphanumeric(program.consumerKey)) {
            console.error("Consumer Key is missing or not a valid String [Client Side Invalid]");
            process.exit(1);
        }
        if (!program.endpoint || !_.includes(['ovh-eu', 'ovh-ca'], program.endpoint)) {
            console.error("Endpoint is invalid, needs to be 'ovh-eu' or 'ovh-ca' [Client Side Invalid]");
            process.exit(1);
        }

        return {
            api: {
                key: program.applicationKey,
                secret: program.applicationSecret,
                endpoint: program.endpoint,
                consumerKey: program.consumerKey
            }
        }
    }
};