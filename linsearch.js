const arr=[4,5,6,1]
let wannafind=5

function search(arr,obj){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===obj) return i
    }
   return -1
}

console.log("Object's index is",search(arr,wannafind))