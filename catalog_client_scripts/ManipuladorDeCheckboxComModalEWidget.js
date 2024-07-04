/*
 * Nome do Script: ManipuladorDeCheckboxComModalEWidget
 * 
 * Descrição:
 * Este script invoca um Widget dentro de um Modal no ServiceNow. Dependendo da ação do usuário dentro do Modal (Aceitar ou Recusar), 
 * ele manipula uma checkbox:
 * - Se o usuário clicar em "Aceitar", a checkbox é marcada como somente leitura.
 * - Se o usuário clicar em "Recusar", a checkbox é desmarcada.
 * 
 * Requisitos:
 * 1. Uma oferta no ServiceNow com um campo do tipo checkbox a ser manipulado (por exemplo, 'nome_da_checkbox').
 * 2. Um Widget criado e disponível no ServiceNow que será invocado no modal (por exemplo, 'nome_do_widget').

 * Implementação:
 * O script deve ser adicionado como um Script de Cliente (Catalog Client Script) no formulário ou catálogo onde deseja-se a funcionalidade.
 * Certifique-se de ajustar os nomes dos campos e widgets conforme a sua configuração específica.
 */

function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    // Configurações do modal
    spModal.open({
        title: 'Título do Modal',  // Título do modal
        size: 'lg',  // Tamanho do modal (opções: 'sm', 'md', 'lg')
        widget: 'nome_do_widget',  // Nome do widget a ser invocado
        buttons: [
            {
                label: 'Recusar',  // Texto do botão "Recusar"
                cancel: true  // Define que este botão cancela a ação
            },
            {
                label: 'Aceitar',  // Texto do botão "Aceitar"
                primary: true  // Define que este botão é primário (destacado)
            }
        ]
    }).then(function() {
        // Função chamada quando o usuário clica em "Aceitar"
        g_form.setReadOnly('nome_da_checkbox', true);  // Torna a checkbox somente leitura
    }, function() {
        // Função chamada quando o usuário clica em "Recusar"
        g_form.setValue('nome_da_checkbox', false);  // Desmarca a checkbox
        g_form.setReadOnly('nome_da_checkbox', false);  // Define a checkbox como editável
    });
}
