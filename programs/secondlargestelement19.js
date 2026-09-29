let array=[10,20,30,40,30,50]
let secondlargest=array[0];
let largest=array[0];
for(i=1;i<array.length;i++)
{
    if(array[i]>largest)
    {
        secondlargest=largest;
        largest=array[i];
    }
    else if(array[i]>secondlargest && array[i]!=largest)
    {
        secondlargest=array[i];
    }
}
console.log(largest);
console.log(secondlargest);