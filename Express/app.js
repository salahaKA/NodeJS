const express= require('express')


const myMiddlewareFunction= require('./middlewares/middle')
const myMiddlewareFunction2= require('./middlewares/middle')
const app= express()

const morgan = require('morgan')

const courses= [
    {id:1, name:'JS'},
    {id:2, name:'C++'},
    {id:3, name:'Java'},
]
//get, post, put, delete

app.use(express.json())
app.use(myMiddlewareFunction);

app.use(myMiddlewareFunction2);

app.use(morgan)


app.get('/' ,(req, res)=>{
    res.send('Hello from Salaha')
}) //read

app.get('/about', (req, res)=>{
    res.send('We create Impact')
})


app.get('/contact', (req, res)=>{
    res.send('Contact us 9876543210')
})

app.get('/courses', (req,res)=>{
    res.send(courses)
})


app.post('/courses',(req,res)=>{
    const course={
        id: courses.length+1,
        name: req.body.name
    }
    
    course.push(course)
    res.send(course)
}) //create

//update using put methode

app.put('/courses/:cname', (req,res)=>{
    let course= courses.find(course =>course.name==req.params.cname)

    if(!course){
        res.status(404).send('<b>The course you are looking for does not exist<b>')
    }else{
        course.name= req.body.name
        res.send(course)
    }
    
})// update




// Route parameter

app.get('/courses/:cname', (req,res)=>{
    //res.send(req.params.id)
    console.log(req.params.cname)
    let course= courses.find(course =>course.name==req.params.cname)
    

    if(!course){
        res.status(404).send('<b>The course you are looking for does not exist<b>')
    }else{
        res.send(course)
    }
    
});

// app.delete('/courses/:cname', (req,res)=>{
//     let updateCourses= courses.filter(course=> course.name!== req.params.cname)
//     courses= updateCourses
//     res.send(courses)
// })


app.delete('/courses/:id', (req,res)=>{
    let course= courses.find(course=>course.id=== parseInt(req.params.id))
    if(!course){
        res.status(404).send('<b>The course you are looking for does not exist<b>')
    }else{
        const index= courses.indexOf(course)
        courses.splice(index, 1)

        res.send(course)
    }


})
const port= process.env.PORT || 3000

app.listen(port, ()=> console.log(`Port is running on ${port}`))

// app.put()
// app.post()