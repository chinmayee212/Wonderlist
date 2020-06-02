module.exports =(sequelize,Sequelize) =>{
  const Todo =sequelize.define("todo",{
    title:{
      type:Sequelize.STRING
    },
    description:{
      type:Sequelize.TEXT
    },
    status:{
      type:Sequelize.BOOLEAN
    },
    duedate:{
      type:Sequelize.DATE
    },
    label:{
      type:Sequelize.STRING
    }
  });
  return Todo;
}



