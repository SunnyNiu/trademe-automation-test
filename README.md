# TradeMe Automation Test 

TradeMe Sandbox web site: https://www.tmsandbox.co.nz/

TradeMe Sandbox API: https://developer.trademe.co.nz/api-reference/

Create test cases to verify three requirements below,
- Return how many named brands of used cars are available in the TradeMe UsedCars category.
- Check that the brand ‘Kia’ exists and return the current number of Kia cars listed.
- Check that the brand ‘Hispano Suiza’ does not exist.

## Project Setup
#### Install yarn and nvm
```
Yarn: https://classic.yarnpkg.com/en/docs/install/
nvm: https://github.com/nvm-sh/nvm#installing-and-updating
```
#### Install Node using nvm
```
nvm install 12
nvm use
```
#### Install node modules using yarn
```
yarn install
```

## Run tests
```
yarn test
```

## Linting & formatting
```
yarn lint
yarn prettify
```

## Dockerization
#### Build docker container
```
yarn docker:build
```

#### Run tests in docker container locally
```
yarn docker:run
```