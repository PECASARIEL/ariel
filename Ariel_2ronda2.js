function multiple(valor, multiple)
{
    resto = valor % multiple;
    if(resto==0)
        return true;
    else
        return false;
}


var multiples_3=[];
var multiples_5=[];


for(var i=1;i<=100;i++)
{
    if(multiple(i,3))
        multiples_3.push(i);

    if(multiple(i,5))
        multiples_5.push(i);
}
console.log("Los multiplos de 3 son: ",multiples_3);
console.log("<br>Los multiplos de 5 son: ",multiples_5);