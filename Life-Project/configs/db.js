const username = encodeURIComponent("prDev");
const password = encodeURIComponent("@Shisuiuchiha666");
const collectionName = "bk_db" //collection -> represent an model
const cluster = "cluster0.bsbsgnq.mongodb.net";
const authSource = "Collection0";
const authMechanism = "SCRAM-SHA-256";
let dbUrl = `mongodb+srv://prDev:${password}@${cluster}/${collectionName}?retryWrites=true&w=majority&appName=Cluster0`;

const db = {
    dbUrl: dbUrl,
};

module.exports = db;