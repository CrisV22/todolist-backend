describe('Criação de lembretes rápidos por uma mãe durante as tarefas domésticas', () => {
  it('Deve permitir adicionar a tarefa "Ligar para o pediatra" com sucesso', () => {
    // Acessa a aplicação
    cy.visit('http://localhost:5173');

    // Preenche o campo de nova tarefa com o lembrete
    cy.get('#nome-todo')
      .should('be.visible')
      .type('Ligar para o pediatra');

    // Clica no botão de adicionar
    cy.get('#add-button')
      .should('be.enabled')
      .click();

    // Verifica se a tarefa foi adicionada corretamente
    cy.contains('Ligar para o pediatra')
      .should('exist')
      .and('be.visible');
  });
});
