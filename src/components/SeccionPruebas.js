import React, { Component } from 'react'
import MyComponent from './MyComponent';
import Bowls from './Bowls'

class SeccionPruebas extends Component {

    contador = 0;

    constructor(props){
        super(props)

        this.state = {
            contador: 0
        };
    }

    HolaMundo(nombre) { //Otra forma de llamar funcion var Hola Mundo = () => { El codigo va aqui }
        var presentacion = (
            <h2>Hola soy la leyenda{nombre}</h2>
        );
        return presentacion;
    }

    sumar(){
        // this.contador = this.contador + 1; NO FUNCIONA
        // this.state.contador = this.state.contador + 1 NO FUNCIONA
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar(){
        // this.contador = this.contador - 1; NO FUNCIONA
        // this.state.contador = this.state.contador - 1 NO FUNCIONA
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        var nombre = "Daniel";

        return (
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>

                <p>
                    Bienvenido al Proyecto de Danito
                </p>

                <h2 className="subheader">Funciones</h2>
                {this.HolaMundo(nombre)}

                <h2 className="subheader">Componentes</h2>
                <section className='components'>
                    <MyComponent />
                    <Bowls />
                </section>

                <h2 className="subheader">Estado</h2>
                <p>
                    Contando: {this.state.contador}
                </p>
                <p>
                    <input type='button' value="Sumar" onClick={this.sumar.bind(this)} />
                    <input type='button' value="Restar" onClick={this.restar.bind(this)}/>
                </p>


            </section>
        );
    }
}

export default SeccionPruebas;