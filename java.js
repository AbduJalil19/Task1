// function longestTime(a,b,c)
// {
//     if (((a*3600) >= (b * 60)) && (a*3600) >= c)
//     {
//         return a;
//     }
//     else if (((a*3600) <= (b * 60)) && (b*60) >= c)
//     {
//         return b;
//     }
//     else
//     {
//         return c;
//     }
// }
// let a = 1;
// let b = 59;
// let c = 3598;
// console.log(longestTime(a,b,c));


// function same(a)
// {
//     let first = Math.floor(a / 100);
//     let second = Math.floor(a / 10 % 10);
//     let third = a % 10;
//     if (first != second && first != third && second != third)
//     {
//         return "false";
//     }
//     else
//     {
//         return "true";
//     }
// }
// let a = 312;
// console.log(same(a));





// function largestSwap(a)
// {
//     let b = a % 10;
//     b *= 10;
//     b+=Math.floor(a/10);
//     if (a > b)
//     {
//         return "true";
//     }
//     else
//     {
//         return "false";
//     }
// }
// let a = 13;
// console.log(largestSwap(a));




// function addUp(a)
// {
//     a = a * (a + 1) / 2;
//     return a;
// }
// a = 13;
// console.log(addUp(a));





// function different(a,b,c)
// {
//     if (a == b)
//     {
//         return "3";
//     }
//     else if (b == c)
//     {
//         return "1";
//     }
//     else
//     {
//         return "2";
//     }
// }
// let a = 987;
// let b = 1;
// let c = 1;
// console.log(different(a,b,c));



// function evenNum(a,b)
// {
//     let sum = 0;
//     for (let i = a; i <= b; i++)
//     {
//         if (i % 2 == 0)
//         {
//             sum += i;
//         }
//     }
//     return sum;
// }
// let a = -5;
// let b = -3;
// console.log(evenNum(a,b));




// function sum(a,b)
// {
//     let sum = 0;
//     for (let i = 1; i <= a; i++)
//     {
//         sum += i * b;
//     }
//     return sum;
// }
// let a = 5;
// let b = 3;
// console.log(sum(a,b));



// function maxNum(a)
// {
//     let mx = 0;
//     while (a > 0)
//     {
//         b = a % 10;
//         a = Math.floor(a/10);
//         if (mx <= b)
//         {
//             mx = b;
//         }
//     }
//     return Math.floor(mx);
// }
// let a = 7132;
// console.log(maxNum(a));




// function isSymmetrical(a)
// {
//     //722 = a
//     //72 = b
//     let c = a;
//     let b = 0;
//     while (a > 0)
//     {
//         b+=a%10;
//         a=Math.floor(a/10);
//         b*=10;
//     }
//     b = Math.floor(b/10);
//     if (b == c)
//     {
//         return "true";
//     }
//     else
//     {
//         return "false";
//     }
// }
// let a = 222;
// console.log(isSymmetrical(a));



// function addDigits(a)
// {
//     while (true)
//     {
//         let c = 0;
//         while (a > 0)
//         {
//             b = a % 10;
//             a = Math.floor(a/10);
//             c += b;
//         }
//         if (c > 9)
//         {
//             a = c;
//         }
//         else
//         {
//             return Math.floor(c);
//         }
//     }
// }
// let a = 4999;
// console.log(addDigits(a));




// function isPrime(a)
// {
//     for (let i = 2; i <= a/2; i++)
//     {
//         if (a % i == 0)
//         {
//             return "false";
//         }
//     }
//     return "true";
// }
// let a = 7;
// console.log(isPrime(a));




// function factorial(a)
// {
//     let cnt = 1;
//     for (let i = 2; i <= a;i ++)
//     {
//         cnt *= i;
//     }
//     return cnt;
// }
// let a = 5;
// console.log(factorial(a));





// function sumOfDigit(a)
// {
//     a = a * (a + 1) / 2;
//     return a;
// } 
// let a = 12;
// console.log(sumOfDigit(a));




// function ariphmetic(a)
// {
//     let cnt = 0;
//     let sum = 0;
//     while (a > 0)
//     {
//        sum += a % 10;
//        a = Math.floor(a/10);
//        cnt ++ ; 
//     }
//     return sum / cnt;
// }
// let a = 2456;
// console.log(ariphmetic(a));;





function minOrMax(a)
{
    let b = 0,mn = 1e9,mx=-1e9;
    while (a > 0)
    {
        b = a %10;
        a = Math.floor(a/10);
        if (mx <= b)
        {
            mx = b;
        }
        if (mn >= b)
        {
            mn = b;
        }
    }
    return `mx: ${mx} mn: ${mn}`
}
let a = 5732;
console.log(minOrMax(a));;