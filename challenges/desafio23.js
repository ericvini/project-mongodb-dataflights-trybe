db.voos.find({ litrosCombustivel: { $lte: 1000 } },
  { vooId: 1, litrosCombustivel: 1, _id: 0 }).limit(1).pretty();
