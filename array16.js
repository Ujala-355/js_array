var l1 = [1,2,3,4,5,6];
var l2 = [2,3,1,0,6,7];
var l=[];
for(var i=0; i<l1.length; i++){
    if (!l2.includes(i)){
        l.push(i)   
    }
}
console.log(l)