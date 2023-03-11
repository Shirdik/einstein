

getBooks();
// get Request
async function getBooks() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://upadhayay.github.io/db.json");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let { books } = xhr.response;
            console.log(books);
            var div = document.getElementById("books");
            books.forEach((item) => {
                let { id, title, year } = item;
                let book = document.createElement("article");
                book.innerHTML = `
                <article id="${id}">
                    <div class="font-bold underline">${title}</div>
                    <div class="text-right italic opacity-70">${year}</div>
                </article>`
              div.appendChild(book);
            });
          }
        };
}

