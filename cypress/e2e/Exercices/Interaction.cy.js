///<reference types="cypress"/>
require('@4tw/cypress-drag-drop')


beforeEach(() => {
    cy.visit("https://demoqa.com/");
    // cy.contains("Forms").click();
    cy.contains("Interactions").click();
  });


  describe("Sortable GriD or LIST",()=>{
    it("Sortable Grid",()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.contains("Sortable").click();
        cy.get('#demo-tab-grid').click()
        cy.get('#demo-tab-grid[aria-selected="true"]').should('exist');

      })
      it("Sortable List",()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.contains("Sortable").click();
        cy.get('#demo-tab-list').click()
        cy.get('#demo-tab-list[aria-selected="true"]').should('exist');

      })

  })
  it('selectable',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    cy.contains("Selectable").click();
    cy.contains("Cras justo odio").click();
    cy.contains("Cras justo odio").should('have.css','background-color','rgb(0, 123, 255)')
    cy.contains("Cras justo odio").should('have.css','color','rgb(255, 255, 255)')

  })
  it.only('Droppable', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // En renvoyant false, on empêche Cypress de
        // faire échouer le test en cas d'erreur non interceptée
        return false;
    });

    // Clique sur l'élément avec le texte "Droppable"
    cy.contains("Droppable").click();

    // // Utilisation de {force: true} pour désactiver la vérification d'erreur
    cy.get('#droppable').trigger('event', { force: true });

    // Effectue l'opération de glisser-déposer
    cy.get('#draggable').drag('#droppable')

});

