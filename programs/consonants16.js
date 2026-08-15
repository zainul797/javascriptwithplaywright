
// let str='Javascript';
// let str1= 'aeiou';
// let count=0;
// for(i=0;i<str.length;i++)
// {
// str=str.toLowerCase();

//     if(str[i]>='a' && str[i]<='z' &&
//         str[i]!=str1[0] 
//         && str[i]!= str1[1] && str[i]!= str1[2] && str[i]!= str1[3] && str[i]!= str1[4])
//     {
//         count++;
//     }
// }
// console.log(count)
//
function consonants(str)
{
    let str1='aeiou';
    let count=0;
    for(let i=0;i<str.length;i++)
{
    if(str[i]>='a' && str[i]<='z' &&
        str[i]!=str1[0] 
        && str[i]!= str1[1] && str[i]!= str1[2] && str[i]!= str1[3] && str[i]!= str1[4])
    {
        count++;
    }
}
return count;
}
let result=consonants('zainul');
console.log(result);