db.voos.find({ litrosCombustivel: { $exists: 1 } }, { vooId: 1, _id: 0 }).limit(1).pretty();
