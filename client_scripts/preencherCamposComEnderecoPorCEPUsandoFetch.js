function onChange(control, oldValue, newValue, isLoading) {
    // Verifica se o formulário está carregando ou se o novo valor está vazio
    // Se o formulário está carregando (isLoading é verdadeiro) ou se o novo valor é uma string vazia, o script não faz nada
    if (isLoading || newValue === '') {
        return;
    }

    // Define a URL do Web Service REST com o código fornecido
    // Substitua a URL de exemplo pela URL real do Web Service que fornece os dados do CEP
    // encodeURIComponent é usado para garantir que o valor do código esteja corretamente formatado para a URL
    
    // var url = 'https://opencep.com/v1/' + encodeURIComponent(newValue);
    var url = 'https://exemplo.com/v1/' + encodeURIComponent(newValue);

    // Realiza a chamada ao Web Service usando Fetch API
    fetch(url)
        .then(response => response.json())  // Converte a resposta da requisição para JSON
        .then(data => {
            // Verifica se a resposta contém um erro
            if (data.error) {
                // Se houver um erro (por exemplo, CEP não encontrado), exibe uma mensagem de erro para o usuário
                g_form.addErrorMessage('Código não localizado!');
            } else {
                // Se a resposta for bem-sucedida, preenche os campos do formulário com os dados retornados
                // Os campos são preenchidos com os valores retornados pela API
                // Caso algum valor esteja ausente, é atribuído uma string vazia para evitar erros
                g_form.setValue('endereco', data.logradouro || '');        // Preenche o campo 'endereco' com o logradouro retornado
                g_form.setValue('bairro', data.bairro || '');              // Preenche o campo 'bairro' com o bairro retornado
                g_form.setValue('estado', data.uf || '');                  // Preenche o campo 'estado' com a sigla do estado (UF) retornada
                g_form.setValue('cidade', data.localidade || '');          // Preenche o campo 'cidade' com a localidade retornada
                g_form.setValue('numero', data.numero || '');              // Preenche o campo 'numero' com o número retornado
                g_form.setValue('complemento', data.complemento || '');    // Preenche o campo 'complemento' com o complemento retornado
            }
        })
        .catch(error => {
            // Captura e exibe qualquer erro que ocorra durante a chamada ao Web Service
            // A mensagem de erro é exibida para informar o usuário sobre o problema
            g_form.addErrorMessage('Erro ao buscar dados: ' + error.message);
        });
}
