const fu = require("../Utils/fileUtils");
const su = require("../Utils/serviceUtils");

async function run() {
    ArrayCand = await fu.getCandidates("../Archive/fileIn.csv");
    if (ArrayCand) {
        for (let index = 0; index < ArrayCand.length; index++) {
            ArrayCand[index]["Pontuação"] = su.calculaPontuacao(ArrayCand[index]);
            ArrayCand[index]["Qualificado"] = su.qualificado(
                ArrayCand[index]["Pontuação"],
                ArrayCand[index]["Bolsa"] == "S"
            );
        }
        ArrayCand = su.verificaResultado(ArrayCand, 2, 4);
        console.table(ArrayCand);
        fu.putCandidates(ArrayCand, "../Archive/fileOut.csv");
    } else {
        console.log("Array vazio");
    }
}

run();