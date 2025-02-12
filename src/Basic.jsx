
import React from 'react'

const Basic = () => {

    const user = { name: "Alice", age: 25, country: "USA" }

const {name,age,country}=user
console.log(name,age,country)

const colors = ["red", "blue", "green"]; 

console.log(colors)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6]; 
const arr3 = [...arr1,...arr2]

console.log(arr3)

const obj1 = { a: 1, b: 2 }; 
const obj2 = {...obj1}

console.log(obj2)



  return (
    <div>Basic</div>
  )
}

export default Basic

