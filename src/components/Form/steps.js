import { Input } from "..";
import { useRegister } from "../../store/register";

const InputForm = ({ type, placeholder, name }) => {
  const { data, setField } = useRegister();

  return (
    <Input
      type={type}
      value={data[name]}
      onChange={(event) => setField(name, event.target.value)}
      placeholder={placeholder}
    />
  );
};

export const PersonalForm = ({ data, setField }) => {
  return (
    <>
      <h2>Preencha seus dados pessoais</h2>
      <InputForm name="name" placeholder="Digite seu Nome" />
      <InputForm name="email" placeholder="Digite seu Email" />
      <InputForm name="confirmEmail" placeholder="Confirme seu Email" />
    </>
  );
};

export const InfoForm = ({ data, setField }) => (
  <>
    <h2>Conte um pouco mais sobre você</h2>
    <InputForm name="dateBirth" placeholder="Digite sua data de nascimento" />
    <InputForm name="ocupation" placeholder="Qual sua profissão?" />
  </>
);

export const AddressForm = ({ data, setField }) => (
  <>
    <h2>Digite dados de endereço</h2>
    <InputForm name="cep" placeholder="CEP" />
    <InputForm name="state" placeholder="Estado" />
    <InputForm name="address" placeholder="Endereço" />
    <InputForm name="city" placeholder="Cidade" />
  </>
);

export const PasswordForm = ({ data, setField }) => (
  <>
    <h2>Crie sua senha e finalize sue cadastro</h2>
    <InputForm name="password" type="password" placeholder="Digite sua senha" />
    <InputForm
      name="confirmPassword"
      type="password"
      placeholder="Confirme sua senha"
    />
  </>
);
