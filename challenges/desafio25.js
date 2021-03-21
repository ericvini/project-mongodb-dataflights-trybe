db.voos.deleteMany({ "empresa.nome": { $eq: "AZUL" }, litrosCombustivel: { $lt: 400 },
});
