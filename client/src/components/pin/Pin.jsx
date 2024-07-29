import React from 'react'
import { Link } from 'react-router-dom'
import {Marker, Popup } from 'react-leaflet';
import "./Pin.scss";

const Pin = ({item}) => {
  return (
        <Marker position={[item.latitude,item.longitude]}>
            <Popup>
                <div className='popupContainer'>
                    <img src={item.img} alt="" />
                    <dvi className="textContainer">
                        <Link to={`/${item.id}`}></Link>
                        <span>{item.bedroom} bedroom</span>
                        <b>$ {item.price}</b>
                    </dvi>
                </div>
            </Popup>
        </Marker>
  )
}

export default Pin