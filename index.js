const express =require('express')
const cors = require('cors');
const jwt = require('jsonwebtkoen');
const {expressjwt: exjwt} = require('express-jwt')
const jwt_decode = require('jwt-decode')


const { MongoClient, ObjectId } = require('mongodb');
const app=express()
app.use(express.json());
app.use(cors());

secretkey = "abcd"
algorithm = "HS256"
const jwtmw = exjwt({
  secret: secretkey,
  algorithms: [algorithm]
})

const Client = new MongoClient('mongodb+srv://namburi:<rakesh>@cluster0.1sj5w0r.mongodb.net/?retryWrites=true&w=majority');
Client.connect();
const db = Client.db('skill');
const col = db.collection('user');
//col.insertOne({'student':"345"})
app.post('/register',(req,res)=>{
    col.insertOne(req.body)
    console.log(req.body)
    res.send("data inserted successfully")
})
app.get('/retrive', async (req, res) => {
    console.log(jwt_decode.jwtDecode(req.headers.authorization.substring(7)))
    const result =await  col.find().toArray()
    console.log(result)
    res.send(result)
})
app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    console.log(req.body)
    const user=await col.findOne({email});
    if(!user||!(password===user.password)){
        return res.status(401).json({message:'INvalid email or password'})
    }

    const token = jwt.sign(user, secretkey, {algorithm: algorithm, expiresIn: '1m' });
    res.json({username: username,token: token });
 
    res.json({username:user.name});
})


app.get('/',(req,res)=>{
res.send('<center><h1>hello rakesh</h1></center>')
})

app.get('/about',(req,res)=>{
    res.send('<center><h1>hello rakesh</h1></center>')
})
app.put('/users/:id', async (req,res)=>{ 
    const {id}= req.params 
    const {name, role, email, password}=req.body 
    const result= await col.updateOne({_id: new ObjectId(id)}, {$set:{name, role, email, password} }) 
    res.send('updated') 
})

app.delete('/users/:id',async (req,res)=>{
    const {id}=req.params
    const result= await col.deleteOne({_id:new ObjectId(id)})
    res.json({message:'deleted sucessfully'})
})

  
app.listen(8080,()=>{console.log('express server is running')})