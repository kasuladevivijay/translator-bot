import * as restify from 'restify';
import * as dotenv from 'dotenv-extended';
import { connector } from './bot';

dotenv.load();

class App {
    run() {
        const server = restify.createServer();
        server.post('/api/messages', connector.listen());
        server.listen(3978, () => {
            console.log(`${server.name} listening to ${server.url}`);
        })
    }
}

const app = new App();
app.run();