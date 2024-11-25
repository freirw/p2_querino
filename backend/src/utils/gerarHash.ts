import bcrypt from "bcrypt";

const novaSenha = "12345678";

(async () => {
  const saltRounds = 10; // Define o nível de segurança do bcrypt
  const hashedPassword = await bcrypt.hash(novaSenha, saltRounds);
  console.log("Hash gerado:", hashedPassword);
})();
