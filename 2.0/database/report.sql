-- CONSULTAS SIMPLES

-- Nome dos Clientes em ordem alfabética

SELECT 
	nome 
FROM 
	cliente
ORDER BY 
	nome 
ASC


-- Quantidade de CLientes cadastrados    

SELECT 
    COUNT(*) 
AS 
    "Quantidade de Clientes Cadastrados" 
FROM 
    cliente
    
    
-- Quantidade de compras realizadas

SELECT 
	COUNT(*)
AS 
    "Quantidade de Compras" 
FROM 
    compra;
    

-- Produtos com valor maior ou igual a R$100

SELECT 
    preco, nome
FROM 
    produto 
WHERE 
    preco >= 100 


--Produtos da marca Tramontina

SELECT 
    nome
FROM 
    produto 
WHERE 
    marca = 'Tramontina'


-- CONSULTAS COMPLEXAS

--Busque pelo nome, email e data da compra, de Todos os clientes que fizeram uma compra em 2021, listados em ordem alfabetica;

SELECT 
	cl.nome, cl.email, co.finalizacao as "Data da compra"
FROM 
	compra co
JOIN
	cliente cl
ON
	co.id_cliente = cl.id
WHERE
	finalizacao >= '2021-01-01' AND finalizacao <= '2021-12-31'
ORDER BY
	cl.nome ASC;

-- Exiba os produtos, a quantidade, valor de cada produto, e data da compra, da compra 4.

SELECT
	p.nome as "Produto", cp.quantidade, p.preco as "valor unitário",  co.finalizacao as "Data da compra"
FROM 
	compra co
JOIN
	compra_produto cp
ON
	co.id = cp.id_compra
JOIN
	produto p
ON
	cp.id_produto = p.id
WHERE	
	co.id = 4;

-- Exiba as seguintes informações do produto 3 (nome, descrição, produtos relacionados e se o produto relacionado esta disponível em estoque);

SELECT 
	p.nome as "Produto", p.descricao, pr.nome as "Relacionado", pr.disponivel as "Produto Relacionado disponível"
FROM
	produto p
JOIN
	produto_produto pp
ON
	p.id = pp.id_produtoprincipal
JOIN
	produto pr
ON
	pp.id_produtosecundario = pr.id
WHERE 
	p.id =3;

--Exiba o nome do cliente, a data da compra e valor das três maiores compras feitas;

SELECT 
	cl.nome as "Cliente", co.finalizacao as "Data da compra", SUM(cp.quantidade * p.preco) as "Valor da Compra"
FROM 
	compra co
JOIN
	cliente cl
ON
	co.id_cliente = cl.id
JOIN
	compra_produto cp
ON 
	co.id = cp.id_compra
JOIN
	produto p
ON
	cp.id_produto = p.id
GROUP BY
	cl.nome, co.finalizacao
ORDER BY
	SUM(cp.quantidade * p.preco) DESC 
LIMIT 
	3;

-- Liste todos os produtos que foram comprados por clientes que moram em Caruaru, exiba também a quantidade de cada item comprado, a lista deve ser ordenada exibindo primeiramente os itens mais comprados;

SELECT
    COUNT(p.nome) as "Quantidade", p.nome as "Produto" 
From 
    cliente cl
JOIN
    endereco e
ON
     cl.id = e.id_cliente 
JOIN
	compra co
ON
	cl.id = co.id_cliente
JOIN
	compra_produto cp
ON
	co.id = cp.id_compra
JOIN
	produto p
ON
	cp.id_produto = p.id
WHERE
	e.cidade = 'Caruaru'
GROUP BY
	p.nome
ORDER BY
	quantidade DESC;
