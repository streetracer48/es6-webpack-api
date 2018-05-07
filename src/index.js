/* import * as math from  './math'; */
import {sum,sub} from './math';

/* console.log('this is module export import:',math.sub(23,21)); */
console.log('this is module export import:',sub(34,21));

import person from './person';
import student from './student';

let sti = new person('this is inheritance','miraz','mdmirajulkarim@gmail.com','354');

let pi = new person('this is class details es6','miraz,dhaka','wasifmiraz@gmail.com');

/* console.log('project name:',pi.project,'email',pi.email); */
pi.print();

sti.print();


// const a=10;
// const b=22;

// const sum=(a,b) =>  a+b;

// console.log(sum(a,b));

// const age=23

//THIS IS COMMENT TAMPLE STRING

// const name="  i am miraz from IT this is testing npm web server"
// const area="dhaka nikunja road number #2"
// const details=`
// name:${name}P
// age:${age}
// area:${area}
// `

// console.log(details);

//const print = (name) => 
//{
    

    //console.log('world this is one',name);
//}
//print('wasif miraz');

//const math = (a,b) => a+b

// console.log(math(2,29))

// const sqr = x => x*x
// console.log(sqr(10))


//this is comment lEXICAL THIS usess




//  const obj =
//  {
//      name: 'wasif miraz',
//      print : function()
//      {
//          //console.log(this);
//         //  setTimeout(function() {
//         //      console.log(this);
//         //  }.bind(this), 1000);
//         setTimeout(() => {
//             console.log(this.name);
            
//         }, 1000);

//      }

//  }
 

//  const obj2 =
//  {
//      name: 'wasif miraz',
//      print : function()
//      {
//          //console.log(this);
//         //  setTimeout(function() {
//         //      console.log(this);
//         //  }.bind(this), 1000);
//         setTimeout(function(){
//             console.log(this.name);
            
//         }, 1000);

//      }

//  }
 //obj.print();
// obj2.print();

//This is ARROW FUNCTION 
// const  print =() =>
 
// {
// console.log('this is arrow function one')    

// }

// const address = () =>
 
// {
//     console.log("dhaka nikunja #2 road #2")
// }

// const localaddress = name =>
 
// {
//     console.log('noakhali maijdee',name);

// }
// const collage = () => 
// {
//     console.log('feni computer institute feni')
// }

// print ();
// localaddress('user name : miraz');
// address();
// collage();
// const math = (a,b) => a+b
// console.log(math('this is arrow function use math: ',45,10))


//this is object

// let name ="wasif miraz"
// let email="wasifmiraz@gmail.com"
// const info = 
// {
//     name,
//     email,
//     print ()
//     {
//          console.log('user Name:',this.name,'user Email',this.email);
//         }

// }

// info.print();
// console.dir(info);

// this is array
// const arr=[3,4,5];

// let [a,,c]=arr;
// console.log(a);
// console.log(c);

// //let'screate object with distructarray

// const address = 
// {
//     name:'miraz',
//     email:'wasifmiraz@gmail.com',
//     home:'noakhali maijdee'
// }

// let {name,email,home}=address;
//  console.log('user name:',name,'user name:',email,'home:',home);

// function print({name, email})
// {
//     console.log(`name:${name},email:${email}`);

// }
// print({name,email});



/* THIS IS DEAFUALT PARAMETER

 let  parameter = (a=1,b=a) => a*b;
 console.log(parameter(10)); 
 console.log(parameter(10,5))

 let math = (a,b) => a+b;

console.log(math('the summation result is=',10,4)); 

END*/

 /* this is REST  operator 

 function sum (...num)
 {     console.log(num);

} */
/*  sum(12,45,32,334,556,34);

 let suma = (...num) => console.log(num) ;
 suma(45,56,56,45,45,4345,344,90);

 function sum(...num)
 {
  return num.reduce((a,b) => a+b);  }
 let all=sum(34,45,45,45,4,5,45,34);
 console.log(all); */
//END

/* SPREAD OPARETOR */

/* let arr=[34,45,34,23,23];

console.log(arr);

console.log(...arr) */;/* this is difference of rest vs spread operator */

var obj =
 {
     name:'miraz',
     email:'wasifmiraz@gmail.com',
     userpassword:'miraz0945'
    
}

var obj2 =
{
    ...obj,
    //overwrite
    name:'wasif miraz',
    postcode:2324,
    age:23

}
console.log(obj2);

 

