# Node-Express-Projects
for having data in req.body we use middleware 
    app.use(express.json());
=> Instance of a model is called document
=> Difference between PUT and PATCH method
   PUT: will replace the item, means will just pass the properties which we want to set in the item and rest of them will be removed
   Patch : we are just updating the properties that we are passing in
AsyncWrapper = > Refactor my code using asyncWrapper middleware
   wrap our controller into asyncWrapper, then after we do not have to write try and catch block again and again in every controller

Catching the erros in express(custom error handler) = > 
    it is used in asyncWrapper midleware inside next()
    const errorHandlerMiddleware = (err, req, res, next)=>{
    return res.status(400).json({msg : err});}
    module.exports = errorHandlerMiddleware;

Custome error requests which extendes from general js class= > for handling all our 404 custome errors
a cunstrocter method is a special method we invocked when we create new instance of the class