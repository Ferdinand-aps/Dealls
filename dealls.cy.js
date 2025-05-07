

describe('Mentoring Feature Automation - Dealls', () => {

  beforeEach(() => {
    it('finds the content "Bi"')
    cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')

    cy.contains("Bi")
  });

  it('Logs in as a user', () => {
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();


    cy.url().should('include', '/dashboard');
    cy.contains('Welcome').should('exist');
  });

  it('Searches for a mentor', () => {
    cy.get('input[placeholder="Search mentors"]').type('Design');
    cy.get('button').contains('Search').click();

    // Validate results
    cy.contains('Mentor in Design').should('exist');
    cy.get('.mentor-card').should('have.length.at.least', 1);
  });

  it('Schedules a session with a mentor', () => {
   
    cy.get('.mentor-card').first().click();

    
    cy.get('.schedule-button').contains('Book').click();
    cy.get('select[name="date"]').select('2025-05-10');
    cy.get('select[name="time"]').select('10:00 AM');

    
    cy.get('button').contains('Confirm').click();

    
    cy.contains('Your session has been scheduled').should('exist');
  });
});
