import bcrypt from "bcryptjs";

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const compareHash = async (password: string, hashed: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashed);
};
