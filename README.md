## `COGS-API-TDD`
This is a fork of the infamous boilerplate [koa2-ts-boilerplate](https://github.com/aitchkhan/koa2-ts-quickstart)
### Setup 

```bash
  # install all dependencies
  λ npm install #for linting and testing and hooks
  #Create a file development.secret in conf folder and paste:
  MYSQL_ROOT_PASSWORD=whatevermypassword

  # run the project
  λ docker-compose up --build
```
### Docker

`Dockerfile` for the project has been packaged.
`docker-compose` for running both mysql volume container and node.js container as well.



### Use cases:
- should throw error if user is inactive
- should be able to check-in
- should be marked as late when check-in time is greater than 10:00 AM
- should be marked as half day when check-in time is greater than 12:00 PM
- should be marked as half day when total logged time is less than 7 hours.
- should not be marked as late if logged time is 10 hours or greater