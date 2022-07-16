/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
describe('login', () => {
  before(() => {
    cy.visit('http://localhost:3001/login')
  });

  it('boton login', function () {
    cy.wait(500);
    cy.get('#acceder').first().click({force: true})
    cy.get('#acceder').first().should('have.length', 1).should('have.text', 'Iniciar Sesión')

  });

  it('Logearte', () => {
    //cy.intercept('POST', 'http://localhost:3001/login').as('getLogin')

    cy.get('#inputusername').type('carla');
    cy.get('#inputpassword').type('carla');
    cy.get('#acceder').click()

    //cy.wait('@getLogin').then(res => {
    //  console.log("Cypress Aaaaaaa",res)
    //})
  });
  
  it('url despues del login', () => {
    cy.url()
      .should('be.equal', 'http://localhost:3001/pelicula')
  })
});

describe('Crear Pelicula', () => {
  it('Como Crear Una Pelicula', () => {
      cy.visit('http://localhost:3001/login')
      //Relleno los campos de mi login 
      cy.get('#inputusername').type('carla');
    cy.get('#inputpassword').type('carla');
    cy.get('#acceder').click()

    cy.wait(3000)
    //Ingreso a la Url para crear peliculas
      cy.visit('http://localhost:3001/pelicula/create')
   //Relleno los inputs de mi formulario de pelicula
    cy.get('#inputnombrepelicula').type('Gol')
    cy.get('#inputcodigopelicula').type('123')
    cy.get('#inputdescripcionpelicula').type('Esta Es Una Pelicula De Futbol')
    cy.get('#btnguardarpelicula').click()
  })
})

describe('Crear Genero', () => {
  it('Como Crear Un Genero', () => {
      cy.visit('http://localhost:3001/login')
      //Relleno los campos de mi login 
      cy.get('#inputusername').type('carla');
    cy.get('#inputpassword').type('carla');
    cy.get('#acceder').click()

    cy.wait(3000)
    //Ingreso a la Url para crear generos
      cy.visit('http://localhost:3001/genero/create')
   //Relleno los inputs de mi formulario de pelicula
    cy.get('#inputnombregenero').type('Terror')
    cy.get('#btnguardargenero').click()
  })
})
