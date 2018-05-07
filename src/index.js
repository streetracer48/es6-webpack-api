

let myfirstpromise = new Promise((resolve, reject) => 
{
    let name = 'miraz'
    setTimeout(() => {

        resolve(name)
        
    }, 100);
    
    

})

myfirstpromise

.then((name) => 
{
    console.log('this is :'+name);

}) 
