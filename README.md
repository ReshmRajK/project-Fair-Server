EXPRESS.JS - NODE JS FRAMEWORK
------------------------------
1.Create a folder for server.
2.npm init -y ->For create package.json file.
3.Update scripts in package .json file as "start:"node index.js" instead of "text".
4.Install external packages to build server.
    -express,cors,dotenv
    -npm i express,cors,dotenv
5.Create .env file to add environmental variable.    
6.Create .gitignore file to add filed to be ignored.
    -node_modules,.env  
7.Create index.js file.
    -import express,cors,dotenv
    -Create express server
    -Use cors in express server
    -set up port where we have to run server
    -Run the server to listen client request
    -To resolve http request using express
        -express server.http_request(path,callBack)
    -To setup independent routes for each request in express server
        -creates routes folder
            -inside routes folder create router.js file to define route/path for each request

8.To Run server app

------------------
MONGODB-DATA BASE
------------------
1.Data base are used to store and manipulate data permanently.
2.NOSQL data base: structureless DB.
3.Data stored as document - document oriented DB.
    -Document is similar as json.
4.Collection: Collection of documents.  
5.Multiple collections be hold in single db 

6.$lookup : Performs a left outer join to a collection in the same database to filter in documents from the "joined" collection for processing. 

  syntax :-

  {
   $lookup:
     {
       from: <collection to join>,
       localField: <field from the input documents>,
       foreignField: <field from the documents of the "from" collection>,
       as: <output array field>
     }
 }