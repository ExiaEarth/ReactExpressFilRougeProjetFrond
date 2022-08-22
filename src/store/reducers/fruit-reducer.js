import { createReducer } from "@reduxjs/toolkit";
import { addFruit, clearFruit, expireFruit, removeFruit } from "../action/fruit-action";
const inialState={
    fruits:[],
    msg:'Initial'
};

const fruitReducer = createReducer(inialState,(builder)=>{
    builder.addCase(addFruit,(state,action)=>{
        state.fruits.push(action.payload);
        state.msg='Ajout';
    })
    .addCase(removeFruit,(state,action)=>{
        const fruitId=action.payload;
        // ↓ recherche de l'index et suppression 
        const targerIndex= state.fruits.findIndex(fruit=>fruit.id === fruitId);
        state.fruits.splice(targerIndex,1);

        //↓ supression via une copie et un filtre
        // state.fruits=state.fruits.filter(fruit=>fruit.id===fruitId)
    })
    .addCase(expireFruit,(state,action)=>{
        const fruitId= action.payload;
        const targerIndex= state.fruits.findIndex(fruit=>fruit.id === fruitId);
        state.fruits[targerIndex].expire=true;


    })
    .addCase(clearFruit,(state,action)=>{
        state.fruits=[];
        state.msg='Clear de monsieur propre';
    });
});


export default fruitReducer;