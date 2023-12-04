///<reference types="cypress"/>

beforeEach(() => {
    cy.visit("https://demoqa.com/");
    cy.contains("Forms").click();
    cy.contains("Practice Form").click();
  });

  it("First Name", () => {
    // Désactive la gestion des exceptions non interceptées pour éviter l'échec du test
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    // Saisit le texte "test" dans l'élément avec l'ID "firstName"
    cy.get("#firstName").type("test");

    // Obtient la valeur de l'élément avec l'ID "firstName" et effectue une assertion
    cy.get("#firstName")
        .invoke('val') // Utilise 'val' au lieu de 'text' pour obtenir la valeur d'un champ de saisie
        .then((value) => {
            cy.log(value);
            // Utilisez 'eq' au lieu de 'eql' pour comparer la valeur
            expect(value).to.eq("test");
        });
});
it("last Name", () => {
    // Désactive la gestion des exceptions non interceptées pour éviter l'échec du test
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    // Saisit le texte "test" dans l'élément avec l'ID "firstName"
    cy.get("#lastName").type("test");

    // Obtient la valeur de l'élément avec l'ID "firstName" et effectue une assertion
    cy.get("#lastName")
        .invoke('val') // Utilise 'val' au lieu de 'text' pour obtenir la valeur d'un champ de saisie
        .then((value) => {
            cy.log(value);
            // Utilisez 'eq' au lieu de 'eql' pour comparer la valeur
            expect(value).to.eq("test");
        });
});
it.only("last Name", () => {
    // Désactive la gestion des exceptions non interceptées pour éviter l'échec du test
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
cy.get('#gender-radio-1').click({force: true} )

cy.get('#gender-radio-1').should("be.checked")
});
