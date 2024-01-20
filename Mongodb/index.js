// // // CRUD Operation

const mongoose= require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(()=>{
    console.log('Connection is successful')
})
.catch((err)=>{
    console.error("Coud not connect to mongodb",err)
});

// //schema

// const courseSchema= new mongoose.Schema({
//     name: String,
//     creator: String,
//     publishedDate: { type: Date, default: Date.now },
//     isPublished: Boolean,
//     rating: Number  
// })

// // create model

// const Course= mongoose.model('Course', courseSchema)

// async function createCourse(){
//     const course= new Course({
//         name: '100k coding challege',
//         creator: 'Brototype',
//         isPublished: false,
//         rating: 3.0
//     })
//     //save data into db

//     const result= await course.save()
//     console.log(result)
// }
// // // calling create function
// createCourse()




// // NoSQL query

// async function getCourses(){
//     const courses= await Course.find({creator:'Salaha'})
//     // .select({name:1, publishedDate:1})
//     .sort({name:-1}) //desc order
//     console.log(courses)
// }

// //Comparison operators
// async function getCourses(){
//     // const courses= await Course.find({rating: {$gte: 3.5}})
//     const courses= await Course.find({rating: {$in: [3,4]}})
//     .select({name:1, publishedDate:1})
//     console.log(courses)
// }

//Logical operator
async function getCourses(){
    const courses= await Course
    .find({rating: {$in: [4.5,3.5,5,3]}})
    .select({name:1, publishedDate:1})
    // .or([{creator: 'Salaha'},{rating:2}])
    // .or([{creator: 'Salaha'},{rating:4.5}])
    .and([{creator: 'Salaha'},{rating:4.5}])
    // .and([{creator: 'Salaha'},{rating:2}])
    console.log(courses)
}
// getCourses()



//Update document
async function updateCourse(id){
    let courses = await Course.findById(id)
    if(!courses) return;

    courses.name= 'C++'
    courses.creator= 'Nareshit'

    const updateCourse= await courses.save()
    console.log(updateCourse)
}
// updateCourse('65ac07aa32d477cbcd193f79')


//Delete Document

async function deleteCourse(id){
    let courses= await Course.findByIdAndDelete(id)
    console.log(courses)
}
// deleteCourse('65ac07aa32d477cbcd193f79')






// // //Data Validation
//schema

const courseSchema= new mongoose.Schema({
    name: {type: String, required:true, minlength:5, maxlength:200},
    tags: {type:Array, validate:{
        validator:function(tags){
            return tags.length>1
        }
    }},
    category:{type:String, required:true,enum:['DSA','WEb','Android','ML']},
    creator: {type: String, required:true},
    publishedDate: { type: Date, default: Date.now },
    isPublished: {type:Boolean, required:true},
    rating: {type:Number,required: function(){return this.isPublished}}  
})

// create model

const Course= mongoose.model('Course', courseSchema)
async function createCourse(){
    const courses= new Course({
        name: 'Mongodb', 
        tags: ['Express','Mongodb'], 
        category: 'DSA',
        creator:'Geeks',
        isPublished: true,
        rating: 4.6
    })

    try{
        // await courses.validate() //built in function
        const result= await courses.save()
        console.log(result)
    }catch(error){
        console.log(error)
        // for(field in error.errors){
        //     console.log(error.errors(field))
        // }
    }
}
createCourse()