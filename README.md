<p with=200 align="center">
  <img src="https://cdn-icons.flaticon.com/png/512/1183/premium/1183701.png?token=exp=1639330988~hmac=ec4475869df0e10993ff66de53b7c8fa" />
</p>


# <a name='TOC'>🐼 Summary</a>

* [Description](#Description)
* [Install](#Install)
* [Usage](#Usage)
* [Credits](#credits)

## <a name='Description'>🐱 Description</a>
FTP server and client more or less rfc compliant

## <a name='Install'>🐨 Install</a>
* run `npm install` in client and server directory to install dependencies
* run `npm build` in server directory to build server the builded source code is in server/.dist/
* run `npm build` in client directory to build client the builded source code is in  client/.dist/

## <a name='Usage'>🦄 Usage</a>
* go in server/.dist and run `node main.js <port>` then the server will run
* go in client/.dist and run `node main.js <host> <port>` then the client will run

#### Commands

The client handle the following commands:

* `USER <username>`: check if the user exist
* `PASS <password>`: authenticate the user with a password
* `LIST`: list the current directory of the server
* `CWD <directory>`: change the current directory of the server
* `RETR <filename>`: transfer a copy of the file _FILE_ from the server to the client
* `STOR <filename>`: transfer a copy of the file _FILE_ from the client to the server
* `PWD`: display the name of the current directory of the server
* `HELP`: send helpful information to the client
* `QUIT`: close the connection and stop the program
* `lcd <directory>`: Change the current working directory on the local host
* `lpwd`: Display the name of the current working directory on the local host
* `lls`: Lists working directory on the local host
* `MGET <...files>`: copies multiple files from the remote system
* `MPUT <...files>`: copies multiple files to the remote system
   # Server and client are case sensitive
  
## <a name='credits'>🐵 Credits</a>
Realize with heart: by kingm77 as part of a project at Efrei in ** Paris **.







