///<reference types="cypress"/>

beforeEach(() => {
    cy.visit("https://demoqa.com/");
    cy.contains("Alerts, Frame & Windows").click();
    // cy.contains("Practice Form").click();
  });

  describe ("Browser Windows",()=>{
   

    it ("new tab",()=>{
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      cy.contains("Browser Windows").click()
      cy.get('#tabButton').click()
      //   cy.window().then((win) => {
      //     cy.log(win.top.frames.length)
      //     expect(win.top.frames.length).to.equal(3);
      //   })

      cy.window().then((win) => {
        const nombreOnglets = win.top.frames.length;
      
        // Vous pouvez utiliser le nombre d'onglets comme vous le souhaitez
        // Par exemple, afficher le nombre dans la console
        cy.log(`Nombre d'onglets ouverts : ${nombreOnglets}`);
      
        // Vous pouvez également faire une assertion sur le nombre d'onglets
        // Par exemple, vérifier qu'il y a au moins deux onglets ouverts
        expect(nombreOnglets).to.be.gte(2);


    })
  })
    it ("new window",()=>{
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      cy.contains("Browser Windows").click();
      



cy.get('#windowButton').click();
// cy.wait(3000)


cy.window().then((win) => {
  expect(win.parent.frames.length).to.be.gte(2);
});



    })
    it.only ("new window msg",()=>{
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      cy.contains("Browser Windows").click();
      cy.get('#messageWindowButton').click();
      cy.wait(3000)
      // cy.window().should('have.length', 2); // Si deux fenêtres sont ouvertes

      // Obtenez la liste des fenêtres
      // cy.window().then((win) => {
      //   const fenetres = win.parent.frames;
      
      //   // Switch vers la deuxième fenêtre (index 1 dans le tableau)
      //   win.parent.frames[2].focus();
      // });
      // cy.get('/html/body').should('contain',"Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.")
      cy.window().then((win) => {
        const nouvelleFenetre = win.parent.frames[1];
      
        // Accédez au corps (body) du document de la nouvelle fenêtre
        cy.wrap(nouvelleFenetre).its('document.body').should('exist');
  })

})
  })
