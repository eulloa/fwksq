describe('Theme', () => {
  it('clicking on theme switch toggles dark mode', () => {
    cy.visit('/').get('.theme-switch').click();

    cy.get('html').should('have.class', 'dark');

    cy.get('.theme-switch').click();

    cy.get('html').should('not.have.class', 'dark');
  });

  it('automatically applies dark mode when dark mode preferences are on', () => {
    window.localStorage.setItem('dark', 'on');

    cy.visit('/');

    cy.get('html').should('have.class', 'dark');
  });
});
