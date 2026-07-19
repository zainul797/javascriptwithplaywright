let str="madama";
let reverse="";
for(let i=str.length-1;i>=0;i--)
{
    reverse=reverse+str[i];
}
if(reverse==str)
{
    console.log('it is a palindrome')

}
else
{
    console.log('it is not a palindrome')
}
