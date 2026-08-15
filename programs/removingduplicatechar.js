let str='aabbccdde'
let str1=''
for(let i=0;i<str.length;i++)
{
        let count=0;

for(j=0;j<str1.length;j++)
{
    if(str[i]==str1[j])
    {
        count=1;
        break;
    }
    
}
if(count==0)
{
    str1=str1+str[i];
}

}
        console.log(str1);
