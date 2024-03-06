const decodeTwilioToken = (token) => {
  try {
    // Dividir el token en partes
    const [header, payload, signature] = token.split(".");
    // Decodificar la carga útil (payload) y convertirla de Base64 a texto
    const decodedPayload = Buffer.from(payload, "base64").toString("utf-8");
    // Convertir la carga útil decodificada en un objeto JSON
    const payloadObject = JSON.parse(decodedPayload);
    return payloadObject;
  } catch (error) {
    console.error("Error al decodificar el token de Twilio:", error.message);
    return null;
  }
};

module.exports = { decodeTwilioToken };
