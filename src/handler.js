const path = require('path');
const fs = require('fs');
var request1 = require('request');
var url = require('url');
const queryString = require('querystring');

const getData=require('../queries/getData.js');
//const setData=require('../queries/setData.js');

//------------------------------------------------
const  homeHandler=(request,response)=>{
  const htmlPath =  path.join(__dirname, '../public/index.html')
  fs.readFile(htmlPath, (error, html) => {
      if(error){
         response.writeHead(500, {'content-Type': 'text/html'})
         response.end('<h1> Server error! sorry</h1>')
      }
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.end(html)
  });
}
//------------------------------------------------
const  publicHandler=(request,response)=>{
  const filePath =  path.join(__dirname, '..', request.url);
  const extention = request.url.split('.')[1];
  const contentTypeMapping = {
     'js': 'application/js',
     'css': 'text/css',
     'html': 'text/html',
     'jpg': 'image/jpg',
     'png': 'image/png',
     'ico': 'image/x-ico',
     'jpeg': 'image/jpeg'
     }
  if (contentTypeMapping[extention] === undefined) {
		     pageNotFoundHandler(request, response);
		       return;
  }

 fs.readFile(filePath, (error, file) => {
     if(error){
         response.writeHeader(500, {'content-Type': 'text/html'});
         response.end('<h1> Server error! sorry</h1>');
     }
     response.writeHead(200, {'content-Type': contentTypeMapping[extention]})
     response.end(file)
 })
}
//------------------------------------------------
const searchHandler=(request,response)=>{

  var { query }=url.parse(request.url);
  var {category}=queryString.parse(query);
  console.log(category);
  var {text}=queryString.parse(query);
console.log(text);
    getData(category,text,(err, res) => {
      if (err){
        response.writeHead(500, { 'Content-Type': 'plain/text' });
        response.end("Server Error");
      }
      else {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(res));
      }
    });
}
const addHandler=(request,response)=>{

}
//------------------------------------------------
const pageNotFoundHandler=(request,response)=>{
  response.writeHead(404, {'content-Type': 'text/html'})
  response.end('<h1>Page Not Found</h1>')
}

module.exports={
  homeHandler,
  publicHandler,
  searchHandler,
  addHandler,
  pageNotFoundHandler
};
