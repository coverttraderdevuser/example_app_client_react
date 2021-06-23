describe('The Login Page', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:3000') 
    })
    it('Contains Username field', () => {
        cy.contains('Username') // label
        cy.get('.username') // field

    })
    it('Contains Password field', () => {
        cy.contains('Password') // label
        cy.get('.password')  // field

    })
    it('Password field is type password', () => {
        cy.get('.password').get('[type="password"]')
        
    })
    it('Contains a Submit Button', () => {
        cy.get('.submit').get('[type="submit"]') 
        

    })
    // Successful log in attempt
    it('Successful login', () => {
        cy.visit('http://localhost:3000') // Repeated here so that this test has no external dependency
        cy.get('.username').type("pesronSuccess")
        cy.get('.password').type("password1")
        cy.get('.submit').get('[type="submit"]').click()
        // http://localhost:3000/home
        cy.url().should('contain', '/home');

    })   

    // Failed login attempt
    it('Failed login', () => {
        cy.visit('http://localhost:3000') // Repeated here so that this test has no external dependency

        cy.login("personFailure", "password2")
        // cy.get('.username').type("personFailure")
        // cy.get('.password').type("password2")
        // cy.get('.submit').get('[type="submit"]').click()
        // http://localhost:3000/home

        cy.get(".login-failed-message")
        .then($button => {
        if ($button.is(':visible')) {
            expect(true).to.equal(true)
            
            //cy.get('.text-center modal-header button[class="close"]').click()
        } else {
            expect(true).to.equal(false)
        }
        })



    })  

  })


