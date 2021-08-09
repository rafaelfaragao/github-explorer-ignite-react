import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

//https://api.github.com/orgs/rocketseat/repos

export function RepositoryList(){
  const [repositories, setRepositories] = useState([])

  useEffect(()=>{
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []); 
  //se passar o valor do array vazio, o useEffect só vai executar uma única vez
  //nunca usar o useEffect sem passar o segundo parâmetro para não entrar em loop
  //Não mudar o valor da variável que seja o segundo parâmetro dentro do useEffect é outro loop

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository}/>
        })}
      </ul>
    </section>
  );
}