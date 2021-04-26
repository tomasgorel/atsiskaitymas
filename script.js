
const konteineris = document.getElementById('str');
konteineris.style.display = "flex";

konteineris.style.flexWrap = "wrap";
konteineris.style.justifyContent ="center";

async function paieska(){
try {

let promise = await fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=5OoK5AcqkOqfM2bRqbywEMkpJ76bD6c3');


console.log(promise.status);

const straipsniai = await promise.json();

for (let i=0; i<straipsniai.results.length; i++){

  const vienasStr = document.createElement('div');
  konteineris.appendChild(vienasStr);

  const fotoDiv = document.createElement('div');
  vienasStr.style.width = "320px";
  
  vienasStr.style.margin= "15px";
  vienasStr.appendChild(fotoDiv);
  vienasStr.classList.add("kont");
  const nuotrauka = document.createElement('img');


if (straipsniai.results[i].multimedia !== null ) {
  nuotrauka.src = straipsniai.results[i].multimedia[0].url;
  }else{
      
  }
  //nuotrauka.src = straipsniai.results[i].multimedia[0].url; 




  nuotrauka.style.width = "320px";

  fotoDiv.appendChild(nuotrauka);

  const sekcija = document.createElement('div');
  const sekcijaText = document.createElement('p');
  sekcijaText.innerText=straipsniai.results[i].section; 

  sekcija.appendChild(sekcijaText);




  fotoDiv.appendChild(sekcija);

  const pavadinimas = document.createElement('h2');
  const linkas = document.createElement('a');

  linkas.innerText=straipsniai.results[i].title; 

  linkas.href = straipsniai.results[i].url; 

  vienasStr.appendChild(pavadinimas);
  pavadinimas.appendChild(linkas);

  const santrauka = document.createElement('p');

  santrauka.innerText=straipsniai.results[i].abstract; 

  vienasStr.appendChild(santrauka);

  const linkas1 = document.createElement('a');
  linkas1.innerText= "Read more..."
  linkas1.href = straipsniai.results[i].short_url; 
  vienasStr.appendChild(linkas1);
  
  
}

} //try
catch (error) {
  console.log(error);
}
}

paieska(); 
