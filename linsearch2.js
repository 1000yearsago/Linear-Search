const arr = [[1,2,11],[655,33,99],[1,1,5],[3,9,62]]
let wannafind=2

function search(arr, obj){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]===obj) return {i,j}
        }
    }
    return -1
  }

console.log("Object's index is",search(arr,wannafind))