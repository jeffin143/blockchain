# Ethereum blockchain
Block chain

# Supporting Link
https://hackernoon.com/building-a-blockchain-dapp-using-truffle-react-next-js-and-mobx-part-i-c46d218f4bdf


https://www.packtpub.com/mapt/book/big_data_and_business_intelligence/9781787122147/8/ch08lvl1sec75/introduction-to-truffle

https://www.youtube.com/watch?v=YcTSilIfih0


## Download node.js msi for running npm packages


# Step For installing and setupping environment

## installing the environment (where we will run , compile and deploy our contract)
```
npm install truffle -g
```
## To setup our local testing space. This will give give us some local account(user) where we can test our blockchain's functionalty

```
npm install -g ethereumjs-testrpc
```

## To start with truffle project write the below command in CMD or Powershell for windows 10 (use powershell if CMD is not allowing the truffle.js/Module error )

inside project
```
truffle init
```
## Run testrpc in another powershell/CMD window
```
testrpc 
```


open project //inside a editor
make a new .sol file in contract folder
Write Your contract in solidity 

## compile it with

``` 
truffle compile
```
## Migrate it with


```
truffle migrate
```
## Use it with the truffle console
```
truffle console
```

## Sample Console to write in console
```
helloworl.deployed().then(function(instance){return instance.sayHello.call();}).then(function(result){console.log(result);});
```

