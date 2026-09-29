let arr=[4,2,4,3,2,5,3];
for(i=0;i<arr.length;i++)
{
    let count=0;
    for(j=0;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        {
            count++;
        }
    }
    if(count==1)
  {
    console.log(arr[i]);
    break;
  }
}
