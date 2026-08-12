class OrdemServico {

    constructor(cliente, equipamento, valorBruto) {
        this.cliente = cliente;
        this.equipamento = equipamento;
        this.valorBruto = valorBruto;
    }

    calcularDesconto() {
        return this.valorBruto * 0.10;
    }

    calcularValorFinal() {
        return this.valorBruto - this.calcularDesconto();
    }

    gerarHTML() {

        const desconto = this.calcularDesconto();
        const valorFinal = this.calcularValorFinal();

        return `
            <div class="card-os">

                <h3>Ordem de Serviço</h3>

                <p><strong>Cliente:</strong> ${this.cliente}</p>

                <p><strong>Equipamento:</strong> ${this.equipamento}</p>

                <p><strong>Valor Bruto:</strong> R$ ${this.valorBruto.toFixed(2)}</p>

                <p><strong>Desconto à vista (10%):</strong> R$ ${desconto.toFixed(2)}</p>

                <p class="valor-final">
                    Valor Final: R$ ${valorFinal.toFixed(2)}
                </p>

            </div>
        `;
    }
}


function geradorOS() {

    const cliente = document.getElementById("cliente").value;
    const equipamento = document.getElementById("equipamento").value;
    const valor = Number(document.getElementById("valor").value);

    if (cliente === "" || equipamento === "" || valor <= 0) {
        alert("Preencha todos os campos!");
        return;
    }

    const novaOS = new OrdemServico(
        cliente,
        equipamento,
        valor
    );

    const painel = document.getElementById("painelOS");

    painel.innerHTML += novaOS.gerarHTML();

    document.getElementById("cliente").value = "";
    document.getElementById("equipamento").value = "";
    document.getElementById("valor").value = "";
}