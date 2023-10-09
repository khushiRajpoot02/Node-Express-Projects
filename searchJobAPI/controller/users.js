const login = async (req, res)=>{
   res.send('user logged in');
}
const register = async(req, res)=>{
    // const {data} = req.body;
    console.log(req.body);
    res.status(200).json({data: req.body});
}
module.exports  = {login, register};
