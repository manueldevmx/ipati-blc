import React, { Component } from 'react'
import Card from './CardUI';

import img1 from '../imagenes/artesano.jpeg'
import img2 from '../imagenes/images.jpeg'
import img3 from '../imagenes/artesano1.jpeg'
import img4 from '../imagenes/artesano2.jpeg'

class Cards extends Component {
   
    render() {
        return (
            
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                     <div className='col md-4'>
                        <Card imgsrc={img1} title="Proyecto 1"/>
                     </div>
                     <div className='col md-4'>
                        <Card imgsrc={img2} title="Proyecto 2"/>
                     </div>
                     <div className='col md-4'>
                        <Card imgsrc={img3} title="Proyecto 3"/>
                     </div>
                     <div className='col md-4'>
                        <Card imgsrc={img4} title="Proyecto 4"/>
                     </div>
                </div>
            </div>
        );
    }
}

export default Cards;