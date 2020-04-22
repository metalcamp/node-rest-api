import app from './app';
import Config from './config/Config';

const port = Config.port;
const env = Config.env;

const server = app.listen(port, () => {
    console.log("app is running on http://localhost:%d in %s mode",
        port,
        env,
    )
});

export default server;
