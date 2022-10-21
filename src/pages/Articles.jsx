import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Articles = () => {
    
    const [ meals, setMeals ] = useState([]);

    useEffect(()=> {
        (async () => {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            const mealsResponse = await response.json();
            setMeals(mealsResponse.meals);
        })();
    }, [])

    return (
        <>
            <Nav/>
            <section>
                {meals.map(meal => {
                    return (
                        <article>
                            <Link to={`/articles/${meal.idMeal}`}  >
                                <p>
                                    {meal.strMeal}
                                </p>
                            </Link>
                        </article>
                    )
                })}
            </section>
        </>
    )
}

export default Articles;