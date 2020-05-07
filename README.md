### TODO 
* implement [winston](https://github.com/winstonjs/winston) logger
* <del>implement client subscriber (client prints request body to console)</del>
* <del>support glob style pattern channel matching</del> 
* <del>implement publish worker (worker publishes messages published to channel to its subscribers)</del>
* implement tests
* refactor error mechanism
* implement BZPOPMAX and replace redis.publish with redis.zset to avoid sending duplicate messages

Commands: 
* yarn start - start server
* yarn start-rss - starts rss parser / publisher / worker
* yarn start-publish - starts publish worker / redis listener
 
