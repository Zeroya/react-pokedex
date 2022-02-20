import React, { Component } from 'react';
import axios from 'axios';

export default class Pokemon extends Component {

  state = {
    name: '',
    pokemonIndex: '',
    imageUrl: '',
    types: [],
    decription: '',
    stats: {
      hp: "",
      attack: "",
      defence: "",
      speed: "",
      specialAttack: "",
      specialDefense: ""
    },
    height: "",
    weight: "",
    eggGroup: "",
    abilities: '',
    genderRatioMale: '',
    genreRatioFemale: "",
    evs: "",
    hatchSteps: ""
  };

  async componentDidMount() {

    const { pokemonIndex } = this.props.match.params;


    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

    const pokemonRes = await axios.get(pokemonUrl);

    const name = pokemonRes.data.name;
    const imageUrl = pokemonRes.data.sprites.front_default;

    let [hp, attack, defense, speed, specialAttack, specialDefense] = '';

    pokemonRes.data.stats.map(stat => {
      switch (stat.stat.name) {
        case 'hp':
          hp = stat['base_stat']
          break;
        case 'attack':
          attack = stat['base_stat']
          break;
        case 'defense':
          defense = stat['base_stat']
          break;
        case 'speed':
          speed = stat['base_stat']
          break;
        case 'special-attack':
          specialAttack = stat['base_stat']
          break;
        case 'special-defense':
          specialDefense = stat['base_stat']
          break;

      }
    })

    const height = Math.round((pokemonRes.data.height * 0.328084 + 0.001) * 100) / 100;
    const weight = Math.round((pokemonRes.data.weight * 0.220462 + 0.001) * 100) / 100; // convert to pounds 

    const types = pokemonRes.data.types.map(type => type.type.name);

    const abilities = pokemonRes.data.abilities.map(abilities => {
      return abilities.ability.name.toLowerCase().split('-').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(" ");
    })

    const evs = pokemonRes.data.stats.filter(stat => {
      if (stat.effort > 0) {
        return true;
      }
      return false;
      
    }).map(stat => {
      return `${stat.efort} ${stat.stat.name}`
      .toLowerCase().split('-').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(" ");
    }).join(", ");

    this.setState({ name, imageUrl })
  }

  render() {
    return (<div>
      <div>{this.state.name}</div>
      <div>{this.state.imageUrl}</div>
    </div>
    )
  }
}
