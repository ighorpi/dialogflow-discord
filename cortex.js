const serviceAccount = require('./key.json')
const dialogflow = require('@google-cloud/dialogflow');
module.exports.cortex = async (message, sessionId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const sessionClient = new dialogflow.SessionsClient({credentials: serviceAccount});
            const sessionPath = sessionClient.projectAgentSessionPath('alabassistent', sessionId);
          
            const request = {
              session: sessionPath,
              queryInput: {
                text: {
                  text: message,
                  languageCode: 'en-US',
                },
              },
            };
            
            const responses = await sessionClient.detectIntent(request);

            const result = responses[0].queryResult.fulfillmentText;
            resolve(result)
        }catch(e) {
            console.log(e)
            return reject('uwu')
        }
    })
}