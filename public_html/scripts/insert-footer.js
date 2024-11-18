fetch('/html-modules/footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response not ok: ' + response.statusText);
        }
        return response.text();
    })

    .then(data => {
        //Insert HTML into footer tag
        document.getElementsByTagName('footer')[0].innerHTML = data;

        //Delete this script once footer inserted
        //document.getElementById('footer-insert').remove();
    })

    .catch(error => {
        console.error('footer fetch error', error);
    });