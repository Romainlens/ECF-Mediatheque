document.addEventListener('DOMContentLoaded', function() {
    const omdbApiKey = 'e6c813c2'; // Clé OMDB
    const searchForm = document.getElementById('search-form');
    const titleInput = document.getElementById('title');
    const yearInput = document.getElementById('year');
    const typeInput = document.getElementById('type');
    const resultsDiv = document.getElementById('results');
    const footer = document.getElementById('footer');

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = titleInput.value;
        const year = yearInput.value;
        const type = typeInput.value;

        // Effectue une requête à l'API OMDB en utilisant Axios
        axios.get(`http://www.omdbapi.com/?t=${title}&y=${year}&type=${type}&apikey=${omdbApiKey}`)
            .then(response => {
                const data = response.data;

                if (data.Response === 'True') {
                    const title = data.Title;
                    const year = data.Year;
                    const plot = data.Plot;
                    const poster = data.Poster;

                    // Affiche les résultats
                    resultsDiv.innerHTML = `<h2>${title} (${year})</h2>`;
                    resultsDiv.innerHTML += `<p>${plot}</p>`;
                    if (poster && poster !== 'N/A') {
                        resultsDiv.innerHTML += `<img src="${poster}" alt="${title} Poster" />`;
                    }

                    // Ajoute la classe pour déplacer le contenu vers le haut
                    resultsDiv.classList.add('move-up');
                } else {
                    // Aucun film trouvé
                    resultsDiv.innerHTML = '<p>Aucun film trouvé.</p>';
                }
            })
            .catch(error => {
                // Gère les erreurs ici
                resultsDiv.innerHTML = '<p>Erreur lors de la recherche.</p>';
                console.error(error);
            });
    });

    // Ajoute un gestionnaire pour le bouton "Remonter"
    document.getElementById('move-up-button').addEventListener('click', function() {
        // Retire la classe pour déplacer le contenu vers le haut
        resultsDiv.classList.remove('move-up');
    });
});
