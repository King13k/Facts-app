import React from 'react';
import "./Answer.css"

const Answer = (props) =>  {

      return (
        <>
        {props.facts ? <h1 className="fact">Answer: {props.facts[`${props.type}Answer`]}</h1> : <h1>Loading...</h1>}
        </>
      )
  }



export default Answer;
