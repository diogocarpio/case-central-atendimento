exports.simulateComprehendAnalysis = async (text) => {
  console.log(`[Mock] Analisando texto com IA...`);

  // Simulando delay de processamento
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Resposta simulada da IA (Comprehend)
  const simulatedResponse = {
    sentiment: "NEGATIVE",
    keyPhrases: [
      "cancelar meu plano",
      "problemas com a cobrança",
      "suporte técnico"
    ],
    topics: ["cancelamento", "financeiro", "suporte"]
  };

  return simulatedResponse;
};