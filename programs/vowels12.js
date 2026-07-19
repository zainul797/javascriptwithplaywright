let str='abideen';
let str1= 'aeiou';
let count=0;
for(i=0;i<str.length;i++)
{
    if(str[i]==str1[0] 
        ||str[i]== str1[1] || str[i]== str1[2] || str[i]== str1[3] ||str[i]== str1[4])
    {
        count++;
    }
}
console.log(count)
