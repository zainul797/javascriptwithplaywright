let str1='hello';
let str2='cared';
let count=0;
if(str1.length==str2.length)
{
    for(i=0;i<str1.length;i++)
    {
        for(j=0;j<str2.length;j++)
        {
            if(str1[i]==str2[j])
            {
                count++;
                break;
            }
        }
    }
    if(count==str1.length)
    {
        console.log("Given word is anagram")
    }
    else
    {
        console.log("Given word is not anagram")
    }
}
else
{
    console.log("given word is not anagram");
}