## Setup
Install dependencies 
```bash
yarn install
```

Start postgres and redis
```bash
sudo docker-compose up -d postgres redis
```

## Run
Start server 
```
yarn start
```

Start RSS parser / publish RSS content to channels 
```
yarn start-rss
```

Start publish worker / redis listener
```
yarn start-publish
```
 
## Tests
Run all tests 
```bash
yarn test
```

Run unit tests 
```bash
yarn unit
```

Run integration tests 
```bash
yarn integration
```

### TODO 
* <del>implement [winston](https://github.com/winstonjs/winston) logger</del>
* <del>implement client subscriber (client prints request body to console)</del>
* <del>support glob style pattern channel matching</del> 
* <del>implement publish worker (worker publishes messages published to channel to its subscribers)</del>
* <del>setup and configure jest with ts-jest</del>
* implement tests
* refactor error mechanism
* implement BZPOPMAX and replace redis.publish with redis.zset to avoid sending duplicate messages
