# servicenow

Este diretório contém uma série de códigos usados no projetos para ServiceNow. A estrutura do diretório está organizada para facilitar a navegação e manutenção dos diferentes tipos de scripts usados no desenvolvimento ServiceNow.

## Estrutura do Diretório

- **business_rules/**: Scripts de Regras de Negócios.
- **catalog_client_scripts/**: Scripts de Catálogo de Cliente.
- **client_scripts/**: Scripts de Cliente.
- **script_includes/**: Scripts Incluídos.

### business_rules/

Contém scripts de regras de negócios que são executados no servidor. Esses scripts ajudam a aplicar lógica de negócios em formulários e tabelas.

**Exemplo**: `example_business_rule.js`

### client_scripts/

Contém scripts de cliente que são executados no navegador do usuário. Esses scripts são usados para manipular formulários e dados no lado do cliente.

**Exemplo**: `example_client_script.js`

### script_includes/

Contém scripts que são incluídos e reutilizados em outras partes do código. Estes são scripts de função de utilidade que podem ser chamados a partir de outros scripts.

**Exemplo**: `example_script_include.js`

## Como Contribuir

Para adicionar ou modificar scripts neste diretório, siga as etapas abaixo:

1. **Navegue até o diretório apropriado**:
   ```sh
   cd servicenow/client_scripts