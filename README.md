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
#Web3js Installation (please read full steps)

##Pre-required tools and installation
##### --download and install git
##### --installing web3 (please read full)
  While installing the web3 through npm command is
  ```
  npm install web3 -save
  ```
  it will clone a git repository git://github.com/frozeman/WebSocket-Node.git but it will throw a error 
  ```
  Cannot find git://github.com/frozeman/WebSocket-Node.git // or something like this
  ```
  This is happening cause the protocol used here is ``` git ``` which is not so effecient in this case to you have to force to replace     the protocol ```https``` instead of ```git``` .so to do that type the following command in the git bash terminal 
   ```
   git config --global url."https://".insteadOf git://
   ```
   ## now your git will use https to clone it 
##### --before installing the web 3 you need to install some more dependencies . Commands to install 
   ```
   npm install --global --production windows-build-tools
   ```
   it will take quite long time
##### --After this installation now install Web3 using commands
    ```
    npm install web3
    ```
 ## Step to procced working with web3 
  ##### --go to the directory where the web3 is installed
  ##### --Inside the node_module/Web3/
  ##### --If(there is a folder with names 'dist') that means its correctly installed
  ##### --Else download the web3 folder from https://codeload.github.com/ethereum/web3.js/zip/develop and replace it with the existing      Web3 folder
 ##### --Now it will work fine   
  
