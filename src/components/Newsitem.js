import React from 'react'
import './News.css'

export default function Newsitem(props) {
  return (
    <div className='mycont'>

        <div className='imageswalidabba' style={{border:"solid black 2px"}}>
            <div className="imagesandar" style={{width: "18rem"}}>
      <img src={props.image} className="images" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <button >
       < a href={props.url} target='_blank' rel="noreferrer" >Read more</a>

        </button>
        
      </div>
    </div>
        </div>
    </div>
  )
}