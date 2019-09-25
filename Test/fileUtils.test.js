const { getCandidates, putCandidates } = require("../Utils/fileUtils");
const fs = require("fs");
const filneNameOutTest = "../Archive/FileTest.csv";
const path = require("path");
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
afterAll(() => {
    let out = path.resolve(__dirname, filneNameOutTest);
    if (fs.existsSync(out)) {
        fs.unlinkSync(out);
    }
});

test("Teste leitura com nome arquivo inexistente", async() => {
    let value = await getCandidates();
    expect(value).toBe(false);
    value = await getCandidates(999);
    expect(value).toBe(false);
});

test("Teste leitura com nome arquivo valido", async() => {
    let value = await getCandidates("../Archive/fileIn.csv");
    expect(value ? true : false).toBe(true);
});
test("Teste gravação com array de resposta vazio", () => {
    let value = putCandidates([], filneNameOutTest);
    expect(value).toBe(false);
});

test("Teste gravação com array de resposta preenchido", () => {
    let value = putCandidates(mockCand, filneNameOutTest);
    expect(value).toBe(true);
});