fetch('/html-modules/header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response not ok: ' + response.statusText);
        }
        return response.text();
    })

    .then(data => {
        //Insert HTML into header tag
        document.getElementsByTagName('header')[0].innerHTML = data;

        document.dispatchEvent(new Event('headerInserted'));

        //Delete this script once header inserted
        //document.getElementById('header-insert').remove();
    })

    .catch(error => {
        console.error('header fetch error', error);
    });