// function testNum(a) {
//     let result;
//     if(a>0) {
//         result='positive';
//     } else {
//       result='not positive';
//     }
//     return result;
// }
// console.log(testNum(2));


 //hour
 //If hour is between 6 am and 12pm:Good morning!
 //If it is between 12pm and 6pm :Good afternoon !
 //Otherwise:Good evening!

let hour=10;

if(hour>=6 && hour<12) {
    console.log('Good morning');
}
else if (hour>=12 && hour<18) {
    console.log('Good afternoon');
}
else
console.log('Good evening');


//SWITCH CASE 

 let role;
switch (role='moderator') {
    case 'guest':
    console.log('Guest User');
    break;
    case 'moderator':
    console.log('Moderate User');
    break;
    default:
        console.log('Unknown User');
}


if(role==='guest') console.log('Guest');
else if(role==='moderator') console.log('Moderator');
else console.log('Unknown User');