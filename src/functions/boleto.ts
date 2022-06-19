import { BoletoService } from "../services/boleto.service";

interface IReturn {
  barCode: string;
  expirationDate: string;
  amount: string;
}

export const handle = async (event, _, callback) => {
  const { code } = event.pathParameters;
  const boletoService = new BoletoService();
  try {
    const boleto = boletoService.execute(code);
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(boleto),
    });
  } catch (error) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error: error.message,
      }),
    });
  }
};
