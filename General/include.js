document.addEventListener("DOMContentLoaded", function() {
    fetch("../Navbar/navbar.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("navbar").innerHTML = data;
        });

    fetch("../Bottom/bottom.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("bottom").innerHTML = data;
        });
});