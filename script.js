// const quotesData = [
//     {   
//         id:1,
//         quote:'“There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow.”',
//         author: '― Aaron Lauritsen'
//     },
//     {
//         id:2,
//         quote:'“Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free.”',
//         author: '― Jenny Valentine'
//     },
//     {
//         id:3,
//         quote:'“I freely admit I\'m confused. I\'m a confused and troubled individual but at the same time...Its Free! ”',
//         author: '― Craig Ferguson'
//     }
// ]
let quotes ={
    "― Craig Ferguson":'“I freely admit I\'m confused. I\'m a confused and troubled individual but at the same time...Its Free! ”',
    "― Jenny Valentine":'“Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free.”',
    "― Aaron Lauritsen":'“There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow.”'
}


function firstLoading(){
    document.getElementById("quote").innerText = quotes["― Craig Ferguson"];
    let authors = Object.keys(quotes);
    document.getElementById("author").innerText = authors[0] ;

}


function generate(){

    // let quotes ={
    //     "― Craig Ferguson":'“I freely admit I\'m confused. I\'m a confused and troubled individual but at the same time...Its Free! ”',
    //     "― Jenny Valentine":'“Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free.”',
    //     "― Aaron Lauritsen":'“There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow.”'
    // }

    let authors = Object.keys(quotes);
    console.log(authors)
    let author = authors[Math.floor(Math.random()*authors.length)]
    let quote = quotes[author];

    document.getElementById("author").innerText = author;
    document.getElementById("quote").innerText = quote;
}
