var url="http://mylogger.io/log";
function log (message)
{
    //sends a https req
    console.log(message);
}
function logoutt()
{
    
}

module.exports.log=log;
module.exports.logout=logoutt;