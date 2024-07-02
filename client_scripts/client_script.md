# Client Script no ServiceNow

Um **Client Script** no ServiceNow é um tipo de script que é executado no navegador do usuário (cliente), diretamente na interface da plataforma. Ele é usado para manipular dados, validações e comportamentos de elementos de formulários e páginas no lado do cliente.

## Funcionalidades Principais

- **Manipulação de Campos**: Client Scripts podem ser usados para preencher campos automaticamente, esconder ou exibir campos baseados em certas condições, e até mesmo validar entradas antes de submeter um formulário.
  
- **Integração com UI Policies e UI Actions**: Eles são frequentemente utilizados em conjunto com UI Policies e UI Actions para criar experiências de usuário personalizadas e reativas.
  
- **Execução Assíncrona**: Client Scripts podem ser executados de forma assíncrona para interagir com APIs externas ou realizar operações complexas sem interromper a experiência do usuário.

## Exemplo de Uso

Um exemplo comum de Client Script é validar se um campo obrigatório foi preenchido antes de permitir que um formulário seja submetido. Abaixo está um exemplo simples de um Client Script em ServiceNow:

```javascript
// Client Script para validar campo obrigatório
function onSubmit() {
    var campo = g_form.getValue('campo_obrigatorio');
    if (!campo) {
        alert('Por favor, preencha o campo obrigatório.');
        return false; // Impede que o formulário seja submetido
    }
    return true;
}