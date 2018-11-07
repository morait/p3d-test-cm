import React, { Component, Fragment } from 'react';
import {withRouter} from 'react-router-dom';
import Data from '../resources/component.json';


// Pseudo helpers para generar el componente
const CompH1 = (props) => (
  <div className="comp-h1">
    <h1>
      {props.title}
    </h1>
  </div>
);

const CompParagraph = (props) => (
  <div className="comp-p">
    {props.paragraphs.map((text,i) => { 
      return ( <p key={i}> {text} </p>)
    })}
  </div>
);


// Este helper usa los otros para crear la base de un componente.
const HireMe = (props) => (
  <div>
    <CompH1 title={props.title} />
    <CompParagraph paragraphs = {props.paragraphs} />
  </div>
);

// lista de helpers disponibles para crear un componenteL
const stock = {
  CompH1,
  CompParagraph,
  HireMe
};



// Generador de componentes 
class Generator extends Component {
  
  get root() {
    return this.props.root;
  }
  
  get rSection() {
    debugger;
    return this.createElement(this.root);
  }
  
 
  createElement = (def) => {
    return React.createElement(
      stock[def.component], 
      def.props,
      ((def.props || {}).children || [])
        .map(c => this.createElement(c))
    );
  };
  
  render() {
    return (
      <div>
        {this.rSection}
      </div>
    );
  }
}


// Recorre las secciones (componentes), del json para ver si se genera uno o más componentes.
class DynamicPage extends Component {
  
  get sections() {
    return this.props.page.sections;
  }
  
  get rSections() {
    return this.sections.map(
      s => <Generator key={s.id} root={s} />
    );
  }
  
  render() {
    return (
      <div className="dynamicpage-component">
        {this.rSections}
      </div>
    );
  }
}


// Punto final donde se exporta sl componente generado.
class Page extends Component {
  constructor(props) {
    super(props);
    this.data = Data;
  } 

  render() {

    return (
      <div>
        <h1> Component created from json file </h1>
        <DynamicPage page={this.data} />
        <div className="comp-btn">
          <button class="button" onClick={() =>  this.props.history.push(this.data.sections[0].props.buttonPath)}> Click Me To Check Awesome Cube!!! {this.props.buttonPath}
         </button>
        </div>
      </div>
    )

  }
}


export default Page;
