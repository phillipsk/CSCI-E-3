window.onload = function() {
    var userForm  = document.getElementById('userForm');
    var userName  = document.getElementById('userName');
    var userEmail = document.getElementById('userEmail');
    var tableBody = document.getElementById('tableBody');

    var userCount = 0;
    function addUser(userNameValue, userEmailValue) {
        var tr         = document.createElement('tr');
        var tdName     = document.createElement('td');
        var tdEmail    = document.createElement('td');
        var tdEdit     = document.createElement('td');
        var txtName    = document.createTextNode(userNameValue);
        var txtEmail   = document.createTextNode(userEmailValue);
        var txtEdit    = document.createTextNode('edit');

        tdName.appendChild(txtName);
        tdEmail.appendChild(txtEmail);
        tdEdit.appendChild(txtEdit);

        tdEdit.setAttribute('id', ('user_' + userCount));
        tdEdit.setAttribute('class', 'link');

        // Closure
        tdEdit.onclick = (function(evt){
            var obj = tdEmail;
            return function(evt){
                var email = prompt("Please enter a new Email:");
                if (email != null && email != "") {
                    obj.innerHTML = email;
                    obj.setAttribute('class', 'edited');
                }
            }
        })();

        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdEdit);

        tableBody.appendChild(tr);

        userCount++;
    }

    userForm.addEventListener('submit', function(evt) {
        evt.preventDefault();
        var userNameValue = userName.value;
        var userEmailValue = userEmail.value;
        if (userNameValue == "" || userEmailValue == "") {
            alert('Enter Name and Email.');
        } else {
            addUser(userNameValue, userEmailValue);
        }
        userName.focus();
    }, false);
}