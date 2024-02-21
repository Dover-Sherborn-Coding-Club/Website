fetch("/Navbar/navbar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("nav-bar").innerHTML = data;
  });

fetch("/Footer/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });