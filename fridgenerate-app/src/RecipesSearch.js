import React, { useRef } from 'react';

const RecipesSearch = ({ onSubmit }) => {

    const recipes = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

            const query = String(recipes.current.value)
            console.log("Query:", query)
        };
        
        // onSubmit(s);

        return (
        <div className="Recipes-form">
            <form onSubmit={handleSubmit}>
                <input id="Recipes-input" ref={recipes} placeholder= "&#61442; Search recipes..." type="text" autoFocus />
            </form>
        </div>
        );
    };


export default RecipesSearch;