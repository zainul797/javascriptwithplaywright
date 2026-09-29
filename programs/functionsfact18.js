function fact(num)
{
    let fact=1;
    for(let i=1;i<=num;i++)
    {
        fact=fact*i;
    }
    return fact;
}
console.log(fact(5));
console.log(fact(10));
