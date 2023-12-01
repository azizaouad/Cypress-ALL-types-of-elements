///<reference types="cypress"/>

beforeEach(() => {
  cy.visit("https://demoqa.com/");
  cy.contains("Elements").click();
});

it("Text BOX", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
//   cy.wait(2000);
  cy.contains("Text Box").click();
//   cy.wait(2000);

  cy.get("#userEmail").type("test01");
  cy.get("#currentAddress").type("test02");
  cy.get("#permanentAddress").type("test03");
  cy.get("#submit").click();
});

it("Check Box", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
  cy.get("#item-1").click();
  cy.get('[type="button"]').should('have.length', 4).eq(3).click();
  cy.wait(2000);
//   cy.get('.rct-checkbox').should('have.have.length',4).eq(1).check();
cy.get('[type="checkbox"]').first().check({force: true}) ;
// Sélectionnez l'élément <span> par son sélecteur
cy.get('#result > :nth-child(1)').invoke('text').then((valeurSpan) => {
  // Utilisez la valeur textuelle du <span> comme nécessaire
  cy.log(`La valeur du <span> est : ${valeurSpan}`);
  expect(valeurSpan).to.contain('You have selected :');
});
});;


it("Radio button", () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  cy.get("#item-2").click();
  cy.get(':nth-child(3) > .custom-control-label').click();
  // Sélectionnez l'élément <span> par son sélecteur
cy.get('.mt-3').invoke('text').then((valeurSpan) => {
  // Utilisez la valeur textuelle du <span> comme nécessaire
  cy.log(`La valeur du <span> est : ${valeurSpan}`);
  expect(valeurSpan).to.contain('You have selected');
});
});

describe("Web Tables",()=>{
  it ("add user",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get("#item-3").click();
    cy.get("#addNewRecordButton").click();
    cy.get('[id="firstName"]').type("test00");
    cy.get('[id="lastName"]').type("test01");
    cy.get('[id="userEmail"]').type("test01@gmail.com");
    cy.get('[id="age"]').type("27");
    cy.get('[id="salary"]').type("2200");
    cy.get('[id="department"]').type("testing");
    cy.get('[id="submit"]').click();
  
    let found = false;
  
    cy.get(".rt-td").each((li, index, list) => {
      cy.wrap(li).invoke('text').then((text) => {
        // cy.log(      text === "test00")
        if (isMatchingRow(text, list, index)) {
          found = true;
          // cy.log(text , 'msg msg')
          
        }
      });
    }).then(() => {
      // cy.log(isMatchingRow);
      expect(found).to.be.true;
    });
    
    function isMatchingRow(text, list, index) {
      return (
        text === "test00" &&
        list[index + 1]?.textContent === "test01" &&
        list[index + 2]?.textContent === "27" &&
        list[index + 3]?.textContent === "test01@gmail.com" &&
        list[index + 4]?.textContent === "2200" &&
        list[index + 5]?.textContent === "testing"
      );
    }
    
  });
  it("Search users",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get("#item-3").click();
    cy.get('[id="searchBox"]').type("Cierra");
    cy.get('[id="searchBox"]').type('{enter}');
    let found = false;
  
    cy.get(".rt-td").each((li, index, list) => {
      cy.wrap(li).invoke('text').then((text) => {
        // cy.log(      text === "test00")
        if (isMatchingRow(text, list, index)) {
          found = true;
          // cy.log(text , 'msg msg')
          
        }
      });
    }).then(() => {
      // cy.log(isMatchingRow);
      expect(found).to.be.true;
    });
    
    function isMatchingRow(text, list, index) {
      return (
        text === "Cierra" 
        // list[index + 1]?.textContent === "test01" &&
        // list[index + 2]?.textContent === "27" &&
        // list[index + 3]?.textContent === "test01@gmail.com" &&
        // list[index + 4]?.textContent === "2200" &&
        // list[index + 5]?.textContent === "testing"
      );
    }


  })
  it("Edit users",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get("#item-3").click();
    cy.get('[id="edit-record-1"]').click();
    cy.get('[id="firstName"]').type("test00");
    cy.get('[id="lastName"]').type("test01");
    cy.get('[id="userEmail"]').type("test01@gmail.com");
    cy.get('[id="age"]').type("27");
    cy.get('[id="salary"]').type("2200");
    cy.get('[id="department"]').type("testing");
    cy.get('[id="submit"]').click();
    let found = false;
  
    cy.get(".rt-td").each((li, index, list) => {
      cy.wrap(li).invoke('text').then((text) => {
        // cy.log(      text === "test00")
        if (isMatchingRow(text, list, index)) {
          found = true;
          // cy.log(text , 'msg msg')
          
        }
      });
    }).then(() => {
      // cy.log(isMatchingRow);
      expect(found).to.be.true;
    });
    
    function isMatchingRow(text, list, index) {
      return (
        text === "test00" &&
        list[index + 1]?.textContent === "test01" &&
        list[index + 2]?.textContent === "27" &&
        list[index + 3]?.textContent === "test01@gmail.com" &&
        list[index + 4]?.textContent === "2200" &&
        list[index + 5]?.textContent === "testing"
      );
    }


  })

})

describe ("Buttons",()=>{
  it ("right click",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get("#item-4").click();
    cy.get("#rightClickBtn").rightclick();
    cy.get("#rightClickMessage").should("be.visible");

  })
  it ("dbl click",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get("#item-4").click();
    cy.get("#doubleClickBtn").dblclick();
    cy.get("#doubleClickMessage").should("be.visible");


  })
  it (" click",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get("#item-4").click();
    cy.get('[type="button"]').last().click();
    cy.get("#dynamicClickMessage").should("be.visible");

  })


})

describe("links",()=>{
  it("created",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get("#item-5").click();

    cy.contains("Created").click();
    cy.get("#linkResponse").should("contain","text Created");
  })
  it("no content",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get("#item-5").click();

    cy.contains("No Content").click();
    cy.get("#linkResponse").should("contain","text No Content");
  })

  it("forbiden",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.get("#item-5").click();

    cy.contains("Forbidden").click();
    cy.get("#linkResponse").should("contain","text Forbidden");
  })
})
it("valid link",()=>{
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  cy.get("#item-6").click();
  cy.get('[href="http://demoqa.com"]').trigger('click', { ctrlKey: true });
  cy.url().should("eql","https://demoqa.com/");
})
it("valid link",()=>{
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  cy.get("#item-7").click();
  cy.get("#downloadButton").click();
})
it.only("dynamic prop",()=>{
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  cy.get("#item-8").click();
  cy.wait(5000);
  cy.get("#enableAfter").should("be.enabled");
  cy.get("#visibleAfter").should("be.visible");

})