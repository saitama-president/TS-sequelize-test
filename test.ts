import * as SEQ from "sequelize-typescript";
import * as Models from "./models";

var v = new SEQ.Sequelize("sqlite:./test.db");



v.addModels([Models.Person,Models.N]);
v.sync({});



Models.Person.create({
  name: 'waz',
  birthday: '2000-01-02',
  ns:[
    {n:44},
    {n:45},
  ]
}).then(
  $p=>{
    console.log(`${$p.name}: ${$p.id}`);
    Models.N.create({
      n:144,
      person_id:$p.id
    });
  }
)
;



//p.save();



//Models.N.create({n: 5,person_id:p.id}),







console.log("OK");