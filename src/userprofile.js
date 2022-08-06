import React from 'react';
import Avatar from './Avatar';
import './userprofile.css';


export default function userprofile( {user} ) {
  return (
    <div className="container">

      <div className="avatar">
        <Avatar user={user} />
      </div>
      <div className="details">
        <h1> { user.name } </h1>
        <p> <b>Email:</b> {user.email} </p>
        <p> <b>Phone:</b> {user.phone} </p>
        <p> <b>Company:</b> {user.company.name} </p>
        <p> <b>Website:</b> {user.website}</p>
        <p> <b>Address:</b> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode} </p>
      </div>
      
    </div>
  )
}


