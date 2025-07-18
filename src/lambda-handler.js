const { simulateTranscription } = require('./transcribe-service');
const { simulateComprehendAnalysis } = require('./comprehend-service');
const { saveAnalysisToDatabase } = require('./rds-service');

exports.handler = async (event) => {
  try {
    const record = event.Records[0];
    const s3Bucket = record.s3.bucket.name;
    const s3Key = decodeURIComponent(record.s3.object.key.replace(/\+/g, ' '));

    console.log(`Simulando áudio recebido de: s3://${s3Bucket}/${s3Key}`);

    // 1. Simula transcrição do áudio
    const transcript = await simulateTranscription(s3Bucket, s3Key);
    console.log(`Texto simulado da transcrição:\n${transcript}`);

    // 2. Simula análise com IA
    const analysisResult = await simulateComprehendAnalysis(transcript);
    console.log(`Resultado simulado da análise:\n`, analysisResult);

    // 3. Simula persistência no banco de dados
    await saveAnalysisToDatabase({
      text: transcript,
      sentiment: analysisResult.sentiment,
      keyPhrases: analysisResult.keyPhrases,
      topics: analysisResult.topics,
      timestamp: new Date().toISOString(),
      file: s3Key,
    });

    return { statusCode: 200, body: 'Pipeline simulado com sucesso' };

  } catch (error) {
    console.error('Erro durante a simulação:', error);
    return { statusCode: 500, body: 'Erro interno na simulação' };
  }
};