class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}

class UI {
    addBookToList(book){
      const list = document.getElementById('book-list');
      const row = document.createElement('tr');

      row.innerHTML=`
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X<a></td>
      `;
      list.appendChild(row);
    }

    showAlert(message, className){
      const div = document.createElement('div')

      div.className = `alert ${className}`;
      div.appendChild(document.createTextNode(message));

      const container = document.querySelector('.container')
      const form = document.querySelector('#book-form');

      container.insertBefore(div,form);
      setTimeout(function(){
        document.querySelector('.alert').remove();

      }, 3000);
    }

    deleteBook(target) {
      if(target.className=== 'delete'){
        target.parentElement.parentElement.remove();
      }

    }

    clearFields(){
      document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

    }

}



//event listeners

document.getElementById('book-form').addEventListener('submit', function(e){
    //get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value 

    const book = new Book(title, author, isbn);

    const ui = new UI();

      // Validate
  if(title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Show success
    ui.showAlert('Book Added!', 'success');
  
    // Clear fields
    ui.clearFields();
  }

e.preventDefault();
})

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

    // Instantiate UI
    const ui = new UI();
  
    // Delete book
    ui.deleteBook(e.target);
  
    // Show message
    ui.showAlert('Book Removed!', 'success');
  
    e.preventDefault();
  });