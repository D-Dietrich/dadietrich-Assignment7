//Daniel Dietrich - Assignment 7 - INF 651
//Note: After each answer, there is a line of code to test the answer. 
//      These tests can be seen by running the .html file.


// 1) Define a function named getTheTable that returns the table
// element in the HTML document that has the id "myTable".
function getTheTable() {
    return document.getElementById("myTable");
}
console.log(getTheTable()); //Tests Question #1

// 2) Define a function named getAllParagraphs that returns a
// NodeList containing all paragraph nodes inside the "myPage"
// section element of the HTML document.
function getAllParagraphs() {
    return document.getElementById("myPage").querySelectorAll("p");
}
console.log(getAllParagraphs());//Tests Question #2

// 3) Define a function named makeItalic.
// The function should change the CSS style of
// the paragraph elements with the class "even"
// to have italicized text. The function should
// return a NodeList containing the paragraphs
// that were changed to italics.
/////////////
// Hint: You will need a loop.
// Also reference CSS in JavaScript.
function makeItalic() {
    let list = document.getElementsByClassName("even");
    for(let i = 0; i < list.length; i++){
        list[i].style.fontStyle = "italic";
    }
    return list;
}
console.log(makeItalic());//Tests Question #3

// 4) Define a function named createBorders that selects
// the table inside the "myPage" section. The function
// should add a CSS border to the table cells that is
// 2 pixels thick and solid black (use #000 for black).
// The function should also return the table element.
////////////
// Hint: You can build a selector from the result
// of another selector.
function createBorders() {
    let q4list = document.getElementById("myPage").querySelector("table");
    let q4list2 = q4list.querySelectorAll("td");
    console.log(q4list2);
    for(let i = 0; i < q4list2.length; i++){
        q4list2[i].style.border = "solid 2px #000";
    }
    return q4list;
}
console.log(createBorders());//Tests Question #4

// 5) Define a function named getTheListItem that accepts two
// number parameters. The first parameter (num1) is the number of
// the unordered list in the document. The second parameter (num2)
// is the number of the list item in the unordered list.
// The function should return the text content of the
// requested list item.
/////////////////////////
// For example: getTheListItem(2,2) should return
// second list item of the second unordered list inside the
// "myPage" section element of the HTML document.
////////////////////////
// Hint: MDN for nth-of-type and nth-child selectors
function getTheListItem(num1, num2) {
    let ulIndex = num1-1;
    let liIndex = num2-1;
    let q5UlList = document.querySelectorAll("ul");
    let q5LiList = q5UlList[ulIndex].querySelectorAll("li");
    return q5LiList[liIndex].textContent;
}
console.log(getTheListItem(2,2));//Tests Question #5

// 6) Define a function named changeBgColor that changes the
// background color of the "myPage" section. The function
// should accept one parameter named "color" that will be
// the color the function changes the background to.
// The function should return the "myPage" section element.
function changeBgColor(color) {
    let q6val = document.getElementById("myPage");
    q6val.style.backgroundColor = color;
    return q6val;
}

console.log(changeBgColor("#FFA500"));//Tests Question #6 