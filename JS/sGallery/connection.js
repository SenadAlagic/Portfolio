import sqlite3 from 'sqlite3';
const SQLite3=sqlite3.verbose();
const db=new SQLite3.Database('gallery.db')

// const express=require('express');
// import express from 'express';
// const app=express();
// const PORT='8080';

// app.use(express.json());
// app.listen(
//     PORT,
//     ()=>console.log(`it's alive at http://localhost:${PORT}`)
// )

// const query = (command, method = 'all') => 
// {
//     return new Promise((resolve, reject) => 
//     {
//         db[method](command, (error, result) => 
//         {
//             if (error) 
//             {
//                 reject(error);
//             } 
//             else 
//             {
//                 resolve(result);
//             }
//         });
//     });
// };

db.all("select * from Images",[],(err,rows)=>{
    if(err) return console.error(err.message);

    rows.forEach((row)=>{
        console.log(row);
    });
});
// db.all("insert into Images values (2,234, 'neki opis')",[],(err,rows)=>{
//     if(err) return console.error(err.message);
// })


db.close((err)=>{
    if(err) return console.error(err.message);
})