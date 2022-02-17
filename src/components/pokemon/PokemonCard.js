import React, { Component } from 'react';
import styled from 'styled-components';

const Sprite = styled.img`
  width:5em;
  height:5em;
`;

const Card = styled.div`
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
background-color:{name};
`;

export default class PokemonCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: ''
  }

  componentDidMount() {
    const name = this.props.name.replace(/-/i, ' ');;
    const url = this.props.url;
    const pokemonIndex = url.split("/")[url.split('/').length - 2];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({ name: name, imageUrl: imageUrl, pokemonIndex: pokemonIndex })
  }


  render() {

    return (
      <div className='col-md-3 col-sm-6 mb-5'>
        <Card className='card'>
          <h5 className='card-header'>{this.state.pokemonIndex}</h5>
          <Sprite className='card-img-top rounded mx-auto mt-2' src={this.state.imageUrl} />
          <div className='card-body mx-auto'>
            <h6 className='card-title'>{this.state.name.toLowerCase()
              .split(' ').map(
                letter => letter.charAt(0).toUpperCase() + letter.substring(1))
              .join(' ')}</h6>
          </div>
        </Card>
      </div>
    )
  }
}


