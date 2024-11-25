import bcrypt from "bcrypt";

export const compareHash = async (plainText: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(plainText, hash);
};
