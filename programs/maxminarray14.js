let arr=[10,30,20,1,2,3];
let maxnumber=arr[0];
let minnumber=arr[0];

for(i=1;i<arr.length;i++)
{
    if(arr[i]>maxnumber)
    {
        maxnumber=arr[i];
    }
    if(arr[i]<minnumber)
    {
        minnumber=arr[i];
    }
}
console.log(maxnumber);
console.log(minnumber);
// let a=110;
// if(a>100)
// {
//     console.log('nammaqa')
// }
//  else if(a<120)
// {
//     console.log('wizzybox')
// }
