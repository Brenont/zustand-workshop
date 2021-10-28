import { Button, Input } from "..";

export const PersonalForm = () => (
  <>
    <h2>Preencha seus dados pessoais</h2>
    <Input placeholder="Digite seu Nome" />
    <Input placeholder="Digite seu Email" />
    <Input placeholder="Confirme seu Email" />
  </>
);

export const InfoForm = () => (
  <>
    <h2>Conte um pouco mais sobre você</h2>
    <Input placeholder="Digite sua data de nascimento" />
    <Input placeholder="Qual sua profissão?" />
  </>
);

export const AddressForm = () => (
  <>
    <h2>Digite dados de endereço</h2>
    <Input placeholder="CEP" />
    <Input placeholder="Estado" />
    <Input placeholder="Endereço" />
    <Input placeholder="Cidade" />
  </>
);

export const PasswordForm = () => (
  <>
    <h2>Crie sua senha e finalize sue cadastro</h2>
    <Input type="password" placeholder="Digite sua senha" />
    <Input type="password" placeholder="Confirme sua senha" />
    <Button>Cadastrar perfil</Button>
  </>
);
