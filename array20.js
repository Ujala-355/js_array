el = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var sum_odd_no=0;
var sum_even_no=0;
var count_even_no=0;
var count_odd_no=0;
var i=0;
do{
    if (el[i]%2===0){
        count_even_no+=1
        sum_even_no+=el[i]
    }
    else{
        count_odd_no+=1
        sum_odd_no+=el[i]
    }
    i++
}
while (i<el.length)
console.log(count_even_no);
console.log(count_odd_no);
console.log(sum_even_no);
console.log(sum_odd_no);
console.log((sum_even_no+sum_odd_no)/2)