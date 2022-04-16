var n=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var max=0;
var second_max=0;
var third_max=0;
for (let i=0; i<n.length; i++){
    if (n[i]>max){
        max=n[i]
    }
}
for (let j=0; j<n.length; j++){
    if (n[j]>second_max){
        if (n[j]<max){
            second_max=n[j]
        }
    }
for (let k=0; k<n.length; k++){
    if (n[k]>third_max){
        if (n[k]<second_max){
            third_max=n[k]
        }
    }
}

}
console.log(max,"max")
console.log(second_max,"second_max")
console.log(third_max,"third_max")