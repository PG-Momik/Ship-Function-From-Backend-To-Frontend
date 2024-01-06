# Table of Content

1. [Summary](#summary)
2. [Requirements](#requirements)
    1. [NODE](#node)
    2. [NPM](#npm)
    3. [PHP](#php)
    4. [PYTHON](#python)
3. [Up and running](#up-and-running)
    1. [Change directory](#change-directory)
    2. [Install dependencies](#install-dependencies)
    3. [Start server](#start-server)
    4. [Run a client](#run-a-client)
4. [Conclusion](#conclusion)

---

# Summary

Here's a simple breakdown of the workflow this submodule encompasses.
1. There's a server with an endpoint `getFunction`. This endpoint takes one optional parma  `language` where `language` can be one of these: `[ php | python | js ]`.
2. The client can receive a function definition and other things necessary to create a function in aforementioned languages.
3. The `xyzClient.extension` are scripts in said languages, that make a `GET` request to `localhost:5000/getFunction?language=(xyz)`.
4. The use the return value to create a function and print the result.

---

# Requirements

> [!IMPORTANT]  
> Skip this section if you have any or all of the languages required for client script to run.

## NODE
Install nodejs.
```bash  
  sudo apt update  sudo apt install nodejs  
```  

## NPM
Node.js usually comes with npm (Node Package Manager). To ensure you have the latest version, you can update npm with the following command:
```bash  
  sudo npm install -g npm  
```  

## PHP
This installs the latest stable version of php.
```bash  
  sudo add-apt-repository ppa:ondrej/php  sudo apt update  sudo apt install php libapache2-mod-php php-mysql  
```  

## PYTHON
Install python3.
```bash  
    sudo apt install python3  
```  

---

# Up and running

## Change directory
You NEED to be inside the `FUNCTION_AS_STRING` directory.
```bash  
  cd FUNCTION_AS_STRING  
```  

## Install dependencies
```bash  
  npm i  
```  

## Start server
```bash  
  node server.js  
```  
This will serve the application at: [localhost:5000](http://localhost:5000).

## Run a client
Run a client script, ANY client.
1. For jsClient
    ```bash  
      node jsClient.js  
    ```
2. For phpClient  
    ```bash  
      php phpClient.js  
    ```
3. For pythonClient  
    ```bash  
      python3 pythonClient.py  
    ```

---

# Conclusion
Boom, what you've just experienced is a server sending function definition and a client executing that function in runtime.