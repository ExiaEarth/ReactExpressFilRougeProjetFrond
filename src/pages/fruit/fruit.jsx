import TitlePage from "../../components/title-page";
import FruitDisplay from "../../containers/fruit-display/fruit-display";
import FruitInteraction from "../../containers/fruit-display/fruit-interaction";

const Fruit=()=>{
    return (

    <>
        <TitlePage>
        DemoRedux(avec fruit)
        </TitlePage>
        <FruitInteraction/>
        <FruitDisplay/>
    </>
    );
};

export default Fruit;
