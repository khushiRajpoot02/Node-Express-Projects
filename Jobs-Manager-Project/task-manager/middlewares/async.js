const asyncWrapper = (fun)=>{
  return async (req, res, next)=>{
      // await fun(req, res, next);
       try{
        await fun(req, res, next);
       }catch(err){
          next(err);
       }
  }
}
module.exports = asyncWrapper;
/*
const asyncWrapper = (fun)=>{
  return async fun(req, res,  next)=>{
    try{
    await fun(req, res, next);
    }catch(err)=>{
      next(err);
    }
  }
}





  */