const results = document.querySelector('#results');

async function asyncFetch(value){
  const res = await fetch(`https://swapi.dev/api/${value}`);
  const data = await res.json();
  displayResultsfather(data, value);
}

function displayResultsfather(data, value){
  let output = '';
  console.log(data, value);
  if(value === 'films'){
    data.results.forEach((item) =>{
      output += `
          <div class="card p-3 m-3" style="opacity: .8">
            <h4 class="card-title text-center">${item.title}</h4>
            <div class="card-content">
              <span style="text-decoration: underline">Produtor</span>: ${item.producer}<br>
              <span style="text-decoration: underline">Diretor</span>: ${item.director}<br>
              <span style="text-decoration: underline">Data de Lançamento</span>: ${item.release_date}<br>
              <p class="text-center">${item.opening_crawl}</p>
            </div>
          </div>
      `
    })
  }

  if(value === 'people'){
    data.results.forEach((item) =>{
      output += `
          <div class="card p-3 m-3" style="opacity: .8">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
              <span style="text-decoration: underline">Altura</span>: ${item.height}<br>
              <span style="text-decoration: underline">Ano de Nascimento</span>: ${item.birth_year}<br>
              <span style="text-decoration: underline">Cor da Pele</span>: ${item.skin_color}<br>
              <span style="text-decoration: underline">Cor dos Olhos</span>: ${item.eye_color}<br>
              <span style="text-decoration: underline">Cor do Cabelo</span>: ${item.hair_color}<br>
              <span style="text-decoration: underline">Gênero</span>: ${item.gender}<br>
            </div>
          </div>
      `
    })
  }

  if(value === 'vehicles'){
    data.results.forEach((item) =>{
      output += `
          <div class="card p-3 m-3" style="opacity: .8">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
              <span style="text-decoration: underline">Capacidade</span>: ${item.cargo_capacity}<br>
              <span style="text-decoration: underline">Modelo</span>: ${item.model}<br>
              <span style="text-decoration: underline">Fabricante</span>: ${item.manufacturer}<br>
              <span style="text-decoration: underline">Classe do Veículo</span>: ${item.vehicle_class}<br>
            </div>
          </div>
      `
    })
  }

  if(value === 'planets'){
    data.results.forEach((item) =>{
      output += `
          <div class="card p-3 m-3" style="opacity: .8">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
              <span style="text-decoration: underline">Clima</span>: ${item.climate}<br>
              <span style="text-decoration: underline">Diâmetro</span>: ${item.diameter}<br>
              <span style="text-decoration: underline">Gravidade</span>: ${item.gravity}<br>
              <span style="text-decoration: underline">Período Orbital</span>: ${item.orbital_period}<br>
              <span style="text-decoration: underline">População</span>: ${item.population}<br>
              <span style="text-decoration: underline">Superfície com Água</span>: ${item.surface_water}<br>
              <span style="text-decoration: underline">Terreno</span>: ${item.terrain}<br>
            </div>
          </div>
      `
    })
  }
  if(value === 'starships'){
    data.results.forEach((item) =>{
      output += `
          <div class="card p-3 m-3" style="opacity: .8">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
              <span style="text-decoration: underline">Modelo</span>: ${item.model}<br>
              <span style="text-decoration: underline">Fabricante</span>: ${item.manufacturer}<br>
              <span style="text-decoration: underline">Valor</span>: ${item.cost_in_credits}<br>
              <span style="text-decoration: underline">Comprimento</span>: ${item.length}<br>
              <span style="text-decoration: underline">Velocidade Máxima</span>: ${item.max_atmosphering_speed}<br>
              <span style="text-decoration: underline">Tripulação</span>: ${item.crew}<br>
              <span style="text-decoration: underline">Passageiros</span>: ${item.passengers}<br>
            </div>
          </div>
      `
    })
  }
  if(value === 'species'){
    data.results.forEach((item) =>{
      output += `
          <div class="card p-3 m-3" style="opacity: .8">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
              <span style="text-decoration: underline">Classificação</span>: ${item.classification}<br>
              <span style="text-decoration: underline">Designação</span>: ${item.designation}<br>
              <span style="text-decoration: underline">Altura Média</span>: ${item.average_height}<br>
              <span style="text-decoration: underline">Cor da Pele</span>: ${item.skin_colors}<br>
              <span style="text-decoration: underline">Cor do Cabelo</span>: ${item.hair_colors}<br>
              <span style="text-decoration: underline">Cor dos Olhos</span>: ${item.eye_colors}<br>
              <span style="text-decoration: underline">Tempo Médio de Vida</span>: ${item.average_lifespan}<br>
              <span style="text-decoration: underline">Idioma Falado</span>: ${item.language}<br>
            </div>
          </div>
      `
    })
  }
  results.innerHTML = output;
};

//event listener for buttons
document.querySelector("#buttons").addEventListener('click', (e)=>{
  asyncFetch(e.target.textContent.trim().toLowerCase());
});