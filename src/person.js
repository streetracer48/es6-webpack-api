fetch('https://jsonplaceholder.typicode.com/users')

.then((response) => response.json())
.then((body) =>
 {
     const list = body.map(data =>
         {
let li = document.createElement('li')

let text = `Name :${data.name},Email: ${data.email}`

let textNode = document.createTextNode(text)

li.appendChild(textNode)

return li;
         })

         list.forEach((data) => {
document.getElementById('mylist').appendChild(data);


         });

 })

.catch((err) =>console.log(err));


/* class Person
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

export default Person; */