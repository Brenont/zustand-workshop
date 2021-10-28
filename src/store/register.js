import create from "zustand";

const initialData = {
  name: "",
  email: "",
  confirmEmail: "",
  dateBirth: "",
  ocupation: "",
  cep: "",
  state: "",
  address: "",
  city: "",
  password: "",
  confirmPassword: "",
};

export const useRegister = create((set, get) => ({
  data: initialData,
  setField: (field, value) =>
    set((state) => ({ data: { ...state.data, [field]: value } })),
}));
