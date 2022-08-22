import { useSelector } from "react-redux";

const FruitDisplay =()=>{
    // const fruit = useSelector(state=>state.fruit.fruits);
    // const msg= useSelector(state.fruit.msg);
    const {msg,fruits }= useSelector(state=>state.fruit);

    return (
        <div>
            <h2>Demo de la lecture des données dans le store de Redux</h2>
            <p>Le messagee est : {msg} </p>
            <ul>
                {fruits.map(fruit=>(
                    <li key={fruit.id}>
                        {fruit.family} {fruit.weight}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FruitDisplay;