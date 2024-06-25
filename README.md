# bk-project
## Organização de Código 
### Express 
- **Frameword que dá ao Javascript o poder de criar codigo no lado do servidor, interceptando requisições ao servidor e executando algum comando com base nas informações continas na requisição**
- Pastas principais:
  - **views**: Contém todos os arquivos da engine de vizualização, arquivos estes responsável por gerar html dinamicamente
  - **models**: Contém todas as coleções do banco de dados, coleções essas usadas de base para gerar documentos que são armazenados em um banco de dados, podendo serem acessados por exemplo por uma ODM que pode alterar e obter dados do banco de dados
  - **routes**: Contém todos os arquivos que contém codigo que intercepta requisições enviadas pelo cliente, podendo responder no proprio arquivo ou chamando um script na pasta ***controllers***
  - **public**: Possuem todos os arquivos que são "estáticos" funcionando no lado do cliente
  - **configs**: Contém arquivos responsáveis pelas configurações usadas em contexto global, para acesso ao banco de dados ou a um sistema externo especifico como o sistema de transferência de dados jwt.
  - **controllers**: Contém todos os arquivos que contém codigos específicos para criar métodos que são feitos para responder uma solicitação específica do cliente
- Arquivos principais:
   - **www.js**: localizando dentro da pasta bin, responsável por fazer as configurações mais básicas do servidor, para posteriormente, chamar o ponto de entrada de fato da aplicação do servidor
   - **app.js** responsável por carregar recursos externos essenciais para o funcionamento e manutenção da aplicação e gerenciador das rotas acessadas diretamente do servidor principal(ou seja, recursos que não são acessados como subrecurso de outro recurso)
   - **Package.json**: Responsável por instalar e gerenciar as dependências do projeto
   - 
### Javascript Client
  - ***Arquivo index***: Reponsável por importar arquivos externos(ponto de partida da aplicação js)
  - ***Arquivo  eventListener***: Responsável por chamar ouvintes de eventos gerados por ações do usuario na interação usuário-página
  - ***Arquivo handlers***: contém os arquivos que criam respontas aos eventos do usuário
### PUG
  - Inserido dentro da pasta views, com nomes fazendo referência a uma parte da página, o arquivo ***layout.pug*** faz referência a configurações essenciais do cabeçalho e do elemento raiz da página(html), e ***error.pug*** responsável por exibir mensagens de erro
### CSS  
  - Dentro da pasta stylesheets, se tem os arquivos css e arquivo images que contém todas as imagens usadas pela página de forma estática
     - Divisão de arquivos css por zona de influência das suas regras(quais estruturas html elas alteram) ou em alguns casos funções que são atribuidos pelas regras css:
        - ***Arquivo style***: importa os outros arquivos css
        - ***Arquivo basic-configs***: Responsável por configurações basicas usado em todas as página
        - ***Arquivo scale-position-styles***: Responsável por estilos que gerenciam tamanho e posição dos elementos, além de estilos não incluídos em outros arquivos, como bordas.
        - ***Arquivo colors***: Responsável por criar variáveis que armazenam informação de cores
        - ***Arquivo color-elements***: Responsável por criar regras que criam variáveis que associam named colors especifícas a um determinado elemento
        - ***Arquivo coloring-elements***: Possui regras que associam a cor de fundo de um elemento a uma cor especifica, podendo ser named-colors comumns ou named-colors criadas no arquivo color-elements
        - ***Arquivo extern-fonts***: Armazena regras responsáveis por importar fontes externas prontas para uso
        - ***Arquivo fonts***: Responsável por todos os estilos que são aplicados a caracteres/texto, como cor do texto, tamanho, decoração, formato e etc..
        - ***Arquivo animations***: Responsável pelas atrules que criam animações usando a atrule @keyframes, criando animações com interpolação entre quadros
        - ***Arquivo animations-config***: Responsável por criar regras que associam uma animação a um estado especifico de um elemento, configurando inclusive como a animação é ativada
     - Divisão interna dos arquivos CSS
       - Divisão com comentarios especiais que dividem o arquivo entre partes do site, como main, footer e general(este destinado a estilos que se aplicam a toda a página)
       - Dentro dessas divisões as regras seguem um padrão de especificidade, quanto menor o nível na hierarquia, mais abaixo no arquivo a regra está, onde o ponto pai da hierarquia é o elemento html
       - [!WARNING] Dentro das regras de scale-position primeiro se coloca declarações sobre tamanho, depois declarações sobre posição e posteriormente sobre outros estilos diversos como bordas.
## Convenções de Nomeclatura  
### Modos de Escrita (estilo + respectivo nome) 
- camalCase
- PascalCase
- lower snake_case
- upper SNAKE_CASE
- kebab-case
### Diretórios e arquivos 
- **DIRETÓRIOS**: lower snake_case
- arquivos **JAVASCRIPT**: camalCase
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
## Guia de Recursos/algoritmos criados durante projeto 
### CSS
- **Algoritmo usado para deixar uma imagem responsiva independente do espaço escolhido para a imagem ocupar**
   - add a size to the bigger side  = x
    get the proportion between the bigger and smallest size=>
    k = y / x where x is the original bigger side of image and y of the smallest
    add size to the smallest size in css, equal to = k * x
## Erros Atípicos (Especifico de linguagens/recursos específicos)
### PUG 
- Não pode transferir dados do tipo Set de javascript para um arquivo pug
### CSS 
- animation não renderiza quadros intermediários que não são especificados explicitamente pelo dev no caso da aplicação em button elements 
