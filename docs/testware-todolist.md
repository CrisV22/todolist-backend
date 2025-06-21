# ✅ Testware – Lista de Tarefas (To-do List)

## 🎯 Cenários de Teste com Storytelling (GUIA FUNCIONAL DO USUÁRIO FINAL)

| ID   | Título do cenário de teste                                                              |
|------|------------------------------------------------------------------------------------------|
| TC01 | Organização das tarefas de estudo por um vestibulando com dificuldade de concentração   |
| TC02 | Criação de lembretes rápidos por uma mãe durante as tarefas domésticas                  |
| TC03 | Remoção de uma tarefa equivocada por um profissional em ambiente de alta distração      |
| TC04 | Lista intensiva de tarefas por um organizador de eventos antes de uma feira importante  |
| TC05 | Prevenção de envio acidental de tarefas vazias por um usuário com mobilidade reduzida   |

---

## 📊 Tabela de Casos de Teste (Tabela de Decisão com Técnicas Aplicadas)

### 🔍 Variáveis envolvidas

- **Título da tarefa** (campo de entrada)
- **Ação** (Adicionar ou Deletar)
- **Qtd. de tarefas na lista** (0 a muitos)
- **Estado do campo** (preenchido, vazio, inválido)
- **Resultado esperado** (renderização, persistência, exclusão, feedback)

---

### 🧪 Tabela de Testes: Técnicas combinadas

| ID    | Título da tarefa                     | Ação       | Qtd. na lista | Resultado esperado                                          | Tipo de teste                           |
|--------|--------------------------------------|------------|----------------|--------------------------------------------------------------|------------------------------------------|
| TC01  | "Estudar Matemática"                | Adicionar  | 0              | Item adicionado e exibido corretamente                      | 🟢 Testes positivos (caminho feliz)      |
| TC02  | "Fazer compras no mercado"          | Adicionar  | 1              | Item inserido no final da lista                             | 🟢 Testes positivos (caminho feliz)      |
| TC03  | "*@%$"          | Deletar    | 2 → 1          | Item removido da lista                                      | 🟢 Testes positivos (caminho feliz)      |
| X  | "Aula de inglês"                    | Adicionar  | 1              | Item inserido e botão de deletar ativado                    | 🟢 Testes positivos (caminho feliz)      |
| TC05  | "Comprar leite"                     | Adicionar  | 99             | Lista atualizada com item 100                               | 🟢 Testes positivos (caminho feliz)      |
| TC06  | "  Ligar para Ana  "                | Adicionar  | 2              | Espaços ignorados, tarefa adicionada                        | 🟢 Testes positivos com parâmetros opcionais |
| TC07  | "123456"                            | Adicionar  | 1              | Números como texto são aceitos                              | 🟢 Testes positivos com parâmetros opcionais |
| TC08  | "Backup @ 23h"                      | Adicionar  | 1              | Caracteres especiais permitidos                             | 🟢 Testes positivos com parâmetros opcionais |
| TC09  | "Reunião com @diretoria"           | Adicionar  | 2              | Texto com @ aceito                                          | 🟢 Testes positivos com parâmetros opcionais |
| TC10  | "Apagar tarefa já deletada"        | Deletar    | inexistente    | Sem erro, ignora ação                                       | 🟠 Testes negativos com inputs válidos   |
| TC11  | ""                                  | Adicionar  | 0              | Mensagem de erro exibida (campo obrigatório)                | 🔴 Testes negativos com inputs inválidos |
| TC12  | "     "                             | Adicionar  | 0              | Mensagem de erro exibida (somente espaços)                  | 🔴 Testes negativos com inputs inválidos |
| TC13  | null                                | Adicionar  | 0              | Erro tratado com mensagem amigável                          | 🔴 Testes negativos com inputs inválidos |
| TC14  | undefined                           | Adicionar  | 0              | Entrada rejeitada sem crash                                 | 🔴 Testes negativos com inputs inválidos |
| TC15  | 999999                              | Adicionar  | 0              | Rejeita número puro (sem conversão implícita)               | 🔴 Testes negativos com inputs inválidos |
| TC16  | "T".repeat(255)                     | Adicionar  | 1              | Tarefa aceita no limite de caracteres                       | 🟢 Testes positivos (caminho feliz)      |
| TC17  | "T".repeat(256)                     | Adicionar  | 1              | Tarefa rejeitada por ultrapassar limite                     | 🔴 Testes negativos com inputs inválidos |
| TC18  | "", null, undefined, "   ", 256+char| Adicionar  | 0              | Nenhuma tarefa criada, mensagens exibidas                   | 💥 Testes destrutivos                    |
| TC19  | Adicionar 1000 tarefas              | Adicionar  | 0 → 1000       | Sistema continua funcional e responsivo                     | 💥 Testes destrutivos                    |
| TC20  | Inserção + deleção simultânea       | Add/Delete| 10             | Sem duplicação ou perda incorreta                           | 💥 Testes destrutivos                    |

---

## 🔍 Técnicas aplicadas e observações

| Técnica                         | Aplicação prática                                                                 |
|--------------------------------|------------------------------------------------------------------------------------|
| **Teste positivo**              | Títulos simples e funcionais, com resposta esperada positiva                      |
| **Parâmetros opcionais**        | Espaços, números ou caracteres especiais aceitos como válidos                     |
| **Partição de equivalência**    | Campo vazio vs campo preenchido                                                  |
| **Análise de valor limite**     | Comparação entre 255 (aceito) e 256 (rejeitado) caracteres                        |
| **Teste negativo com input válido** | Ação de deletar tarefa já deletada                                               |
| **Teste destrutivo**            | 1000 tarefas, inputs simultâneos, múltiplas ações extremas                       |

---

📌 **Observação Final:**  
Esse documento é uma base viva e pode ser continuamente aprimorado com novas entradas, melhorias de cobertura e automações futuras com Cypress (incluindo comandos customizados e data-driven testing).
