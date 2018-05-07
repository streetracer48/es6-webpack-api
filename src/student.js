import Person from "./person";

class student extends Person
{
    constructor(name,email,id)
    { 
        super(name,email),
        this.id = id
    
    }

    print () 
    {
        super.print(),
        console.log(`ID: ${this.id}`);
    }

}
export default student;