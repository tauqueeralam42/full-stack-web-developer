// if(!Array.prototype.myForEach){
//     Array.prototype.myForEach = function(userFun){
//         const orgArr = this;
//         for(let i = 0; i<orgArr.length; i++){
//             userFun(orgArr[i],i,this);
//         }
//     }
// }

// if(!Array.prototype.myMap){
//     Array.prototype.myMap = function(userFun){
//         const arr = [];
//         const orgArr = this;
//         for(let i = 0; i<orgArr.length; i++){
//             arr[i] = userFun(orgArr[i],i,this);
//         }
//         return arr;
//     }
// }

// if(!Array.prototype.myFilter){
//     Array.prototype.myFilter = function(userFun){
//         const ans = [];
//         for(let i = 0; i<this.length; i++){
//             if(userFun(this[i],i,this))
//                 ans.push(this[i]);
//         }
//         return ans;
//     }
// }


// const arr = [1,2,3];


//arr.myForEach((item,index,abc) => console.log(`Index ${index} : ${item} for Array : ${abc}`));

// let ans = arr.myMap((item) => (item*2));
// console.log(ans);

// let ans = arr.myFilter((e) => (e%2 != 0));
// console.log(ans);


// let obj1 = {
//     name : "Tauqueer",
//     age : 22,

//     getfullName : function(){
//         console.log(this.name)
//     }
// }

// let obj2 = {
//     name : "abc",
//     age : 20
// }


// class A {
  
//    constructor(a){
//     this.sbc = a
//    }
// }
// let a = new A(1);
// console.log(a.sbc);
// class B {
//     name = "B"
//     functionB = function(){
//      console.log("B");
//     }
//    prototype = A.prototype
//  }

//  let a = new A();
//let b = new B();

// let movieRatings = [
//     { name: "The Dark Knight", ratings: [9, 8, 9.5] },
//     { name: "Harry Potter", ratings: [7, 6, 7.5] },
//     { name: "The Lord of the Rings", ratings: [10, 9, 9.5] }
// ]

// let ratings = movieRatings.map((movie) => {
//     let total = movie.ratings.reduce((sum,rating) => sum+rating);
//     let avg = total / movie.ratings.length;
//    return {...movie, ratings:avg.toFixed(2)}
// })

// console.log(movieRatings);
// console.log(ratings);

// const user = {
//     name : "tauqueer",
//     age : 20,
//     password : 123
// }

// const proxyUser = new Proxy(user, {
//     get(target,prop){
//         if(prop == "password")
//             throw new Error("Access Denied");
//         return target[prop];
//     }
   
// });

// console.log(proxyUser.password);

let arr = [1,2,3,4];
let newArr = new Proxy(arr, {
    get(target,prop){
        if(prop < 0){
            return target[target.length+Number(prop)];
        }else{
            return target[prop];
        }
    }
});

console.log(newArr[-1]);
