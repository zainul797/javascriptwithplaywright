let arr=[1,2,4,5,6,8,9,10,13,15,17,19,21,24]
let evennumber=[]
let oddnumber=[]
for(i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
        evennumber.push(arr[i]);
    }
    else
    {
        oddnumber.push(arr[i]);
    }
}
console.log(evennumber)
console.log(oddnumber)