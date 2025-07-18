exports.saveAnalysisToDatabase = async ({ text, sentiment, keyPhrases, topics, timestamp, file }) => {
  console.log(`[Mock] Salvando os dados no banco (simulado)`);

  // Simula estrutura da query (sem executar)
  const simulatedQuery = `
    INSERT INTO calls (
      audio_file,
      transcript,
      sentiment,
      key_phrases,
      topics,
      created_at
    ) VALUES (
      '${file}',
      '${text.slice(0, 30)}...',
      '${sentiment}',
      '${JSON.stringify(keyPhrases)}',
      '${JSON.stringify(topics)}',
      '${timestamp}'
    );
  `;

  console.log(simulatedQuery);
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("[Mock] Dados 'salvos' com sucesso no banco!");
};