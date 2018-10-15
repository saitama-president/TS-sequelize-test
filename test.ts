import * as SEQ from "sequelize-typescript";
import * as Models from "./models";

var v = new SEQ.Sequelize("sqlite:./test.db");
v.addModels([Models.Person, Models.N]);

v.sync({})
  .then(
    () => {
      return Models.Person.create({
        name: 'waz',
        birthday: '2000-01-02',
      })
        ;
    }
  )
  .then(
    $p => Models.N.create({
      n: 144,
      person_id: $p.id
    })
  )
  .then(
    $n => Models.N.create({
      n: 145,
      person_id: $n.person_id
    })
  )
  .then(
    $n => Models.N.create({
      n: 146,
      person_id: $n.person_id
    })
  )
  .then(
    $n => {

      var $o = Models.Person.findById(1)
        .then(
          $r => {
            console.dir($r.ns);
            $r.ns.forEach(
              $n => console.log(`PID= ${$r.id} CID=${$n.id}`)
            )
            console.log()
          }
        )
    }
  )








//p.save();
//Models.N.create({n: 5,person_id:p.id}),
console.log("OK");