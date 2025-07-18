exports.simulateTranscription = async (bucket, key) => {
  console.log(`🎙️ [Mock] Transcrevendo o áudio do bucket "${bucket}", arquivo "${key}"...`);

  // Simulação de resposta de transcrição
  const simulatedTranscript = `
    Olá, gostaria de cancelar meu plano porque estou tendo problemas com a cobrança.
    Falei com o suporte técnico anteriormente, mas não foi resolvido.
  `;

  // Simulando pequeno delay para parecer processo real
  await new Promise(resolve => setTimeout(resolve, 1000));

  return simulatedTranscript.trim();
};