// let inputJudul = document.getElementById("inputBookTitle").value
// console.log(inputJudul)
let assembledBooks = []
document.addEventListener('submit', function (e) {
    e.preventDefault();
    // const inputArray = ['inputBookTitle', 'inputBookAuthor', 'inputBookYear', 'inputBookIsCom','inputBookIsComplete']
    // document.getElementById(inputArray[0]).value = '';
    // document.getElementById(inputArray[1]).value = '';
    // document.getElementById(inputArray[2]).value = '';
    // document.getElementById(inputArray[3]).value = '';
    //     document.getElementById(inputArray[4]).checked = true;
    addBooks()
    document.getElementById('inputBook').reset()
})

function addBooks() {
    const idArray= ['inputBookTitle', 'inputBookAuthor', 'inputBookYear', 'inputBookIsComplete']
    const title = document.getElementById(idArray[0]).value;
    const author = document.getElementById(idArray[1]).value;
    const year = document.getElementById(idArray[2]).value;
    const isCompleted = document.getElementById(idArray[3]).checked 
    
    const id = getId();

    const bookTobeAdd = generateBooksList(id, title, author, year, isCompleted)
    assembledBooks.push(bookTobeAdd)
    console.log(bookTobeAdd)
    // console.log(bookName)
    // console.log(bookAuthor)
    // console.log(bookYear)
    // console.log(check)
    // console.log(ID)
    
    // return bookTobeAdd
    

    // ? 'sudah dibaca' : "belum dibaca"
    if (isCompleted === true) {
        const textTitle = document.createElement('h3');
        textTitle.innerText = bookTobeAdd.title
        console.log(bookTobeAdd.title)
    
        const textAuthor = document.createElement('p')
        textAuthor.innerText = `Penulis: ${bookTobeAdd.author}`
    
        const textYear = document.createElement('p')
        textYear.innerText = `Tahun: ${bookTobeAdd.year}`
        
        const buttonGreen = document.createElement('button')
        buttonGreen.classList.add('green')
        buttonGreen.innerText='Selesai Dibaca'
        
        const buttonRed = document.createElement('button')
        buttonRed.classList.add('red')
        buttonRed.innerText='Hapus Buku'
        
        const buttonContainer = document.createElement('div')
        buttonContainer.classList.add('action')
        buttonContainer.append(buttonGreen,buttonRed)

        const textContainer = document.createElement('article')
        textContainer.classList.add('book_item')
        textContainer.append(textTitle,textAuthor,textYear,buttonContainer)
    
        const outerTextContainer = document.getElementById("completeBookshelfList")
        outerTextContainer.append(textContainer)

        buttonRed.addEventListener('click',function () {
            // textAuthor.innerText = null
            // textTitle.innerText = null
            // textYear.innerText = null
            textContainer.style.display = "none"
        })

        buttonGreen.addEventListener('click', function () {


            // textContainer.style.display = "none"
            const textTitle = document.createElement('h3');
            textTitle.innerText = bookTobeAdd.title
            console.log(bookTobeAdd.title)
    
        const textAuthor = document.createElement('p')
        textAuthor.innerText = `Penulis: ${bookTobeAdd.author}`
        
        const textYear = document.createElement('p')
        textYear.innerText = `Tahun: ${bookTobeAdd.year}`
    
        const textContainer1 = document.createElement('article')
        textContainer.classList.add('book_item')
        textContainer.append(textTitle,textAuthor,textYear)
    
        const outerTextContainer = document.getElementById("incompleteBookshelfList")
        outerTextContainer.append(textContainer1)

    })
    }

    else {
         const textTitle = document.createElement('h3');
        textTitle.innerText = bookTobeAdd.title
        console.log(bookTobeAdd.title)
    
        const textAuthor = document.createElement('p')
        textAuthor.innerText = `Penulis: ${bookTobeAdd.author}`
    
        const textYear = document.createElement('p')
        textYear.innerText = `Tahun: ${bookTobeAdd.year}`
    
        const textContainer = document.createElement('article')
        textContainer.classList.add('book_item')
        textContainer.append(textTitle,textAuthor,textYear)
    
        const outerTextContainer = document.getElementById("incompleteBookshelfList")
        outerTextContainer.append(textContainer)


    }
    
}

function getId() {
    return +new Date();
}

function generateBooksList(id,title, author, year, isCompleted) {
    return {
        id,title, author, year, isCompleted
    }
    
}
  


// let contohArray = [1, 2, 3, 4, 5]
// let contohArray2 = ['a', 'b', 'c', 'd']
// console.log(contohArray.push(contohArray2))
