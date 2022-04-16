var n = [10, 11, 12, 13, 14, 17, 18, 19];
var number =30;
var l=[];
for (i of n){
    for (j of n){
        if(i+j==number){
            l.push([i,j])
        }
    }
}
console.log(l)

