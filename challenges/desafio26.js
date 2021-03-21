db.voos.deleteMany({ "passageiros.pagos": { $in: [5, 6, 7, 8, 9, 10] }, "empresa.nome": { $eq: "GOL" } });
