function traverseForms(forms) {
    var formLen = forms.length;

    // recursive function to traverse the DOM
    function traverse(element) {
        var nodeName = element.nodeName;

        var elemDetails = '    ';
        elemDetails    += 'Call to traverse(el) function, where el = <' + nodeName + '>. ';
        elemDetails    += 'Constructor: ' + element.constructor.name + '. ';
        elemDetails    += 'Type: ' + element.type + '. ';
        elemDetails    += 'willValidate: ' + element.willValidate + '. ';
        console.log(elemDetails);

        var len = element.children.length
        for (var i = 0; i < len; i++) {
            // call recursive funct with current element's children
            traverse(element.children[i]);
        }
    }

    console.log('There are ' + formLen + ' form(s) on this page.');
    if (formLen > 0) {
        for (var i = 0; i < formLen; i++) {
            var form = forms[i];
            console.log('Processing ' + form.name + ':');
            traverse(form);
        }
    }
}