/// <reference types="Cypress" />
function scrollLinks() {
  let routes = ['home', 'about', 'projects'];
  cy.wrap(routes).each(route => {
    cy.findByText(new RegExp(route, 'i'), { selector: 'a' })
      .click()
      .hash()
      .should('eq', '#' + route.replace(/\s/, '-'));
  });
}
describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should toggle darkmode', () => {
    cy.findByLabelText('toggle theme')
      .click()
      .should(() => {
        expect(localStorage.getItem('darshansudhakar-theme')).to.eq('dark');
      })
      .click()
      .should(() => {
        expect(localStorage.getItem('darshansudhakar-theme')).to.eq('light');
      });
  });
  
  it('should navigate to blog', () => {
    const editGithubUrl = `https://github.com/darshansudhakar/darshansudhakar.github.io/tree/develop/content/blog/git-getting-started/index.md`;
    cy.findByText(/blog/i, { selector: 'a' })
      .click()
      .findByText(/You may also like/i)
      .findByText(/Tags/i);

    cy.findByText(/Git - Getting started/i, { selector: 'h2' })
      .click()
      .findByText(/Git - Getting started/i, { selector: 'h1' })
      .findByText(/Share on/i)
      .findByText(/Edit post on GitHub/i, { selector: 'a' })
      .should('have.attr', 'href', editGithubUrl);
  });
});
