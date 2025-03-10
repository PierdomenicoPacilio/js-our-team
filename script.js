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

const addMembers = function (array) {
  document.getElementById('grid').innerHTML = '';
  for (i = 0; i < array.length; i++) {
    document.getElementById('grid').innerHTML += `<div class="container col">
                                                              <img src="${array[i].img}" alt="member photo">
                                                              <div class="info">
                                                                  <h5 class="info-child">${array[i].name}</h5>
                                                                  <p class="info-child">${array[i].role}</p>
                                                                  <p class="email info-child">${array[i].email}</p>
                                                              </div>
                                                          </div>`;
    console.log(`${array[i].name} aggiunto`);
  };
};
addMembers(teamMembers);

const button = document.getElementById('btn');

button.addEventListener('click', function(event){
  event.preventDefault();
  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const email = document.getElementById('email').value;
  const img = document.getElementById('img').value;
  teamMembers.push({name, role, email, img});
  addMembers(teamMembers);
  document.getElementById('form').reset();
});