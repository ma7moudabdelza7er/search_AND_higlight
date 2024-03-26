const p = document.getElementById('p');
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener('click', function () {
    let input = document.getElementById('input').value;
    if (input !== "") {
        let regex = new RegExp(input, 'ig');
        p.innerHTML = p.textContent.replace(regex, "<mark>$&</mark>")
    }
})