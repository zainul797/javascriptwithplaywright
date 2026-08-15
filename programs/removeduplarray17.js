let arr=[1,2,2,3,4,4,5];
array1=[];
for(let i=0;i<arr.length;i++)
{
    let count=0;
    for(let j=0;j<array1.length;j++)
    {
        if(arr[i]==array1[j])
        {
            count=1;
            break;
        }
    }
    if(count==0)
    {
        array1.push(arr[i]);
    }
}
console.log(array1)