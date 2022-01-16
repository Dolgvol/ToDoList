import React, {useState, useEffect} from 'react';

import { NoteGroup } from './NoteGroup';

export const NoteGroups = ({ cats, ...rest }) => ( 

   <div className="NoteGroups mt-5">
      {cats.map((cat) => <NoteGroup key={cat.id} cats={cats} cat={cat} {...rest} />)}      
   </div>
)