const notFound = (req, res)=>{
    res.status(500).send('rout does not exist');
}
module.exports = notFound;