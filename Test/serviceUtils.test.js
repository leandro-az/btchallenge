const {
    verificaResultado,
    qualificado,
    calculaPontuacao
} = require("../Utils/serviceUtils");

const mockCand = [{
        Candidato: "Fulano",
        Idade: "19",
        Aluno: "N",
        Matemática: 3.25,
        Português: 4.75,
        Redação: 6,
        Bolsa: "S",
        Pontuação: "",
        Qualificado: "",
        Resultado: ""
    },
    {
        Candidato: "Ciclano",
        Idade: "22",
        Aluno: "N",
        Matemática: 7.25,
        Português: 8.25,
        Redação: 9,
        Bolsa: "S",
        Pontuação: "",
        Qualificado: "",
        Resultado: ""
    },
    {
        Candidato: "Beotrano",
        Idade: "33",
        Aluno: "S",
        Matemática: 10,
        Português: 9,
        Redação: 8,
        Bolsa: "N",
        Pontuação: "",
        Qualificado: "",
        Resultado: ""
    },
    {
        Candidato: "Ciclano",
        Idade: "20",
        Aluno: "N",
        Matemática: 1.25,
        Português: 9.25,
        Redação: 2,
        Bolsa: "N",
        Pontuação: "",
        Qualificado: "",
        Resultado: ""
    }
];

test("Teste verificação se o candidato é qualificado", () => {
    expect(qualificado(7, true)).toBe("S");
    expect(qualificado(9.2, false)).toBe("S");
});

test("Teste verificação se o candidato não é qualificado", () => {
    expect(qualificado(7, false)).toBe("N");
    expect(qualificado(-1, true)).toBe("N");
});

test("Teste verificação pontuação do Candidato", () => {
    expect(calculaPontuacao(mockCand[0])).toBe(4.417);
    expect(calculaPontuacao(mockCand[1])).toBe(8);
    expect(calculaPontuacao(mockCand[2])).toBe(9.167);
    expect(calculaPontuacao(mockCand[3])).toBe(2.833);
});

test("Teste verificação aprovados", () => {
    for (let index = 0; index < mockCand.length; index++) {
        mockCand[index]["Pontuação"] = calculaPontuacao(mockCand[index]);
        mockCand[index]["Qualificado"] = qualificado(
            mockCand[index]["Pontuação"],
            mockCand[index]["Bolsa"] == "S"
        );
    }
    expect(verificaResultado(mockCand, 1, 1)[0]["Resultado"]).toBe("Aprovado");
    expect(verificaResultado(mockCand, 1, 1)[1]["Resultado"]).toBe("Reprovado");
    expect(verificaResultado(mockCand, 1, 1)[2]["Resultado"]).toBe("Aprovado");
    expect(verificaResultado(mockCand, 1, 1)[3]["Resultado"]).toBe("Reprovado");

    expect(verificaResultado(mockCand, -1, -1)[0]["Resultado"]).toBe(
        "Reprovado"
    );
    expect(verificaResultado(mockCand, -1, -1)[1]["Resultado"]).toBe(
        "Reprovado"
    );
    expect(verificaResultado(mockCand, -1, -1)[2]["Resultado"]).toBe(
        "Reprovado"
    );
    expect(verificaResultado(mockCand, -1, -1)[3]["Resultado"]).toBe(
        "Reprovado"
    );

    expect(verificaResultado(mockCand, 2, 2)[0]["Resultado"]).toBe("Aprovado");
    expect(verificaResultado(mockCand, 2, 2)[1]["Resultado"]).toBe("Reprovado");
    expect(verificaResultado(mockCand, 2, 2)[2]["Resultado"]).toBe("Aprovado");
    expect(verificaResultado(mockCand, 2, 2)[3]["Resultado"]).toBe("Reprovado");
});