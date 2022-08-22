// Liste d'action pour la categorie "fruit"
//-ajouter un fruit =>{family:"pomme" weight:'100gr}
// -supprimer un fruit
//-indiquée si le fruit est périmé

import { nanoid } from "nanoid"
import {createAction} from '@reduxjs/toolkit'

// action création"oldschool"

// export const addFruit=(fruit)=>{
//     return{
//         type:'fruit/add',
//         payload:{ id:nanoid(),...fruit}

//     };
// };

// export const removeFruit=(fruitId)=>{
//     return{
//         type:'fruit/remove',
//         payload:fruitId

//     };
// };

// action création "moderne" (avec le redux Toolkit)
// ajouter
export const addFruit = createAction ( 'fruit/add' , ( fruit) => ({ payload : { id : nanoid () ,...fruit } } ) );
// supprimer
export const removeFruit = createAction ( 'fruit/remove' );
// expiration
export const expireFruit = createAction ( 'fruit/expire' );

export const clearFruit= createAction ('fruit/clear');