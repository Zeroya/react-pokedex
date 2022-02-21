import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StLink = styled(Link)`
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


export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
        <StLink to='/'> <a className='navbar-brand col-sm-3 col-md-2 mr-0 mx-5 align-items-center'>Pokedex</a></StLink>
        </nav>
      </div>
    )
  }
}
