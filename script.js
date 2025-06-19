// let a = 23;
// let b = prompt("guess the number");
// while(b != a){
//      b = prompt("guess the number agin");
// }
// console.lo

// let str2 = prompt("enter username");
// let res='@'+str2+str2.length;
// console.log(res);
// let m=[100,122,152,148,149];
// for(let i=0;i<m.length;i++){
//     m[i]=m[i]-(m[i] / 10);
//     console.log(m[i]);
// }
// console.log(m);
function vowel(a){
    let count=0;
    for(const char of a){
        if(char === "a" || char === "e" || char ==="i" || char ==="o"||char==="u"){
            count++;
        }
    }
    console.log(count);
}
const vow = (a)=>{
    let count=0;
    for(const char of a){
        if(char === "a" || char === "e" || char ==="i" || char ==="o"||char==="u"){
            count++;
        }
    }
    console.log(count);
}