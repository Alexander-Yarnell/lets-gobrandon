import React from 'react';

function Card(props){
  return(
    <div class="card" style={{width: `${props.width}rem`}}>
  <img src={props.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">{props.body}</p>
  </div>
</div>
  )
}

export default Card;
