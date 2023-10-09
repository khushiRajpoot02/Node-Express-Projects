const routeNotFound = async(req, res)=>{
    res.status(500).send('Route not found');
}
module.exports = routeNotFound;