import React, { Component } from "react";

class MyComponent extends Component {

    render() {
        let receta = {
            name: 'pizza',
            ingredients: ['Tomate', 'Queso'],
            calories: 400
        }
        return (
            <div>
                <h1> {'Receta: ' + receta.name}</h1>
                <h1> {'Calories: ' + receta.calories}</h1>

                <ol>
                    {
                        receta.ingredients.map((ingrediente, i) => {
                            console.log(ingrediente)
                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            )
                        })
                    }
                </ol>
           

            </div>

        );
    }
}

export default MyComponent;