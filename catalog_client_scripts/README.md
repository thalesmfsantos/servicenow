# Client Scripts de Catálogo no ServiceNow

Os **Client Scripts de Catálogo** no ServiceNow são scripts executados no navegador do usuário (cliente), diretamente nos formulários de itens do catálogo de serviços ou conjuntos de variáveis. Eles são utilizados para adicionar efeitos dinâmicos, validações e personalizações às interações dos usuários com os itens do catálogo.

## Funcionalidades Principais

Os Client Scripts de Catálogo permitem:

- **Obtenção ou Definição de Valores de Variáveis**: Manipulação dinâmica dos valores de variáveis baseados em interações do usuário.
  
- **Ocultação ou Exibição de Variáveis**: Controle da visibilidade de variáveis com base em condições específicas, melhorando a experiência do usuário.
  
- **Configuração de Obrigatoriedade de Variáveis**: Definição da obrigatoriedade de preenchimento de variáveis antes da submissão de um pedido.
  
- **Validação do Envio do Formulário**: Verificação e validação de entradas de formulário antes da submissão.
  
- **Adição de Itens ao Carrinho**: Facilitação da adição de itens selecionados ao carrinho de compras do catálogo.
  
- **Solicitação Imediata de Itens**: Suporte à solicitação imediata de itens através de scripts automatizados.

## Considerações Importantes

Ao desenvolver Client Scripts de Catálogo, é importante considerar:

- **Contexto de Execução**: Os scripts são executados quando um usuário solicita um item do catálogo de serviços ou quando variáveis para um item do catálogo são exibidas.
  
- **Nomes de Variáveis**: Para serem acessíveis via Client Script, as variáveis devem ter nomes definidos. Variáveis sem nomes não são listadas para manipulação.

- **Interação com Outros Registros**: Variáveis do catálogo de serviços podem ser manipuladas em outros registros usando métodos padrão como `setDisplay`, `setMandatory`, `setValue`, `getValue`, quando passadas via produtores de registro.

- **Atualização Dinâmica**: Utilize a API `g_form.refreshSlushbucket(fieldName)` para atualizar dinamicamente variáveis de coletor de lista.

## Diferenças em Relação aos Client Scripts Padrão

Os Client Scripts de Catálogo apresentam algumas diferenças chave em comparação aos Client Scripts padrão:

- **Seleção de Item do Catálogo**: Em vez de selecionar uma tabela como Incidente, os scripts são aplicados a itens específicos do catálogo ou conjuntos de variáveis, selecionados através de um campo de referência.

- **Uso do Método onChange()**: No contexto de Client Scripts de Catálogo, o método `onChange()` é vinculado a variáveis específicas ao invés de campos. O sistema preenche automaticamente a lista de seleção de nomes de variáveis disponíveis para o item ou conjunto de variáveis selecionado.

---

Este documento oferece uma visão detalhada dos Client Scripts de Catálogo no ServiceNow, destacando suas funcionalidades, considerações importantes e diferenças em relação aos Client Scripts padrão.