import React from 'react';
import './card-style.css';
import Progress from './BarraProgreso';


const Card = props => {

    const address = 'DscLYSmWzofxRzoMdPvSV8nADY9L4LegdAc';

    const peticion = fetch (`https://explorer.dcrdata.org/api/address/${address}/totals`);

    peticion
        .then( resp => resp.json() )
        .then( data => {
            console.log(data)


        })
 
    return(


        <div className="card text-center">
              

            <div className="overflow">
                <img src={props.imgsrc} alt="Image1" className="card-img-top" />
            </div>

            <div className="card-body text-light text">
                <h4 className="card-title">{props.title}</h4>
                    
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam aspernatur officiis temporibus minima delectus omnis maiores eum animi quae non.
                </p>

                <>
                <small>Monto Meta</small>
                <Progress done="80"/>
                </>

                <>
                <small>Progreso de fondeo</small>
                <Progress done="30"/>
                </>


                < a href="#" className='btn btn-outline-success'>Saber mas</a>
                
            </div>
        </div> 
    );
};





export default Card;