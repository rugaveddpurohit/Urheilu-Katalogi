let teams = [
    { id: 1, name: "FC Barcelona", sport: "Jalkapallo", city: "Barcelona" },
    { id: 2, name: "LA Lakers", sport: "Koripallo", city: "Los Angeles" },
    { id: 3, name: "HIFK", sport: "Jääkiekko", city: "Helsinki" }
];

const teamList = document.getElementById("teamList");
const teamForm = document.getElementById("teamForm");
const sortSelect = document.getElementById("sortSelect");

function renderTeams() {
    teamList.innerHTML = "";
    teams.forEach(team => {
        const card = document.createElement("div");
        card.className = "team-card";
        card.innerHTML = `
      <h3>${team.name}</h3>
      <p><strong>Laji:</strong> ${team.sport}</p>
      <p><strong>Kaupunki:</strong> ${team.city}</p>
      <button onclick="deleteTeam(${team.id})">Poista (Delete)</button>
    `;
        teamList.appendChild(card);
    });
}

teamForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("teamName").value;
    const sport = document.getElementById("teamSport").value;
    const city = document.getElementById("teamCity").value;

    const newTeam = { id: Date.now(), name, sport, city };
    teams.push(newTeam);
    renderTeams();
    teamForm.reset();
});

function deleteTeam(id) {
    teams = teams.filter(team => team.id !== id);
    renderTeams();
}

sortSelect.addEventListener("change", (e) => {
    const criteria = e.target.value;
    teams.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    renderTeams();
});

renderTeams();
