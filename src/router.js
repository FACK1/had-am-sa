const handlers = require('./handler.js');

//------Create Router-----------------------------------------------------------
const router = (request, response)=> {

//----Home Endpoint-------------------------------------------------------------
      if (request.url === '/') {
            handlers.homeHandler(request,response)
      }
    //-----Client Side Endpoint-------------------------------------------------
    else if (request.url.includes('/public/')) {
            handlers.publicHandler(request,response)
    }
    //-----Search Endpoint-----------------------------------------------------
    else if (request.url.includes('/search')) {
          handlers.searchHandler(request,response)
    }
    //-----add Endpoint-----------------------------------------------------
    else if (request.url.includes('/add')) {
          handlers.addHandler(request,response)
    }
    //-----Error Endpoint-------------------------------------------------------
    else {
          handlers.pageNotFoundHandler(request,response)
    }

    }
  module.exports = router
