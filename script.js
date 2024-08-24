document.addEventListener('DOMContentLoaded', function () {
    const surahList = document.getElementById('surahList');
    const searchBar = document.getElementById('searchBar');

    // Example Surah names (to be replaced with actual names from Juz' Amma)
    const surahs = ['An-Naba', 'An-Naziat', 'Abasa', 'At-Takwir'];

    function displaySurahs(surahArray) {
        surahList.innerHTML = '';
        surahArray.forEach(surah => {
            const surahDiv = document.createElement('div');
            surahDiv.className = 'surah';
            surahDiv.innerText = surah;
            surahDiv.addEventListener('click', function() {
                // Logic to display the verses of the clicked Surah
                alert(`Displaying verses for ${surah}`);
            });
            surahList.appendChild(surahDiv);
        });
    }

    searchBar.addEventListener('input', function() {
        const filteredSurahs = surahs.filter(surah => surah.toLowerCase().includes(searchBar.value.toLowerCase()));
        displaySurahs(filteredSurahs);
    });

    displaySurahs(surahs); // Initial display of all Surahs
});
