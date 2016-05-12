/*Please note I received help from my mentor Errietta Kostala on interpreting the API
 documentation from  https://getbible.net/api and throughout portions of my code within
 the JS file, for full details please review the commits on my git repository
 https://github.com/phillipsk/CSCI-E-12/tree/master/Final%20Project/FMC*/

window.onload = function () {
    var bibleListOld = document.getElementById('bible-list-old');

    var bibleListNew = document.getElementById('bible-list-new');
    var OldTestamentBooksLen = OldTestBooks.length;

    var NewTestamentBooksLen = NewTestBooks.length;

    /*In the following two  For loops I loop through an array consisting of the all the
    Old Testament Books and New Testament Books respectively. The JS creates an element
    for each Bible Book in the Bible and appends each element to the page.*/
    for (var i = 0; i < OldTestamentBooksLen; i++) {
        var book = OldTestBooks[i];

        var a = document.createElement('a');
        a.innerHTML = book;
        a.setAttribute('role', 'button');
        a.className = 'btn btn-default';

        bibleListOld.appendChild(a);

        $(a).click(function () {
            getData(this.innerHTML);
        });

    }
    for (var i = 0; i < NewTestamentBooksLen; i++) {
        var book = NewTestBooks[i];

        var a = document.createElement('a');
        a.innerHTML = book;
        a.setAttribute('role', 'button');
        a.className = 'btn btn-default';

        bibleListNew.appendChild(a);

        $(a).click(function () {
            getData(this.innerHTML);
        });

    }

    /*Form validation and error checking, capitalizing the first letter for aesthetics
    and preventing a search for a Book not in the Bible which is represented through he
    FullBooks array */
    $('#search-btn').click(function () {
        var value = $('#search-txt').val();
        var found = false;

        FullBooks.forEach(function (book) {
            if (value.match(book, 'i')) {
                found = true;
                return false;
            }
        });

        if (found) {
            getData(value);
        } else {
            alert("This book doesn't exist!");
        }
    });

    /*Form validation*/
    $('#search-txt').keyup(function () {
        var value = $('#search-txt').val();

        if (value.length == 0) {
            return;
        }

        var firstUpper = value[0].toUpperCase();

        if (value.length > 1) {
            for (var i = 1; i < value.length; i++) {
                firstUpper += value[i];
            }
        }

        $('#search-txt').val(firstUpper);
    });

    /*Main function parsing the API request which returns each Book of the Bible in x objects where x
     * is the number of chapters in each book, p and v are API specific variables representing the
     * passage and version of the Bible respectively*/
    function getData(book) {
        $.ajax({
            url: 'http://getbible.net/json',
            dataType: 'jsonp',
            data: 'p=' + book + '&v=kjv',
            jsonp: 'getbible'
        }).done(function (x) {
            /*variable txt stores my output to the new pop up page generated with scriptures*/
            var txt = '<link rel="stylesheet" href="css/godworks.css" type="text/css">';
            txt += '<script type="text/javascript" src="js/jquery-1.12.2.min.js"></script>';

            txt += '<h1>' + book + '</h1>';

            /*chained the above function and now closing the new window*/
            var win = window.open();
            win.document.write(txt);
            win.document.close();

            /*I found comfort in the setTimeout method as I noticed the page would never
             * stop refreshing, I encased my main parsing function within the method to
             * prevent the page from continously loading.*/
            window.setTimeout(function () {
                // Book objects have chapters in each key
                if (x.book) {
                    var chapters = Object.keys(x.book);
                    /*parsing chaper from each key object received from as a book form
                     the API*/
                    chapters.forEach(function (chapter_nr, idx) {
                        var chapter = x.book[chapter_nr];

                        /*Likewise parsing the verses from each chapter*/
                        if (chapter.chapter) {
                            var verses = Object.keys(chapter.chapter);

                            /*Now separating each verse from the verses collection*/
                            verses.forEach(function (verse_nr) {
                                var verse = chapter.chapter[verse_nr];

                                /*traversing the DOM, creating and appending elements to
                                 the page*/
                                var div = document.createElement('div');
                                div.innerHTML = chapter.chapter_nr + ":" + verse.verse_nr + " " + verse.verse;
                                div.className = 'book book_' + book;
                                div.id = "verse_" + book + "-" + chapter.chapter_nr + "-" + verse.verse_nr;

                                win.document.body.appendChild(div);

                                /* Another way to dump the link and script functions unto
                                 the page as in lines 82-83*/
                                //txt += "<div class='book book_" + book + "' id='verse_"
                                // + book + "-" + chapter_nr + "-" + verse_nr + "'>" +
                                // chapter_nr + ":" + verse_nr + " " + verse.verse + "</div>";
                            });
                        }
                    });
                }

                // Chapter objects have verses in each key
                if (x.chapter) {
                    /*A separate function is needed to identify a chapter along with a
                     book when typed into the search box*/
                    var verses = Object.keys(x.chapter);

                    /*Now separating each verse from the verses collection*/
                    verses.forEach(function (verse_nr) {
                        var verse = x.chapter[verse_nr];

                        /*traversing the DOM, creating and appending elements to the page*/
                        var div = document.createElement('div');
                        div.innerHTML = x.chapter_nr + ":" + verse_nr + " " + verse.verse;
                        div.className = 'book book_' + x.book_name;
                        div.id = "verse_" + book + "-" + x.chapter_nr + "-" + verse_nr;

                        win.document.body.appendChild(div);

                    });

                }


                var books = win.window.$('.book');
                /*set current to less than 0 to allow for a keydown press to enable
                 highlight and removal of highlight seamlessly*/
                var current = -1;

                /* By use of W & S we can highlight each verse by a keydown
                 press*/
                win.window.$(win).on('keydown', function (e) {
                    /*initially remove highlight from book*/
                    books.removeClass('active');

                    if (e.keyCode === 87) { // W
                        if (current == 0) {
                            return;
                        }

                        current--;
                    } else if (e.keyCode === 83) { // S
                        if (current == books.length - 1) {
                            return;
                        }
                        /*here instead of a keyup press event listener we decrement and
                        reverse direction*/
                        current++;
                    } else if (e.keyCode === 27) {
                        books.removeClass('active'); // ESC
                        return;
                    }

                    var book = books[current];
                    $(book).addClass('active');
                });
            }, 1000);
            /*1000 ms parameter for setTimeout method*/

            /*Debugging*/
        }).fail(function (err) {
            console.log(err);
        });
    }
};
