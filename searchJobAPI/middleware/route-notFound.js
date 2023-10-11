// const routeNotFound = async(req, res)=>{
//     res.status(500).send('Route not found');
// }
// module.exports = routeNotFound;
const notFound = (req, res) => res.status(404).send('Route does not exist')
module.exports = notFound
