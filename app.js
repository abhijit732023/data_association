const a= require('express')
const app = a()

const usermodoel=require('./usermodel')

const postmodel=require('./postmodel')

app.get('/',(req,res)=>{
    res.send('hello')

})

app.get('/create',async (req,res)=>{
    const user=await usermodoel.create({
        name:'john',
        email:'john@gmail.com', 
        age:'10'
    })
    res.send(user)

})

// app.get('/post/create',async(req,res)=>{
//     const post=await postmodel.create({
//         postdata:"hello guys",
//         userID:'678ff9dda5b26ab8dbdf5036'
       

//     })
//     const userget= await usermodoel.findOne({_id:'678ff9dda5b26ab8dbdf5036'})
//     res.send(userget)

// })

app.get('/post/create',async(req,res)=>{
   const post=await postmodel.create({
        postdata:"hello guys",
        userID:'678ff9dda5b26ab8dbdf5036'
    })
    const userget= await usermodoel.findOne({_id:'678ff9dda5b26ab8dbdf5036'})
    if(userget){ 
        userget.posts.push(post._id)
        await userget.save()

    }
    res.send({post,userget})
})

app.listen(3000)