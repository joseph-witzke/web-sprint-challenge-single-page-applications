describe("Pizza app", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/pizza");
    });

    it("sanity test", () => {
        expect(1 + 2).to.equal(3);
    });

    it("gets name input and adds name", () => {
        cy.get('input[name="name"]').should("exist");
        cy.get('input[name="name"]').should("have.value", "");
        cy.get('input[name="name"]').type("Joseph");
        cy.get('input[name="name"]').should("have.value", "Joseph");
    });

    it("checks if user can click checkboxes", () => {
        cy.get('[type="checkbox"]').check()
    });

    it("can user click submit", () => {
        cy.get('input[name="name"]').type("Joseph"); 
        cy.get('select').select('large').should('have.value', 'large')
        cy.get('[type="checkbox"]').check()
        cy.contains("Add to Order").click();
    });
});
