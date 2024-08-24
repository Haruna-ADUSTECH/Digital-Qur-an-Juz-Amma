document.addEventListener("DOMContentLoaded", function() {
    // Get all Surah links
    const surahLinks = document.querySelectorAll(".surah-link");
    
    // Add click event listener to each Surah link
    surahLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            
            // Get the ID of the clicked Surah
            const surahId = this.getAttribute("data-surah");
            
            // Toggle visibility of the corresponding verses
            const versesDiv = document.getElementById(surahId);
            if (versesDiv.style.display === "none" || versesDiv.style.display === "") {
                // Hide other Surahs
                document.querySelectorAll(".ayat").forEach(div => {
                    if (div.id !== surahId) {
                        div.style.display = "none";
                    }
                });
                // Show the clicked Surah's verses
                versesDiv.style.display = "block";
            } else {
                // Hide the Surah's verses if it was already visible
                versesDiv.style.display = "none";
            }
        });
    });
});
