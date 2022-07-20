<p align="center"> <img  height="250em" src="https://start.db.tec.br/assets/logo_db.png" /></p>
<h1 align="center">START DB - DesafioForca</h1>



<p align="justify">Esta atividade tem como objetivo servir instrumento avaliativo do processo de seleção de estágio do START DB. O entregável será uma aplicação a ser executada em terminal node utlizando JavaScript, seguindo as regras de negócio fornecidas pela organização </p>

---
<div align="start">
<h2>🔧 Regras do projeto:</h2># O desafio da forca

O desafio de seleção do StartDB desse ano será desenvolver as regras de um jogo da forca. 

<p align="center"> <img  height="350m" src="https://github.com/dbserver/startdb-2022/blob/main/docs/forca.gif" />


> **Observação:** *Dia das mães* no gif acima é a dica sobre a palavra secreta

É um jogo que antigamente necessitava de duas pessoas, uma para selecionar a palavra secreta e outra para tentar acertar. A pessoa que escolhia a palavra desenhava/registrava tudo no papel, desde o desenho da forca, as letras acertadas e letras erradas. Algo muito próximo do gif acima.

> **Observação:** Somente precisa ser implementado as regras do jogo, não é preciso desenvolver a interface do jogo, o GIF é para demonstração.

As regras que devem ser implementadas são:

1. O jogo deve iniciar com 6 vidas
2. O jogo deve iniciar com o estado `aguardando chute`.
3. Todo chute deve conter apenas uma letra, caso tenha mais de uma a jogada deve ser ignorada, ou seja, não deve alterar nenhum estado.
4. Caso a letra chutada esteja errada mas já foi chutada anteriormente a jogada deve ser ignorada, ou seja, não deve alterar nenhum estado.
5. Toda chamada ao método chutar deve registrar a letra em letrasChutadas
6. Se a letra chutada não estiver contida na palavra, deve subtrair uma vida
7. Se a letra chutada estiver contida na palavra, deve ser substituida na "palavra" em sua respectiva posição. 
Ex.: A palavra secreta é "bala" e o jogador chutou a letra "b", então a palavra que é retornada no método buscarDadosDoJogo, deve ser ["b", "_", "_", "_" ].
8. Caso a quantidade de vidas chegue a 0 (zero), o estado do jogo deve mudar para `perdeu`.
9. Caso a quantidade de vidas seja maior que zero e o jogador acerte a última letra, o estado do jogo deve mudar para `ganhou`.

</div>

<div align="start">
<h2>🖥️ Como executar o projeto:</h2>
<p align="center"><img height="350em" src="https://github.com/vitinop/STARTDB-DesafioForca/blob/main/documentacao/estruturapastas.png" /></p>
<p align="center">Essa é a estutra de pastas base do projeto</p>
  
Para iniciar aplicação é necessário: 
<ol>
    <li>Ter a versão LTS do node JS instalada em sua máquinas, caso não tenha o link está disponivel <a target="_blank" href="https://nodejs.org/en/" title="link do node"> aqui </a>, basta baixa-lo e instalalo em sua máquina</li> 
    <li>Com o projeto aberto em sua pasta raiz, executar o comando npm install no terminal, para instalar as dependências relativas ao projeto </li>
    <li>Executar o programa: insira o comando "npm run start" </li>
    <li>Executar o teste unitário de caminho feliz: insira o comando no terminal  "npm run testfeliz"  </li>  
    <li>Executar o teste unitário de caminho triste: insira o comando no terminal "npm run testtriste"  </li>
</ol>
</div>
  
<p align="justify">&emsp;Em linhas gerais, essa é a estrutura definida para este projeto, para este caso específico. É importante entender isso, pois nem sempre essa arquitetura será repetida em todos os projetos.</p>


---  
 

<h3 align="center">Imagens de amostra do projeto finalizado</h3>
<p align="center"> <img  height="350em" src="https://github.com/vitinop/STARTDB-DesafioForca/blob/main/documentacao/jogorodando.png" /></p>



<div align="start"> 
<h2> :handshake: Projeto desenvolvido por</h2>
<li><a target="_blank" href="https://github.com/vitinop" title="Victor Luz Github">Victor Luz</a></li>
</div>



