const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  const container = document.querySelector(".container")

  console.log (container)
  

  let i = 0

  stampa = setInterval(function(){  
    let singolapersona = team[i]
    container.innerHTML += `
    <div style="animation: ${(i+1)/2}s ease 0s  normal none running fadein;" class="box">
        <img src="./assets/img/${team[i].image}" alt="">
        <div class="box-scritte">
            <h3>${team[i].name}</h3>
            <span>${team[i].role}</span>
        </div>
    </div>`
    for ( let key in singolapersona){
        console.log (key)
        console.log (singolapersona[key])
    }

    i++

    if (i == team.length){
    clearInterval(stampa);}
  },1)

  