const arr=[
    {index:21,userName:'John Duo',age:44,occupation:'plumber'},
    {index:12,userName:'Ernest Hemingway',age:34,occupation:'writer'},
    {index:47,userName:'Akyla Kryt',age:14,occupation:'mr.komputershuk'}
]
let wannafind=arr[2]

function search(arr,obj){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===obj) return i
    }
   return -1
}

console.log("Object's index is",search(arr,wannafind))