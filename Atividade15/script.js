function mostrarInformacoes() {

    const cursoSelecionado = document.getElementById("cursos").value;

    let curso;

    if (cursoSelecionado === "ADS") {
        curso = ADS;
    } else {
        curso = LOG;
    }

    const resposta = confirm(
        "Deseja ver mais informações sobre o curso " + curso.sigla + "?"
    );

    if (resposta) {

        const novaJanela = window.open("", "_blank", "width=600,height=300");

        novaJanela.document.write(`
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <title>${curso.sigla}</title>
            </head>
            <body>
                <h2>${curso.nome}</h2>
                <p><strong>Sigla:</strong> ${curso.sigla}</p>
                <p><strong>Duração:</strong> ${curso.duracao}</p>
            </body>
            </html>
        `);

        novaJanela.document.close();
    }
}