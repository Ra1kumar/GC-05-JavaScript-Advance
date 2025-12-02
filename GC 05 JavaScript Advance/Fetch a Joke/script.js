document.getElementById("btn").addEventListener("click", getJoke);

function getJoke() {
    fetch("https://backend-omega-seven.vercel.app/api/getjoke")
        .then(response => response.json())
        .then(data => {
            const joke = data[0];  // API returns an array with one object
            document.getElementById("joke").innerHTML = `
                <p><strong>Question:</strong> ${joke.question}</p>
                <p><strong>Punchline:</strong> ${joke.punchline}</p>
            `;
        })
        .catch(error => {
            document.getElementById("joke").innerHTML = "Error fetching joke!";
        });
}
