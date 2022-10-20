import { useEffect, useState } from "react";

const Meals = () => {

    // je viens utiliser le hook setState
    // cette fonction de react me permet de stocker des données en dehors de mon composant
    // comme des résultats d'appel d'api
    // les données sont ensuite dispo à chaque rendu de mon composant dans une variable
    // useState me fournit la variable contenant les données et une fonction pour modifier les
    const [ meals, setMeals ] = useState([]);
    const [ meal, setMeal ] = useState(null);

    // je viens utiliser le hook useEffect
    // cette fonction de react me permet d'executer du code quand mon composant 
    // est rendu, ou détruit, ou rendu pour la première fois. 
    // Donc à chaque étape du "cycle de vie" du composant
    // le code a executer est le premier parametre de useEffect
    // le deuxième parametre (un tableau vide ici) me permet de dire que je veux
    // exécuter ce code qu'une seule fois au premier chargement
    useEffect(()=> {
        // je fais mon appel asynchrone fetch pour récupérer les données de mon api
        (async () => {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            const mealsResponse = await response.json();
            // je stocke le résultat de l'appel d'api dans ma variable de state "meals"
            // grâce à la fonction setMeals()
            // la fonction setMeals() me permet aussi de demander à react de recharger mon composant
            // le composant sera donc rechargé et les données de l'appel d'api seront cette fois dispo
            // dans la variable du state meals
            setMeals(mealsResponse.meals);
        })();
    }, [])

    // n'est appelé que quand on clique sur une recette
    const showMealDetail = (mealId) => {
        (async () => {
            // fait un appel vers l'api en fonction de l'id de la recette cliquée
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+mealId);
            const mealDetails = await response.json();
            // stocke dans la variable d'état meal le détail d'une recette
            setMeal(mealDetails.meals[0]);
        })();
    }

    return (
        <main>
            {/* si la variable d'état meal n'est pas null (c'est un if else 
            mais avec la syntaxe de l'opérateur ternaire) 
            on affiche le détail de la recette
            */}
            {meal ?
                <article>
                    <h2>{meal.strMeal}</h2>
                    <p>{meal.strInstructions}</p>
                </article>
            // sinon on affiche la liste des recettes 
            :    
                <div>

                {/* je fais une boucle sur la variable d'état meals.
                    Au premier chargement cette variable contient la valeur par défaut, c'est à dire
                    un tableau vide. Donc rien ne sera affiché dans la boucle. Au deuxième chargement
                    la variable contiendra les recettes issues de l'api, donc ma boucle les affichera
                */}
                    <section>
                        {meals.map(meal => {
                            return (
                                <article>
                                    <p onClick={() => showMealDetail(meal.idMeal)}>
                                        {meal.strMeal}
                                    </p>
                                </article>
                            )
                        })}
                    </section>
                </div> 
            }
    
        </main>
    );
}

export default Meals;