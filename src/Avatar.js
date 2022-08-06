import React from 'react';

export default function Avatar({user}) {

  const url = `https://avatars.dicebear.com/v2/avataaars/{{${user.username}}}.svg?options[mood][]=happy`;
  
  return (
    <div>
      <img src={url} alt="avatar" width="100%" height="300px" />
    </div>
  )
}

