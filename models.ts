import * as SEQ from "sequelize-typescript"



@SEQ.Table
class Person extends SEQ.Model<Person> {

    @SEQ.AutoIncrement
    @SEQ.PrimaryKey
    @SEQ.Column
    id: number;

    @SEQ.Column
    a: number;



    @SEQ.Column
    name: string;

    @SEQ.Column
    birthday: Date;

    @SEQ.HasMany(() => N)
    ns: N[];
}

@SEQ.Table
class N extends SEQ.Model<N>{

    @SEQ.AutoIncrement
    @SEQ.PrimaryKey
    @SEQ.Column
    id: number;

    @SEQ.Column
    n: number;

    
    @SEQ.Column
    @SEQ.ForeignKey(() => Person)    
    person_id:number

    @SEQ.BelongsTo(() => Person)
    person:Person
}

export {
    Person,
    N
};  