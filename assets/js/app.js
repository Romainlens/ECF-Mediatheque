
var films = [
    {
        title: "Deadpool",
        years: 2016,
        authors: "Tim Miller"
    },
    {
        title: "Spiderman",
        years: 2002,
        authors: "Sam Raimi"
    },
    {
        title: "Scream",
        years: 1996,
        authors: "Wes Craven"
    },
    {
        title: "It: chapter 1",
        years: 2019,
        authors: "Andy Muschietti"
    }
];

function ajouterFilms(film) {
    let parent = document.querySelector("tbody");
    let newElement = document.createElement("tr");
    parent.append(newElement);

    let newElement2 = document.createElement("td");
    newElement2.textContent = film.title;
    newElement.append(newElement2);

    let newElement3 = document.createElement("td");
    newElement3.textContent = film.years;
    newElement.append(newElement3);

    let newElement4 = document.createElement("td");
    newElement4.textContent = film.authors;
    newElement.append(newElement4);

    let newElement5 = document.createElement("td");
    newElement.append(newElement5);

    let newElement6 = document.createElement("button");
    newElement6.type = "button";
    newElement6.textContent = "Supprimer";
    newElement6.classList.add("btn", "btn-danger");
    newElement5.append(newElement6);

    newElement6.addEventListener('click', function () {
        const confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer ce film ?");
        if (confirmDelete) {
            films = films.filter(f => f !== film);
            afficherFilmsDansTableau(films);
        }
    });
}

ajouterFilms(films[0]);
ajouterFilms(films[1]);
ajouterFilms(films[2]);
ajouterFilms(films[3]);

document.getElementById("renseignementFilm").addEventListener('click', afficherFormulaire);

function afficherFormulaire(event) {
    event.preventDefault();
    document.querySelector("form").classList.remove("collapse");
    document.querySelector("button").classList.add("collapse");

    document.querySelector("form").addEventListener('submit', validerFormulaire);

    function validerFormulaire(event) {
        event.preventDefault();
        var title1 = document.querySelector("form input[name='films']").value;
        var years1 = document.querySelector("form input[name='years']").value;
        var author1 = document.querySelector("form input[name='author']").value;

        let validationFailed = false;
        let validationMessages = [];

        if (title1.length < 2) {
            validationMessages.push("Le titre est trop court (minimum 2 caractères)");
            validationFailed = true;
        }
        if (years1 < 1900 || years1 > new Date().getFullYear()) {
            validationMessages.push("Année non valide");
            validationFailed = true;
        }
        if (author1.length < 5) {
            validationMessages.push("Auteur non reconnu (minimum 5 caractères)");
            validationFailed = true;
        }

        if (validationFailed) {
            alert(validationMessages.join('\n'));
        } else {
            let nouveauFilm = {
                title: title1.charAt(0).toUpperCase() + title1.slice(1),
                years: parseInt(years1),
                authors: author1.charAt(0).toUpperCase() + author1.slice(1)
            };
            ajouterFilms(nouveauFilm);
            alert("Film ajouté avec succès!");

            document.querySelector("form").reset();
            document.querySelector("form").classList.add("collapse");
            document.querySelector("button").classList.remove("collapse");
        }
    }
}

document.getElementById("filterOption").addEventListener('change', function () {
    const filterOption = document.getElementById("filterOption").value;
    if (filterOption === "title") {
        trierParTitre();
    } else if (filterOption === "years") {
        trierParAnnee();
    }
});

document.getElementById("triTitre").addEventListener('click', trierParTitre);
document.getElementById("triAnnee").addEventListener('click', trierParAnnee);

function trierParTitre() {
    films.sort((a, b) => a.title.localeCompare(b.title));
    afficherFilmsDansTableau(films);
}

function trierParAnnee() {
    films.sort((a, b) => b.years - a.years);
    afficherFilmsDansTableau(films);
}

function afficherFilmsDansTableau(films) {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    films.forEach(film => {
        const tr = document.createElement("tr");
        const tdTitle = document.createElement("td");
        const tdYears = document.createElement("td");
        const tdAuthor = document.createElement("td");
        const tdActions = document.createElement("td");
        const deleteButton = document.createElement("button");

        tdTitle.textContent = film.title;
        tdYears.textContent = film.years;
        tdAuthor.textContent = film.authors;
        deleteButton.textContent = "Supprimer";
        deleteButton.classList.add("btn", "btn-danger");

        tr.appendChild(tdTitle);
        tr.appendChild(tdYears);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdActions);
        tdActions.appendChild(deleteButton);
        tbody.appendChild(tr);

        deleteButton.addEventListener('click', function () {
            const confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer ce film ?");
            if (confirmDelete) {
                films = films.filter(f => f !== film);
                afficherFilmsDansTableau(films);
            }
        });
    });
}
