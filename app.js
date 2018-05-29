// listen for form submit

document.getElementById('myForm').addEventListener('submit',saveBookmark)

function saveBookmark(e){
    var siteName = document.getElementById('siteName').value
    var siteUrl = document.getElementById('siteUrl').value

    var bookmark={
        name : siteName,
        url : siteUrl
    }

    //local Storage Test
    
    //localStorage.setItem('itemsName','ItemsValue')//test is name and value is hello world --> you can chack local storage by go ining chrome developer tools --> application --> localStorage
    //console.log(localStorage.getItem('test'))
    //localStorage.removeItem('test')//removes the item

    //---------------------------------------------------------------------
    if(localStorage.getItem('bookmarks')===null){
        var bookmarks = []

        bookmarks.push(bookmark)

        // saves bookmark in the local storage as an JSON object
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    }else{
        //get bookmarks from localStorage
        var boomarks = JSON.parse(localStorage.getItem('bookmarks'))//JSON.parse turns string into json and stringify turns json into string 

        bookmarks.push(bookmark)

        //reset back to local storage

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    }
    e.preventDefault()

}

function fetchBookmarks(){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))

    console.log(bookmarks)

    var bookmarksResults = document.getElementById('bookmarksResults')

    bookmarksResults.innerHTML = ""

    for(var i =0; i<bookmarks.length;i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="well">'+
        '<h3>'+ name + 
        '<a class="btn btn-default target="_blank" href="' + url+'">visit</a> '
        '</h3>'+
        '</div>'
    }
}