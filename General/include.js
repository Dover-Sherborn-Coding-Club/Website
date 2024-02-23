fetch("/Navbar/navbar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("nav").innerHTML = data;
  });

