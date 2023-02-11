import { click } from "@testing-library/user-event/dist/click";

describe('Dashboard', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should have access to the Moldy Turnips website', () => {
    cy.visit('http://localhost:3000/')
  })
  it("should show the Moldy Turnips logo when the page is loaded", () => {
    cy.get('[alt="Website Logo"]')
      .should('be.visible')
  })
  it("should display a random movie above all other movies in the movie banner", () => {
    cy.get(".movie-banner")
      .should("be.visible")
  })
  it('Should have a list of 40 movie cards shown on page load', () => {
    cy.get('.card')
      .should('have.length', 40)
      .should('be.visible')
  })
  it('should be able to see more details when clicking a specific movie card', () => {
    cy.get('[id=1013860]')
      .click()
    cy.visit('http://localhost:3000/movies/1013860')
      .get('.highlight-image')
      .get('.highlight-overview');
  })
})