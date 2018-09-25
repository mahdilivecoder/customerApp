const service=require('./service');
const session=require('./session');
module.exports={
    service,
    session,
    port:process.env.PORT || 3000
}