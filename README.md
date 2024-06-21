# bk-project
## Convenções de Nomeclatura  
### Modos de Escrita (estilo + respectivo nome) 
- camalCase
- PascalCase
- lower snake_case
- upper SNAKE_CASE
- kebab-case
### Diretórios e arquivos 
- **DIRETÓRIOS**: lower snake_case
- arquivos **JAVASCRIPT**: PascalCase
- arquivos **CSS/PUG/HTML**: kebab-case

### Código CSS 
- Uso de kebab-case

### Marcações HTML 
- Uso de camalCase
> [!WARNING]
> Sem separação entre diferentes palavras(ou seja, todas as letras em minúsculo)

### Código PUG  
- Varia conforme qual tipo de código esta sendo especificado, para código nativo PUG se usa o padrão HTML, para codigo nativo JS se usa o padrão javascript
-  Uso de camalCase para variáveis PUG

### Código JAVASCRIPT  
- **Variáveis, funções, Objetos literais e propriedades de objetos que têm pretensões de serem mutáveis** : *camalCase*
- **funções construtoras e classes** : *PascalCase*
- **Nomeação de variáveis, constantes e funções que representam dados imutáveis (que devem evitar de serem alterados, geralmente tipos primitivos) ou definições de configuração** : *lower snake_case*
-  **Contantes que têm um escopo global (com clara pretensão de serem usadas em códigos externo de onde são declaradas) ou constantes que são usadas como chave em um objeto literal (ou seja uma propriedade cujo valor é usado para acessar algum recurso externo)** : *upper SNAKE_CASE*

### DataBase

- **Database name** : *upper SNAKE_CASE*
- **Table/Document type name** : *lower snake_case*
- **Column/Propierty name** : *camalCase*
