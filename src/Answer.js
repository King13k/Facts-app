import React from 'react';
import { Link } from 'react-router-dom';

const Answer = (props) =>  {

      return (
        <>
        {props.facts ? <h1>{props.facts[`${props.type}Answer`]}</h1> : <h1>Loading...</h1>}
        <Link to='/'>
        <button>HOME</button>
        </Link>
        </>
      )
  }



export default Answer;
