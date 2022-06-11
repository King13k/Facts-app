import React from 'react';

const Answer = (props) =>  {

      return (
        <>
        {props.facts ? <h1>{props.facts[`${props.type}Answer`]}</h1> : <h1>Loading...</h1>}
        </>
      )
  }



export default Answer;
