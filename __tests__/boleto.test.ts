import { BoletoService } from "../src/services/boleto.service";

describe("Validation", () => {
  const boletoService = new BoletoService();

  it("should be able to validation of line", async () => {
    const response = boletoService.execute(
      "212900011921100012109044756174059000000000020001"
    );

    expect(response).toHaveProperty("amount");
  });

  it("should be able to return NULL in place of the date case this is 0000", () => {
    const response = boletoService.execute(
      "212900011921100012109044756174059000000000020001"
    );

    expect(response.expirationDate).toBe(null);
  });

  it("should not be able to validate of line because the length is larger the allowed", () => {
    try {
      boletoService.execute(
        "21290001192110001210904475617405900000000002000111111"
      );
    } catch (error) {
      expect(error.message).toBe("Número de dígitos inválido!");
    }
  });

  it("should not be able validate of line because is number", () => {
    const value = 1 as any;
    try {
      boletoService.execute(value);
    } catch (error) {
      expect(error.message).toBe("Insira uma string válida!");
    }
  });

  it("should be able to validate boleto traditional", () => {
    const response = boletoService.execute(
      "21290001192110001210904475617405975870000002000"
    );

    expect(response).toHaveProperty("amount");
  });
});
