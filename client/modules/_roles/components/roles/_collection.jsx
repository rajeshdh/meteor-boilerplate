import React from 'react';

export default ({collection}) => (
  <div>
    <h3>Roles Collection</h3>
    <ul>
      {collection.map(record => (
        <li key={record._id}>
          <a href={`/roles/${record._id}`}>{record.title}</a>
        </li>
      ))}
     </ul>
   </div>
);
