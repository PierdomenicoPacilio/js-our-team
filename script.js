const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

for (i = 0; i < teamMembers.length; i++) {
  document.getElementById('grid').innerHTML += `<div class="container col">
                                                            <img src="${teamMembers[i].img}" alt="foto Marco">
                                                            <div class="info">
                                                                <h5 class="info-child">${teamMembers[i].name}</h5>
                                                                <p class="info-child">${teamMembers[i].role}</p>
                                                                <p class="email info-child">${teamMembers[i].email}</p>
                                                            </div>
                                                        </div>`
  console.log(`${teamMembers[i].name} aggiunto`)
}