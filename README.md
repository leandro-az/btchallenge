# BTChallenge

Desafio Implementação BT

## Descrição da Resolução:

Para a resolução do problema, considerei como entrada um arquivo com extensão '.csv' contendo as informações dos alunos;<br />
Desenvolvi rotinas que realizam o calculo da pontuação, verificação de qualificado e a verificação de resultado;<br />
Para o cálculo da pontuação criei uma função que retorna a média ponderada;<br />
Para a qualificação criei uma rotina que faz a validação conforme solicitado no desafio;<br />
Para o resultado criei uma rotina que filtra os candidatos com solicitação de bolsa e os sem bolsa. Após filtrar, ordeno os candidatos conforme os critérios e em seguida distribuo as vagas conforme disponibilidade;<br />
Por fim o resultado é exibido em tela e também salvo essas informações em um arquivo de saída também com extensão '.csv'.

## Linguagens e FrameWorks:

- Node 
- Jest ( utilizado para a geração dos testes )

## Estrutura do projeto:

Para este projeto temos os seguintes aquivos e pastas:

- App : Armazena o arquivo responsável por dar início a execução da aplicação;
- Archive: Armazena os arquivos utilizados e gerados durante a execução da aplicação;
- Test: Armazena os arquivos referentes aos testes;
- Ultis: Armazena os arquivos com as funções para tratamento dos dados.
- jest.config.js : Arquivo referente as configurações do Jest ( módulo de testes )
- package.json : Arquivo referente a configuração geral dos módulos utilizados no projeto, assim como a identificação dos arquivos de testes e o arquivo de inicialização da aplicação.

## Como Configurar:

- Basta executar clone no projeto e na pasta raiz executar o comando: 

```
npm install
```
## Para Executar:

1. Aplicação: 

Na pasta raiz execute o comando :

```
npm start
```
A saída será algo como:

![PrintResultado](https://user-images.githubusercontent.com/27313872/65630391-b7f1f580-dfab-11e9-9f4c-efcab4a490a9.PNG)


2. Testes:

Na pasta raiz execute o comando :

```
npm test
```

A saída será algo como:

![PrintTestes](https://user-images.githubusercontent.com/27313872/65630245-6d707900-dfab-11e9-87c4-bb0066dac514.PNG)






