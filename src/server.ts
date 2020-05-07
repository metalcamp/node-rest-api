import {App} from './app';

export class Server {
    start() {
        const app = new App();
        return app.listen();
    }
}
