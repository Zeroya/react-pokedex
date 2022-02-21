import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
};



const Sprite = styled.img`
  width:5em;
  height:5em;
`;

const Card = styled.div`
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
transition:all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
&:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
-moz-user-select: none;
-website-user-select: none;
 user-select: none;
 -o-user-select: none;
`;

const StyledLink = styled(Link)`
text-decoration:none;
color:black;
&:focus,
&:hover,
&:visited,
&:link,
&:active{
  text-decoration:none;
}
`;


export default class PokemonCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
    
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
        <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
          <Card className='card' >
            <h5 className='card-header'>{this.state.pokemonIndex}</h5>
            <Sprite className='card-img-top rounded mx-auto mt-2' src={this.state.imageUrl} />
            <div className='card-body mx-auto'>
              <h6 className='card-title'>{this.state.name.toLowerCase()
                .split(' ').map(
                  letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                .join(' ')}</h6>
            </div>
          </Card>
        </StyledLink>
      </div>
    )
  }
}


