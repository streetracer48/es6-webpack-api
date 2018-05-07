class Person 
{
    constructor(project,name,email)
    {
        this.project = project
        this.name  = name
        this.email = email
        
    }

    print () 
    {
        console.log(`projects: ${this.project} Name :${this.name}, Email:${this.email}`)
    }

}

export default Person;