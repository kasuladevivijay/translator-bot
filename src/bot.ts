import { IChatConnectorSettings, ChatConnector, UniversalBot } from 'botbuilder';

const settings: IChatConnectorSettings = {
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
};

const connector = new ChatConnector(settings);

const bot = new UniversalBot(connector, [])

export {
    connector
};