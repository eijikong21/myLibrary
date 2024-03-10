const myLibrary = ["book1","book2"];
const btn=document.querySelector(".add");
const ul=document.querySelector(".books");
const confirmBtn=document.querySelector('#confirmBtn');
const dialog=document.querySelector('#dialog');
const output=document.querySelector('output');
const bookTitle=document.querySelector('#title');
const bookAuthor=document.querySelector('#Author');
const bookPage=document.querySelector('#Page');
const form=document.querySelector('form');
const cancelBtn=document.querySelector('#cancelBtn');
function Book(title,author,page) {
  // the constructor...
  this.title=title;
  this.author=author;
  this.page=page;
  this.sayName = function() {
    console.log(this.title)
  };
  myLibrary.push(`Book Title: ${this.title}, Author: ${this.author}, Page: ${this.page}`);

}

function addBookToLibrary() {
  // do stuff here
dialog.showModal();
}
cancelBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    dialog.close();
    form.reset();
})
btn.addEventListener('click',addBookToLibrary);
confirmBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    dialog.close();
    title=bookTitle.value;
    author=bookAuthor.value;
    page=bookPage.value;
const addBook = new Book(title,author,page);
addBook.sayName();
form.reset();
display();

})
//code below displays the books
function display(){
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
for(i=0;i<myLibrary.length;i++){
    const li=document.createElement("li");
    const newBtn = document.createElement('button');
    const readBtn = document.createElement('button');
    console.log(myLibrary[i]);
    li.textContent = myLibrary[i];
    ul.appendChild(li);
    li.appendChild(readBtn);
    readBtn.textContent='reading';
    readBtn.addEventListener('click',()=>{
        if(readBtn.textContent=='reading'){
            readBtn.textContent='finished reading';
        }
        else{
            readBtn.textContent='reading';
        }
        
    });
    li.appendChild(newBtn);
    newBtn.textContent="delete";
    newBtn.dataset.index = i;
    newBtn.addEventListener('click', function(){
        let index = parseInt(this.dataset.index, 10);
        myLibrary.splice(index, 1);
        ul.removeChild(li);
    });

   
}
}
display();

