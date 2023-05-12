create database db_videolocadora_manha_20231;
show databases;
use db_videolocadora_manha_20231;

create table tbl_classificacao(
	id  int not null primary key auto_increment,
    nome varchar(100) not null,
    sigla varchar(10) not null,
    descricao text not null,
    unique index(id)
);

show tables;
select * from tbl_ator;
desc tbl_ator;

create table tbl_genero(
	id  int not null primary key auto_increment,
    nome varchar(100) not null,
    unique index(id)
);

create table tbl_nacionalidade(
	id  int not null primary key auto_increment,
    nome varchar(45) not null,
    unique index(id)
);

create table tbl_sexo(
	id  int not null primary key auto_increment,
    nome varchar(45) not null,
    sigla varchar(5) not null,
    unique index(id)
);

#apaga um db
drop database teste; 
#apaga uma tbl
drop table tbl_filme; 

#apaga uma constraint (para conseguir modificar a estrutura do atributo ou da tabela)
alter table tbl_filme_genero
	drop foreign key FK_Filme_FilmeGenero; 
    
#add constraint (add uma nova constraint e sua nova relaçao)   
alter table tbl_filme_genero
	add constraint FK_Filme_FilmeGenero
    foreign key (id_filme)
    references tbl_filme (id);

 #altera uma tbl
alter table tbl_genero
	add column descricao varchar(100) not null;
    
alter table tbl_genero
	add column oii varchar(100) not null,
	add column oi varchar(100) not null;

#apaga uma coluna da tbl
alter table tbl_ator 
	drop column sinopse;

alter table tbl_genero
	drop column oii,
    drop column descricao;
 
#altera um tipo de dado de uma coluna
alter table tbl_ator
	modify column foto varchar(200);
    
#altera o nome de uma coluna e seu tipo de dados tbm
alter table tbl_genero
	change descricao tipo_genero varchar (7);
    
    
#CRIANDO TABELAS COM CHAVE ESTRANGEIRA
create table tbl_filme (
	id int not null primary key auto_increment,
    nome varchar(100) not null,
    nome_original varchar(100) not null,
    data_lancamento date not null,
    data_relancamento date,
    duracao time not null,
    sinopse text not null,
    foto_capa varchar(150) not null,
    id_classificacao int not null,
    
    #cria um nome para representar a FK
    constraint FK_Classificacao_Filme
	#indica quem sera o atributo dessa tabela q sera uma fk
    foreign key (id_classificacao)
	#indica de onde vira a pk para virar a fk
    references tbl_classificacao (id),
    
    unique index(id)
);

create table tbl_filme_genero (
	id int not null auto_increment,
    
    id_filme int not null,
    id_genero int not null,
    
    #relacionamento Filme_FilmeGenero
    constraint FK_Filme_FilmeGenero
    foreign key (id_filme)
    references tbl_filme (id),
    
	#relacionamento Genero_FilmeGenero
    constraint FK_Genero_FilmeGenero
    foreign key (id_genero)
    references tbl_genero (id),
    
    unique index(id),
    primary key(id)
);

create table tbl_diretor (
	id int not null primary key auto_increment,
    nome varchar(100) not null,
    nome_artistico varchar(100),
    data_nascimento date not null,
    biografia text,
    foto varchar(50),
    sinopse text not null,
    data_falecimento date,
    id_sexo int not null,
    
    #cria um nome para representar a FK
    constraint FK_Sexo_Diretor
	#indica quem sera o atributo dessa tabela q sera uma fk
    foreign key (id_sexo)
	#indica de onde vira a pk para virar a fk
    references tbl_sexo (id),
    
    unique index(id)
);

create table tbl_filme_diretor (
	id int not null auto_increment,
    
    id_filme int not null,
    id_diretor int not null,
    
    #relacionamento Filme_FilmeDiretor
    constraint FK_Filme_FilmeDiretor
    foreign key (id_filme)
    references tbl_filme (id),
    
	#relacionamento Genero_FilmeGenero
    constraint FK_Diretor_FilmeDiretor
    foreign key (id_diretor)
    references tbl_diretor (id),
    
    unique index(id),
    primary key(id)
);

create table tbl_ator (
	id int not null primary key auto_increment,
    nome varchar(100) not null,
    nome_artistico varchar(100),
    data_nascimento date not null,
    biografia text,
    foto varchar(50),
    sinopse text not null,
    data_falecimento date,
    id_sexo int not null,
    
    #cria um nome para representar a FK
    constraint FK_Sexo_Ator
	#indica quem sera o atributo dessa tabela q sera uma fk
    foreign key (id_sexo)
	#indica de onde vira a pk para virar a fk
    references tbl_sexo (id),
    
    unique index(id)
);

create table tbl_filme_ator (
	id int not null auto_increment,
    
    id_filme int not null,
    id_ator int not null,
    
    #relacionamento Filme_Filmator
    constraint FK_Filme_FilmeAtor
    foreign key (id_filme)
    references tbl_filme (id),
    
	#relacionamento ator_Filmeator
    constraint FK_Ator_FilmeAtor
    foreign key (id_ator)
    references tbl_ator (id),
    
    unique index(id),
    primary key(id)
);

create table tbl_ator_nacionalidade (
	id int not null auto_increment,
    
    id_ator int not null,
    id_nacionalidade int not null,
    
    #relacionamento ator_atorNcionalidade
    constraint FK_Ator_AtorNacionalidade
    foreign key (id_ator)
    references tbl_ator (id),
    
	#relacionamento ator_Filmeator
    constraint FK_Nacionalidade_AtorNacionalidade
    foreign key (id_nacionalidade)
    references tbl_nacionalidade (id),
    
    unique index(id),
    primary key(id)
);

create table tbl_diretor_nacionalidade (
	id int not null auto_increment,
    
    id_diretor int not null,
    id_nacionalidade int not null,
    
    #relacionamento Diretor_DiretorNcionalidade
    constraint FK_Ator_DiretorNacionalidade
    foreign key (id_diretor)
    references tbl_diretor (id),
    
	#relacionamento Diretor_Filmeator
    constraint FK_Nacionalidade_DiretorNacionalidade
    foreign key (id_nacionalidade)
    references tbl_nacionalidade (id),
    
    unique index(id),
    primary key(id)
);

select * from tbl_filme;
select * from tbl_sexo;
desc tbl_classificacao;

#INSERT
insert into tbl_sexo (sigla, nome) values ('F', 'FEMININO');
insert into tbl_sexo (sigla, nome) values ('M', 'MASCULINO');

insert into tbl_classificacao (sigla, nome, descricao) values 
('L', 'LIVRE', 'Violência: Arma sem violência;
				Morte sem violência; Ossada ou esqueleto sem violência; Violência Fantasiosa.
				Sexo e Nudez: Nudez não erótica.
				Drogas: Consumo moderado ou insinuado de droga lícita.'
),
('10', 'Não recomendado para menores de 10 (dez) anos', 'Violência: Angústia; Arma com violência; Ato criminoso sem violência; Linguagem depreciativa; Medo ou tensão; Ossada ou esqueleto com resquício de ato de violência.
														Sexo e Nudez: Conteúdo educativo sobre sexo.
														Drogas: Descrição do consumo de droga lícita; Discussão sobre o tema drogas; Uso medicinal de droga ilícita.'
), 
('12', 'Não recomendado para menores de 12 (doze) anos', 'Violência: Agressão verbal; Assédio sexual; Ato violento; Ato violento contra animal; Bullying; Descrição de violência; Exposição ao perigo; Exposição de cadáver; Exposição de pessoa em situação constrangedora ou degradante; Lesão corporal; Morte derivada de ato heróico; Morte natural ou acidental com dor ou violência; Obscenidade; Presença de sangue; Sofrimento da vítima; Supervalorização da beleza física; Supervalorização do consumo; Violência psicológica.
														Sexo e Nudez: Apelo sexual; Carícia sexual; Insinuação sexual; Linguagem chula; Linguagem de conteúdo sexual; Masturbação; Nudez velada; Simulação de sexo.
														Drogas: Consumo de droga lícita; Consumo irregular de medicamento; Discussão sobre legalização de droga ilícita; Indução ao uso de droga lícita; Menção a droga ilícita.'
),
('14', 'Não recomendado para menores de 14 (quatorze) anos', 'Violência: Aborto; Estigma ou preconceito; Eutanásia; Exploração sexual; Morte intencional; Pena de morte.
															Sexo e Nudez: Erotização; Nudez; Prostituição; Relação sexual; Vulgaridade.
															Drogas: Consumo insinuado de droga ilícita; Descrição do consumo ou tráfico de droga ilícita.'
),
('16', 'Não recomendado para menores de 16 (dezesseis) anos', 'Violência: Ato de pedofilia; Crime de ódio; Estupro ou coação sexual; Mutilação; Suicídio; Tortura; Violência gratuita ou banalização da violência.
																Sexo e Nudez: Relação sexual intensa.
																Drogas: Consumo de droga ilícita; Indução ao consumo de droga ilícita; Produção ou tráfico de droga ilícita.'
),
('18', 'Não recomendado para menores de 18 (dezoito) anos', 'Violência: Apologia à violência; Crueldade.
															Sexo e Nudez: Sexo explícito; Situação sexual complexa ou de forte impacto.
															Drogas: Apologia ao uso de droga ilícita.'
);


#UPDATE
update tbl_classificacao set sigla = '21';
update tbl_classificacao set sigla = 'L' where id = 1;
delete from tbl_classificacao;
update tbl_classificacao set sigla = '' where id = 8;

insert into tbl_filme (nome, nome_original, data_lancamento, data_relancamento, duracao, sinopse, foto_capa, id_classificacao) values 
(
'O PODEROSO CHEFÃO', 
'The Godfather', 
'1972-03-24', 
'2022-02-24', 
'02:55:00', 
'Don Vito Corleone (Marlon Brando) é o chefe de uma "família" de Nova York que está feliz, pois Connie (Talia Shire), 
sua filha, se casou com Carlo (Gianni Russo). Porém, durante a festa, Bonasera (Salvatore Corsitto) é visto no escritório 
de Don Corleone pedindo "justiça", vingança na verdade contra membros de uma quadrilha, que espancaram barbaramente sua filha 
por ela ter se recusado a fazer sexo para preservar a honra. Vito discute, mas os argumentos de Bonasera o sensibilizam e ele 
promete que os homens, que maltrataram a filha de Bonasera não serão mortos, pois ela também não foi, mas serão severamente castigados. 
Vito porém deixa claro que ele pode chamar Bonasera algum dia para devolver o "favor". Do lado de fora, no meio da festa, está o terceiro 
filho de Vito, Michael (Al Pacino), um capitão da marinha muito decorado que há pouco voltou da 2ª Guerra Mundial. Universitário educado, 
sensível e perceptivo, ele quase não é notado pela maioria dos presentes, com exceção de uma namorada da faculdade, Kay Adams (Diane Keaton), 
que não tem descendência italiana mas que ele ama. Em contrapartida há alguém que é bem notado, Johnny Fontane (Al Martino), um cantor de baladas 
românticas que provoca gritos entre as jovens que beiram a histeria. Don Corleone já o tinha ajudado, quando Johnny ainda estava em começo de carreira e 
estava preso por um contrato com o líder de uma grande banda, mas a carreira de Johnny deslanchou e ele queria fazer uma carreira solo. Por ser seu padrinho 
Vito foi procurar o líder da banda e ofereceu 10 mil dólares para deixar Johnny sair, mas teve o pedido recusado. Assim, no dia seguinte Vito voltou acompanhado 
por Luca Brasi (Lenny Montana), um capanga, e após uma hora ele assinou a liberação por apenas mil dólares, mas havia um detalhe: nas "negociações" Luca colocou 
uma arma na cabeça do líder da banda. Agora, no meio da alegria da festa, Johnny quer falar algo sério com Vito, pois precisa conseguir o principal papel 
em um filme para levantar sua carreira, mas o chefe do estúdio, Jack Woltz (John Marley), nem pensa em contratá-lo. Nervoso, Johnny começa a chorar e Vito, 
irritado, o esbofeteia, mas promete que ele conseguirá o almejado papel. Enquanto a festa continua acontecendo, Don Corleone comunica a Tom Hagen (Robert Duvall), 
seu filho adotivo que atua como conselheiro, que Carlo terá um emprego mas nada muito importante, e que os "negócios" não devem ser discutidos na sua frente. Os 
verdadeiros problemas começam para Vito quando Sollozzo (Al Lettieri), um gângster que tem apoio de uma família rival, encabeçada por Phillip Tattaglia (Victor Rendina) 
e seu filho Bruno (Tony Giorgio). Sollozzo, em uma reunião com Vito, Sonny e outros, conta para a família que ele pretende estabelecer um grande esquema de vendas de narcóticos 
em Nova York, mas exige permissão e proteção política de Vito para agir. Don Corleone odeia esta idéia, pois está satisfeito em operar com jogo, mulheres e proteção, mas isto 
será apenas a ponta do iceberg de uma mortal luta entre as "famílias".',
'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg',
17
);

insert into tbl_filme (nome, nome_original, data_lancamento, duracao, sinopse, foto_capa, id_classificacao) values 
(
'FORREST GUMP - O CONTADOR DE HISTÓRIAS', 
'Forrest Gump', 
'1994-12-7',  
'02:20:00', 
'Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks), um rapaz com QI abaixo da média e boas intenções. Por obra do acaso, ele consegue participar de momentos cruciais, como a Guerra do Vietnã e Watergate, mas continua pensando no seu amor de infância, Jenny Curran.',
'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/30/21/19874092.jpg',
16
);

insert into tbl_filme (nome, nome_original, data_lancamento, data_relancamento, duracao, sinopse, foto_capa, id_classificacao) values 
(
'O REI LEÃO', 
'The Lion King', 
'1994-05-08', 
'2011-08-26', 
'01:29:00', 
'Clássico da Disney, a animação acompanha Mufasa (voz de James Earl Jones), o Rei Leão, e a rainha Sarabi
(voz de Madge Sinclair), apresentando ao reino o herdeiro do trono, Simba (voz de Matthew Broderick). O
recém-nascido recebe a bênção do sábio babuíno Rafiki (voz de Robert Guillaume), mas ao crescer é envolvido 
nas artimanhas de seu tio Scar (voz de Jeremy Irons), o invejoso e maquiavélico irmão de Mufasa, que planeja 
livrar-se do sobrinho e herdar o trono.',
'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/84/28/19962110.jpg',
13
);

insert into tbl_filme (nome, nome_original, data_lancamento, data_relancamento, duracao, sinopse, foto_capa, id_classificacao) values 
(
'O SENHOR DOS ANÉIS - O RETORNO DO REI', 
'The Lord of the Rings: The Return of the King', 
'2003-12-25', 
null, 
'03:21:00', 
'Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf (Ian McKellen) e
Pippin (Billy Boyd) partam para o local na intenção de ajudar a resistência. Um exército é reunido por Theoden
(Bernard Hill) em Rohan, em mais uma tentativa de deter as forças de Sauron. Enquanto isso Frodo (Elijah Wood),
Sam (Sean Astin) e Gollum (Andy Serkins) seguem sua viagem rumo à Montanha da Perdição, para destruir o Um Anel.',
'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/47/20224867.jpg',
16
),
(
'À ESPERA DE UM MILAGRE', 
'The Green Mile', 
'2000-03-08', 
null, 
'03:09:00', 
'1935, no corredor da morte de uma prisão sulista. Paul Edgecomb (Tom Hanks) é o chefe de guarda da prisão, que 
temJohn Coffey (Michael Clarke Duncan) como um de seus prisioneiros. Aos poucos, desenvolve-se entre eles uma relação 
incomum, baseada na descoberta de que o prisioneiro possui um dom mágico que é, ao mesmo tempo, misterioso e milagroso.',
'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/66/66/20156966.jpg',
16
),
(
'VINGADORES: ULTIMATO', 
'Avengers: Endgame', 
'2019-04-25', 
'2019-05-11', 
'03:01:00', 
'Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis
precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido
no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett
Johansson) precisam liderar a resistência contra o titã louco.',
'https://br.web.img2.acsta.net/c_310_420/pictures/19/04/26/17/30/2428965.jpg',
15
),
(
'JOHN WICK 4: BABA YAGA', 
'John Wick: Chapter 4', 
'2023-03-23', 
null, 
'02:50:00', 
'O assassino profissional retorna às telas para John Wick 4: Baba Yaga. O assassino profissional John Wick (Keanu Reeves)
agora virou metade do submundo contra ele com sua vingança, que agora está entrando em sua quarta rodada em Nova York,
Berlim, Paris e Osaka. Sua equipe, composta por Bowery King (Laurence Fishburne), o gerente do hotel Winston (Ian McShane)
e o concierge Charon (Lance Reddick) do lendário hotel assassino Continental, novamente fazem parte da festa. No entanto,
as chances de escapar desta vez parecem quase impossíveis, pois o maior inimigo está surgindo. O implacável chefe do submundo
 Marquis de Gramont (Bill Skarsgård), que tem alianças inteiras atrás dele, representa a maior e sanguinária ameaça até hoje.
 Mas seus capangas também são durões, incluindo Shimazu (Hiroyuki Sanada) e Killa (Scott Adkins) localizados. Felizmente,
 existem velhos aliados como Caine (Donnie Yen) que correm para ajudar Wick. Não há caminho de volta, só um sobrevive.',
'https://br.web.img2.acsta.net/c_310_420/pictures/22/12/05/09/07/2007563.jpg',
16
);

insert into tbl_genero (nome) values 
('Ação'), ('Comédia'), ('Romance'), ('Terror'), ('Suspense'), ('Comédia romântica'), ('Aventura'), ('Ficção científica'), ('Drama'), ('Cinema de arte'),
('Chanchada'),
('Comédia de ação'),
('Comédia de terror'),
('Comédia dramática'),
('Comédia romântica'),
('Dança'),
('Documentário'),
('Docuficção'),
('Espionagem'),
('Documentário'),
('Fantasia'),
('Fantasia científica'),
('Filmes de guerra'),
('Mistério'),
('Musical'),
('Filme policial'),
('Thriller'),
('Faroeste');

select * from tbl_ator;
insert into tbl_ator (nome, nome_artistico, data_nascimento, biografia, foto, data_falecimento, id_sexo) values 
('Keanu Charles Reeves', 'KEANU REEVES', '1967-11-22', 'Depois de uma infância e estudos ​​em Boston, Chris Evans 
decidiu ir para Nova York para tentar a sorte na comédia. Ele rapidamente consegue entrar na profissão, principalmente 
participando em séries de televisão (Boston Public). Sua carreira no cinema começou em 2001, em uma comédia para adolescentes
(Não é Mais um Besteirol Americano). Mas sem ficar preso a apenas um gênero de filme, o ator vai para outras produções: trapaceia 
nas provas com Scarlett Johansson na comédia policial Nota Máxima (2004), interpreta o papel de Kim Basinger no thriller Celular - 
Um Grito de Socorro (2004) e seduz Jessica Biel em London (2005).

O destino de Chris Evans como o conhecemos hoje começou em 2005, quando ele conseguiu seu primeiro papel como super-herói. Em 
Quarteto Fantástico, um sucesso de bilheteria adaptado dos quadrinhos da Marvel, ele interpreta Johnny Storm, também conhecido como Tocha 
Humana. O filme é um sucesso e tem uma sequência dois anos depois (O Quarteto Fantástico e o Surfista Prateado). Para se manter na mesm a linha 
de superheróis, ele empresta sua voz no filme das Tartarugas Ninja (2007), descobre habilidades sobre-humanas em Heróis (2009) e luta no delirante 
Scott Pilgrim contra o Mundo (2010). No mesmo ano, ele assume a pele de um ex-agente renegado da CIA para Os Perdedores, também adaptação de um quadrinho.

Em 2007, faz parte da equipe Sunshine - Alerta Solar de Danny Boyle, engajado em uma expedição para reviver o sol. Não cansando de ficar longe de Scarlett 
Johansson, ambos atuam em O Diário de uma Babá. Com Capitão América (2011), ele tomou a decisão de sua carreira e assinou um contrato de seis filmes com a
Marvel Studios. Ao aceitar o papel de Steve Rogers. Depois de Capitão América, o longa que apresenta o herói ao público , o personagem que ele encarna se 
junta aos Vingadores, fazendo no total 7 filmes para o MCU e algumas participações especiais em filmes como Thor: O Mundo Sombrio. No entanto, ele não se 
esquece de sair de seu traje de vez em quando com filmes como O Expresso do Amanhã, O Homem de Gelo, Before We Go, Um Laço de Amor e o sucesso Entre Facas e Segredos. 

Após se aposentar do super-soldado da Marvel, Evans vai para outras produções como Não Olhe Para Cima, Missão no Mar Vermelho e substitui a voz original de Buzz 
Lightyear, Tim Allen, no novo filme do personagem, Lightyear. Evans ainda assina outro contrato com a Netflix para atuar, ao lado de Ryan Gosling, no filme Agente Oculto.',
'https://br.web.img3.acsta.net/c_310_420/pictures/19/04/22/19/59/2129500.jpg', null, 2);
