const objPesos = require("./pesos.json");

const calculaPontuacao = (Candidate = {}) => {
    let result = 0;
    if (
        Object.entries(Candidate).length === 0 &&
        Candidate.constructor === Object
    ) {
        return result;
    }
    let pesos = 0;
    for (let index = 0; index < Object.keys(objPesos).length; index++) {
        pesos += objPesos[Object.keys(objPesos)[index]];
        result +=
            Candidate[Object.keys(objPesos)[index]] *
            objPesos[Object.keys(objPesos)[index]];
    }

    return parseFloat((result / pesos).toFixed(3));
};

const qualificado = (nota, bolsa) => {
    if (!nota || nota < 0) {
        return "N";
    }
    if (bolsa && nota >= 7) {
        return "S";
    }
    if (!bolsa && nota >= 8) {
        return "S";
    }
    return "N";
};

const sortArrCandidate = (a, b) => {
    if (a["Pontuação"] > b["Pontuação"]) return -1;
    if (b["Pontuação"] > a["Pontuação"]) return 1;
    if (a["Pontuação"] == b["Pontuação"]) {
        if (a.Idade < b.Idade) return -1;
        if (b.Idade < a.Idade) return 1;
        if (a.Idade == b.Idade) {
            if (a.Aluno == "N" && !b.Aluno == "S") return -1;
            if (b.Aluno == "N" && !a.Aluno == "S") return 1;
            return 0;
        }
    }
};

const verificaResultado = (
    arrayCandidates = [],
    vagasSBolsa,
    vagasComBolsa
) => {
    let candidatosBolsistas = arrayCandidates.filter(item =>
        item.Bolsa == "S" ? true : false
    );
    let candidatosNaoBolsitas = arrayCandidates.filter(item =>
        item.Bolsa == "N" ? true : false
    );
    candidatosBolsistas.sort(function(a, b) {
        return sortArrCandidate(a, b);
    });
    let qtdVagas = vagasComBolsa;
    for (let index = 0; index < candidatosBolsistas.length; index++) {
        if (qtdVagas > 0 && candidatosBolsistas[index]["Qualificado"] == "S") {
            candidatosBolsistas[index]["Resultado"] = "Aprovado";
            qtdVagas -= 1;
        } else {
            candidatosBolsistas[index]["Resultado"] = "Reprovado";
        }
    }
    candidatosNaoBolsitas.sort(function(a, b) {
        return sortArrCandidate(a, b);
    });
    qtdVagas = vagasSBolsa;
    for (let index = 0; index < candidatosNaoBolsitas.length; index++) {
        if (qtdVagas > 0 && candidatosNaoBolsitas[index]["Qualificado"] == "S") {
            candidatosNaoBolsitas[index]["Resultado"] = "Aprovado";
            qtdVagas -= 1;
        } else {
            candidatosNaoBolsitas[index]["Resultado"] = "Reprovado";
        }
    }
    return candidatosBolsistas.concat(candidatosNaoBolsitas);
};

module.exports = {
    verificaResultado,
    qualificado,
    calculaPontuacao,
    sortArrCandidate
};