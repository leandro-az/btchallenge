const csv = require("csvtojson");
const path = require("path");
const fs = require("fs");
const getCandidates = async fileIn => {
    try {
        if (!fs.existsSync(path.resolve(__dirname, fileIn))) {
            throw new Error("Arquivo não existe");
        }
        return await csv().fromFile(path.resolve(__dirname, fileIn));
    } catch (error) {
        return false;
    }
};

const putCandidates = function(ArrayCandidates = [], fileOut) {
    try {
        if (ArrayCandidates.length == 0) {
            return false;
        }
        let out = path.resolve(__dirname, fileOut.toString());
        if (fs.existsSync(out)) {
            fs.unlinkSync(out);
        }
        const cabecalho = Object.keys(ArrayCandidates[0]);
        fs.writeFileSync(out, cabecalho.join(",") + "\n", "utf8", function(err) {
            if (err) throw err;
        });
        for (let index = 0; index < ArrayCandidates.length; index++) {
            const element = Object.values(ArrayCandidates[index]);
            fs.appendFileSync(out, element.join(",") + "\n", "utf8", err => {
                if (err) throw err;
            });
        }
        return true;
    } catch (error) {
        return false;
    }
};

module.exports = { getCandidates, putCandidates };