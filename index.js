let express =require('express')
let app =express()
const cors=require('cors')
const jwt =require('jsonwebtoken')
const bodyParser=require('body-parser')
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
let {userDB} =require('./model/User')
let mongoose =require('mongoose')
mongoose.connect("mongodb+srv://mdsaleem516:a4dtNSbNPV1KOFHh@cluster0.npkfbjc.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log('conection established with mongodb server')).catch(err=>{
    console.log('error while connection',err)
})
app.listen(4000,()=>console.log('listening at port 5000'))
app.get('/',(req,res)=>res.send('welcome to our site'))
app.post('/register',async (req,res)=>{
    let userdata =new userDB({
        email:req.body.email,
        name:req.body.name
    })
    try{
    const message = await userdata.save()
    res.status(200).send("user saved succesfully")
 }
 catch(err){

 }
    
})
app.post('/login',async (req,res)=>{
    try{const search =await userDB.findOne({email:req.body.email,name:req.body.name})
    if(search!=null){
let token =jwt.sign({name:search.name,exp:Math.floor(Date.now()/1000)+(60*60)},'saleem')
        
res.status(200).send(token)}

else{
    res.status(404).send("user not found")
}
}
    catch(err){
res.status(400).send(err)
    }
})