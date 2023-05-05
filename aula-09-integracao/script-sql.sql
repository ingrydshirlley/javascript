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
select * from tbl_genero;
desc tbl_sexo;

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
alter table tbl_genero 
	drop column tipo_genero;

alter table tbl_genero
	drop column oii,
    drop column descricao;
 
#altera um tipo de dado de uma coluna
alter table tbl_genero
	modify column descricao varchar(5);
    
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