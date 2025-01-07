const coding = ["js","java","python","c++"]

const values = coding.filter( (code) => {
    //console.log(code);
    return code 
});
// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//aap jaha kahi bhi arrow function ka used kare vaha par agar aap scope ka used karte ho to return 
//likhan jaruri hai varna ap bina scope ke ek line mai likh sakte hai


const newNums = myNums.filter( (num) => {
    return num > 4
} )
// console.log(newNums);


const newNums1 = myNums.filter( (num) => num  > 4 )
// console.log(newNums1);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];




let gety = books.filter( (bk)=> {
    return bk.publish >= 1995 && bk.genre === 'History'
})
//console.log(gety);

///chainging method


const myNumers = [1,2,3,4,5,6,7,8,9,10]

const newNumers = myNumers
                        .map( (num) => num * 10 )
                        .map( (num) => num + 1 )
                        .filter( (num) => num >= 40 )


console.log(newNumers);



