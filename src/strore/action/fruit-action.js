// Liste d'action pour la categorie "fruit"
//-ajouter un fruit =>{family:"pomme" weight:'100gr}
// -supprimer un fruit
//-indiquée si le fruit est périmé

import { nanoid } from "nanoid"

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
export const addFruit = creatAction ( 'fruit/add' , ( fruit) => ({ playload : { id : nanoid () ,...fruit } } ) );
export const removeFruit = creatAction ( 'fruit/remove' );
export const expireFruit = creatAction ( 'fruit/expire' );