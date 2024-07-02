function onChange(control, oldValue, newValue, isLoading) {
    // Verifica se está carregando ou se o novo valor está vazio
    if (isLoading || newValue == '') {
        return;
    }

    // Função para formatar um CPF
    function formatCPF(value) {
        if (value.length === 11) {
            return value.substring(0, 3) + '-******-' + value.substring(9, 11);
        }
        return value; // Retorna o valor original se não tiver 11 dígitos
    }

    // Faz um GlideRecord para buscar o registro na tabela especificada
    var tableName = 'sys_user'; // Tabela de exemplo
    var fieldName = 'u_cpf'; // Nome do campo de exemplo para o CPF
    var idField = 'sys_id'; // Campo que identifica o registro na tabela
    var idValue = newValue; // Valor do ID para buscar na tabela

    var gr = new GlideRecord(tableName);
    gr.addQuery(idField, idValue);
    gr.query(function(result) {
        if (result.next()) {
            var fieldValue = result.getValue('u_doc_number'); // Campo que contém o CPF na tabela (exemplo: 'u_doc_number')
            if (fieldValue) {
                fieldValue = fieldValue.replace(/\D/g, ''); // Remove caracteres não numéricos do CPF
                var formattedValue = formatCPF(fieldValue); // Formata o CPF usando a função formatCPF

                // Define o valor formatado no campo desejado
                g_form.setValue(fieldName, formattedValue);
            }
        } else {
            // Mensagem de erro se o registro não for encontrado ou se não houver CPF disponível
            g_form.addErrorMessage('Registro não encontrado ou sem CPF disponível.');
        }
    });
}
