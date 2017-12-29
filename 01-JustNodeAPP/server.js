var http=require('http');
function OnRequest(request,response)
{
  response.writeHead('200' , {'ContentType' : 'text/html'});
  response.write('<html><h1>helloooo</h1></html>')
  response.end();
}
http.createServer(OnRequest).listen(8000);
