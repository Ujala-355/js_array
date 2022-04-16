var el=[23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var odd_no=0;
var even_no=0;
for (var i of el){
    if (i%2===0){
        even_no+=1
    }
    else{
        odd_no+=1
    }
}
console.log(even_no,"even num")
console.log(odd_no,"odd num")