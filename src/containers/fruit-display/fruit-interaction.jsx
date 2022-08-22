import { addFruit, clearFruit } from "../../store/action/fruit-action";
import{useDispatch} from 'react-redux';



const FruitInteraction=()=>{

    const dispatch=useDispatch();

    const handleAddApple=()=>{
        // Utiliser des donnée d'un formulaire
        const apple={
            family:'Pomme',
            weight:'142 Gr'
        };
        //Crée une action (pour redux)d'ajout
        const actionAddApple=addFruit(apple);
        console.log(actionAddApple);
        //Envoyer l'action vers le store via le dispache
        dispatch(actionAddApple)
    };
    const handleClear=()=>{
         //Envoyer l'action "fruit/clear" dans le dispatche
         dispatch(clearFruit());
    }
    

    return(
        <div>
            <button onClick={handleAddApple}>
                ajouter une pomme
            </button>
            <button onClick={handleClear}>
                Vider liste
            </button>
        </div>
    );
};

export default FruitInteraction;