
# dialogflow-discord
---
_**An implementation discord bot using [Discord.js](https://discord.js.org/) and [Dialogflow](https://dialogflow.com/).
This project was use to bring the NPL features from dialogflow api to discord servers.**_

## Quickstart

### First Step

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Dialogflow API][enable_api].
1.  [Set up authentication with a service account][auth] then you get your auth json that i use as `key.json`
1.  [Discord Developer Portal][discord] so you can create your app and use your application token on `.env`


### Installation

The project requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and start the app.

```sh
$ cd dialogflow-discord
$ npm install
$ node .
```



##### Repo References:

* [discord.js](https://github.com/discordjs/discord.js/)
* [nodejs-dialogflow](https://github.com/googleapis/nodejs-dialogflow) 

[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dialogflow.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
[discord]: https://discord.com/developers/applications