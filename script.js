// function adicionarProduto(produto, preco); -> adicionar produtos ao final do carrinho
// function removerProduto() -> remover o ultimo produto do carrinho
// function totalItens() -> exibir o total de itens do carrinho
// function valorTotal() -> exibir a soma de todos os itens do carrinho
// function limparCarrinho() -> retirar todos os itens do carrinho 

class Carrinho {
    constructor()
    {
        this.produto = "";
        this.preco = 0;
        this.tamanho = 0;
        this.item = [];
    }

    adicionarProduto(produto, preco, qntd)
    {
        let dadosProduto = {
            nome: produto,
            preco: preco,
            qntd: qntd,
            total_unitario: preco * qntd,
        }

        this.item[this.tamanho] = dadosProduto;
        this.tamanho++;
    }

    removerProduto()
    {
        delete this.item[this.tamanho];
        this.tamanho--;
    }

    totalItens(){
        for(let i = 0; i < this.tamanho; i++)
        {
            console.log(this.item[i]);
        }
        console.log("TOTAL DE ITENS: ", this.tamanho);
    }

    valorTotal()
    {
        let total = 0;
        for(let i = 0; i < this.tamanho; i++)
        {
            total += this.item[i].total_unitario;
        }
        console.log("PREÇO TOTAL: R$ ", total);
    }

    limparCarrinho()
    {
        this.tamanho = 0;
        for(let i = 0; i < this.tamanho; i++)
        {
            this.item[i] = "";
        }
    }
}

var carrinho = new Carrinho();

console.log("");
console.log(" =============== CARRINHO DE COMPRAS =================");

console.log("");

console.log(" ============== ADICIONANDO PRODUTOS =================");
carrinho.adicionarProduto("Camiseta", 100, 2);
carrinho.adicionarProduto("Tênis", 200, 1);
carrinho.adicionarProduto("calça", 80, 3);
carrinho.totalItens();
carrinho.valorTotal();

console.log("");

console.log(" =============== REMOVENDO PRODUTO ===================")
carrinho.removerProduto();
carrinho.totalItens();
carrinho.valorTotal();

console.log("");

console.log(" =============== ADICIONADO OUTRO PRODUTO APÓS REMOVER ============== ")
carrinho.adicionarProduto("Colar", 10, 2);
carrinho.totalItens();
carrinho.valorTotal();

carrinho.limparCarrinho();

console.log("");

console.log(" =============== ADICIONADO PRODUTO APÓS LIMPAR CARRINHO ============== ")
carrinho.adicionarProduto("Boné", 40, 2);
carrinho.totalItens();
carrinho.valorTotal();

console.log("");