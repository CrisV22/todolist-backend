describe('Criação de lembretes rápidos por uma mãe durante as tarefas domésticas', () => {
  beforeEach(() => {
    // Acessa a aplicação
    cy.visit('/');

    // Garante que a lista vai estar vazia
    cy.get('#nome-todo')
      .should('exist')
      .clear();
  });

  it('Deve permitir adicionar a tarefa "Ligar para o pediatra" com sucesso', () => {
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

  it('Deve permitir adicionar a tarefa "Fazer compras no mercado"', () => {
    // Preenche o campo de nova tarefa com o lembrete
    cy.get('#nome-todo')
      .type('Fazer compras no mercado');

    // Clica no botão de adicionar
    cy.get('#add-button')
      .should('be.enabled')
      .click();

    // Verifica se a tarefa foi adicionada corretamente
    cy.contains('Fazer compras no mercado')
      .should('exist')
      .and('be.visible');
  });

  it('Deve permitir excluir uma tarefa adicionada por engano', () => {
    // Preenche o campo de nova tarefa com o lembrete
    cy.get('#nome-todo')
      .type('*@%$');

    // Clica no botão de adicionar
    cy.get('#add-button')
      .should('be.enabled')
      .click();

    // Exclui a tarefa
    cy.get('ul li:last-child button')
      .click();

    // Verifica se foi removida
    cy.contains('*@%$')
      .should('not.exist');
  });

  after(() => {
    cy.get('ul li').then(($items) => {
      if ($items.length) {
        cy.wrap($items).each(($el) => {
          cy.wrap($el).find('button').click({ force: true });
        });
      }
    });
  });
});
