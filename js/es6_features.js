console.log('new features of js')
console.log('this is second line')

const sum=(x=1,y=2)=>x+y
console.log(sum(2,3));
console.log(sum())

const myArr = [25,30]
let [x,y]=myArr
console.log(x);
console.log(y);

//object destructing

const ob={
    name:'javascript',
    dbName: 'mongodb'
}
let{name,dbName}=ob
console.log(name)
console.log(dbName)


let myarr=[22,5,1234,6,7]
let[a,b,...rest]=myarr
console.log(a);
console.log(b);
console.log(rest);

let name1='abc',city='hyd'
let active='Sravni'

let student={
    name1,city,[active]:true,
    display(){
        console.log(this.name1)
        console.log(this.city)
    }
}

console.log(student);
student.display()

function createObject(a,b,c){
    return {a,b,c}
}

let obj=createObject(2,4,5)
console.log(obj);

let prom = new Promise((resolve,reject)=>{
    let flag=true
    setTimeout(()=>{
        if(flag){
            resolve()
        }
        else{
            reject()
        }
    },5000)
})

console.log('First line after creating promise');
console.log('second line after creating promise');
console.log('third line after creating promise');
console.log('Fourth line after creating promise');
console.log('Fifth line after creating promise');

prom.then(()=>{
    console.log('promise is resolved')
}).catch(()=>{
    console.log('promise id rejected')
})


//spread operator

const person={
    firstName: 'John',
    lastName: 'Doe'
}

console.log(person)
person.firstName='abc'

console.log(person)

const obj1={...'test',...10,...true}
console.log(obj1)

const arr=[1,2,3,4]
const obj2={...arr}
console.log(obj2)

const dateArr=[2023,9,31]
let d=new Date(...dateArr)
console.log(d)

const parts=['shoulder','knees'];
const lyrics=['head',...parts,'and','toes'];
console.log(lyrics)

const arr_1=[1,2,3];
const arr2=[...arr_1]
console.log(arr2)
arr2.push(4)
console.log(arr_1)
console.log(arr2)


const a1=[[1],[2],[3]];
const b1=[...a1];
console.log(b1)

b1.shift()
console.log(b1)
console.log(a1)

const obj5 = { foo: "bar", x: 42 };
const obj6 = { bar: "baz", y: 13 };

const mergedObj = { ...obj5, ...obj6 };

console.log(mergedObj)

const obj21 = { foo: "bar", x: 42 };
const obj22 = { foo: "baz", y: 13 };

const mergedObj1 = { x: 41, ...obj21, ...obj22, y: 9 };

console.log(mergedObj1)

const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer ? { watermelon: 30 } : {}),
};
console.log(fruits);
