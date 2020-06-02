const express =require('express');
const bodyParser =require('body-parser');
const cors =require('cors');
const app =express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const db = require("./app/models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.get("/",(req,res) =>{
  res.json({message:"Welcome to To-do Application"});
});


require("./app/routes/todo.routes")(app);

const PORT =process.env.PORT || 3000;
app.listen(PORT ,()=>{
  console.log(`Server is running on port ${PORT}`)
});
