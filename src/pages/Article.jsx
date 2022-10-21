import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";

const Article = () => {
    const [ meal, setMeal ] = useState([]);
    const {id} = useParams();

    useEffect(()=> {
        (async () => {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id);
            const mealResponse = await response.json();
            console.log(mealResponse);
            setMeal(mealResponse.meals[0]);
        })();
    }, [id])
    
    return (
        <>
            <Nav />
            <section>   
                <article>
                    <p>{meal.strMeal}</p>
                    <p>{meal.strInstructions}</p>
                </article>
            </section>
        </>
    )
}

export default Article;