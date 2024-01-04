///<reference types="cypress"/>


beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
  });
describe("statuts du code",()=> {
  it("Test du statut de la requête 200", () => {
    // Désactive la gestion des exceptions non interceptées pour éviter l'échec du test
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  
    cy.contains("Status Codes").click();
  
    cy.contains("200").click();
  
    // Vérifie le statut de la requête HTTP après le clic
    cy.request('https://the-internet.herokuapp.com/status_codes/200')
      .should((response) => {
        expect(response.status).to.eq(200);
      });
  });
  it("Test du statut de la requête 301", () => {
    // Désactive la gestion des exceptions non interceptées pour éviter l'échec du test
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  
    cy.contains("Status Codes").click();
  
    cy.contains("301").click();
  
    // Vérifie le statut de la requête HTTP après le clic
    cy.request('https://the-internet.herokuapp.com/status_codes/301')
      .should((response) => {
        expect(response.status).to.eq(301);
      });
  });
  
  it("Test du statut de la requête 404", () => {
    // Désactive la gestion des exceptions non interceptées pour éviter l'échec du test
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  
    cy.contains("Status Codes").click();
    cy.contains("404").click();
  
    // Vérifie le statut de la requête HTTP après le clic
    cy.request({
      method: 'GET',
      url: '/status_codes/404',
      failOnStatusCode: false
    })
      .should((response) => {
        expect(response.status).to.eq(404);
      });
  });

  it("Test du statut de la requête 500", () => {
    // Désactive la gestion des exceptions non interceptées pour éviter l'échec du test
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  
    cy.contains("Status Codes").click();
    cy.contains("500").click();
  
    // Vérifie le statut de la requête HTTP après le clic
    cy.request({
      method: 'GET',
      url: '/status_codes/500',
      failOnStatusCode: false
    })
      .should((response) => {
        expect(response.status).to.eq(500);
      });
  });
  
})

it('Curseur horizontal', () => {
  // Désactive la gestion des exceptions non interceptées pour éviter l'échec du test
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.contains('Horizontal Slider').click();

  cy.get('input[type="range"]').as('curseur'); // Assigner un alias pour éviter la duplication

  cy.get('@curseur')
    .invoke('val', 1)     // Définit la valeur à 1 
    .trigger('change')    // Déclenche l'événement "change"
    .click({ force: true });// Clique sur l'élément avec forçage si nécessaire

  cy.get('@curseur')
    .invoke('val').should('equal', '1'); // Vérifie que la valeur est égale à 2
});
it('hovers', () => {
  // Désactive la gestion des exceptions non interceptées pour éviter l'échec du test
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  cy.contains('Hovers').click();
  cy.get('.figure').first().trigger('mouseover').wait(1000)
  cy.get('.figcaption').should('be.visible')             // Vérifie que la balise <figcaption> est visible
  .contains('user 1');    // Remplacez 'Le texte attendu' par le texte spécifique que vous attendez
})

it('dropdownlist',()=>{
    // Désactive la gestion des exceptions non interceptées pour éviter l'échec du test
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  cy.contains("Dropdown").click()
  cy.get('#dropdown').select('1')
  cy.log(cy.get('#dropdown').invoke('val'))

  cy.get('#dropdown').invoke('val').should('eq', '1')
  
})

describe('JavaScript Alerts',()=>{
  it(' JS Alert ',()=>{
      // Désactive la gestion des exceptions non interceptées pour éviter l'échec du test
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  cy.contains('JavaScript Alerts').click();
  cy.contains('Click for JS Alert').click();
  cy.wait(2000)
  cy.get('#result').should('contain','You successfully clicked an alert')

  })
  it(' JS Confirm ',()=>{
    // Désactive la gestion des exceptions non interceptées pour éviter l'échec du test
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
cy.contains('JavaScript Alerts').click();
cy.contains('Click for JS Confirm').click();
cy.wait(2000)
cy.get('#result').should('contain','You clicked: Ok')

})
it(' JS prompt ',()=>{
  // Désactive la gestion des exceptions non interceptées pour éviter l'échec du test
Cypress.on('uncaught:exception', (err, runnable) => {
return false;
});
cy.contains('JavaScript Alerts').click();
cy.contains('Click for JS Prompt').click();
cy.wait(2000)
cy.get('#result').should('contain','You entered: ')

})
})

it('Add element', () => {
  // Désactive la gestion des exceptions non interceptées pour éviter l'échec du test
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.contains('Add/Remove Elements').click();

  // Nombre de fois que vous souhaitez répéter l'action
  const repetitions = 3;

  for (let i = 0; i < repetitions; i++) {
    cy.contains('Add Element').click();
  }
  cy.get('#elements').should('exist');
  cy.get('.added-manually').should('have.length', repetitions);
});
it('delete element', () => {
  // Désactive la gestion des exceptions non interceptées pour éviter l'échec du test
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  cy.contains('Add/Remove Elements').click();
  const repetition = 3;

  for (let i = 0; i < repetition; i++) {
    cy.contains('Add Element').click();
  }

  

  for (let i = 0; i < repetition; i++) {
    cy.contains('Delete').click();
  }
  cy.get('#elements').should('exist');

  cy.get('#elements').invoke('val').should('be.empty');
});
describe('Dynamic Controls',()=>{
  it('disble ',()=>{
    cy.contains('Dynamic Controls').click()
    cy.get('input[type="text"]').should('be.disabled')
    cy.get('input[type="text"]').should('be.empty')
    cy.get('input[type="text"]').should('have.css','background-color','rgb(221, 221, 221)')

  })
  it('enable ',()=>{
    cy.contains('Dynamic Controls').click()
    cy.get('input[type="text"]').should('be.disabled')
    cy.get('input[type="text"]').should('be.empty')
    cy.get('input[type="text"]').should('have.css','background-color','rgb(221, 221, 221)')
    cy.get('button[type="button"]').last().click()
    cy.wait(5000)

    cy.get('input[type="text"]').should('be.enabled')
    cy.get('input[type="text"]').should('have.css','background-color','rgb(255, 255, 255)')
    cy.get('input[type="text"]').type('aziz')
    cy.get('input[type="text"]').invoke('val').should('not.be.empty')

  })
  it('checkbox',()=>{
    cy.contains('Dynamic Controls').click()
    cy.get('input[type="checkbox"]').check()
    cy.get('input[type="checkbox"]').should('be.checked')
  })
  it.only('remove',()=>{
    cy.contains('Dynamic Controls').click()
    cy.get('button[type="button"]').first().click()
    cy.wait(5000)
    cy.get('#message').invoke('text').should('include',"It's gone")

  })

})



