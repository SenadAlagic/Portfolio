import express, { json } from 'express';
const app=express();
const PORT='8080';

import sqlite3 from 'sqlite3';
const SQLite3=sqlite3.verbose();
const db=new SQLite3.Database('gallery.db')

app.use(json());

app.listen(
    PORT,
    ()=>console.log(`it's alive at http://localhost:${PORT}`)
)

app.get('/everyImage',(req,res)=>
{
    db.all("select * from Images",(err,rows)=>{
        if(err) return console.error(err.message);
        res.status(200).send({
            "rows":rows,
        })
    });    
});

app.get('/imageNumbers',(req,res)=>{
    db.all('select count(*) from Images',(err,rows)=>{
        if(err) return console.error(err.message);

        console.log(rows);
        res.status(200).send({rows})
    });
})

app.post('/addRandomImage',(req,res)=>{
    const{Id}=req.body;
    const{Image}=req.body;
    const{Description}=req.body;

    db.all(`insert into Images values (${Id},"${Image}","${Description}")`,(err,rows)=>{
        if(err) return console.error(err.message);

        console.log("Inserting succesfull");
    })
    // db.close((err)=>{
    //     if(err) return console.error(err.message);
    // })
    res.send({
        //result: `Succesfully added the image`
        result: `Succesfully added ${Id},${Image}${Description}`
    })
})
app.post('/addImage',(req,res)=>{
    const{Image}=req.body;
    const{Description}=req.body;
    let noRows=0;
    db.all('select count(*) from Images',(err,rows)=>{
        if(err) return console.error(err.message);

        console.log(rows);
        noRows=rows;
    });

    db.all(`insert into Images values (${noRows+2},"${Image}","${Description}")`,(err,rows)=>{
        if(err) return console.error(err.message);

        console.log("Inserting succesfull");
    });
})

/*--------------- TUTORIAL CODE ---------------*/
app.get('/tshirt',(req,res)=>
{
    res.status(200).send({
        tshirt:'majica',
        size:'large'
    })
});

app.post('/tshirt/:id',(req,res)=>{
    const{id}=req.params;
    const{logo}=req.body;

    if(!logo)
    {
        res.status(418).send({message:'We need a logo!'})
    }
    
    res.send({
        tshirt: `Shirt with your ${logo}`
    })
});
