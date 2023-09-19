import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { BsArrowRepeat } from "react-icons/bs";

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    image: null,
    oab: "",
    address: "",
    city: "",
    state: "",
    especialidade: [],
    about: "",
  });

  const especialidades = [
    "Direito Administrativo",
    "Direito Ambiental",
    "Direito Civil",
    "Direito Constitucional",
    "Direito do Consumidor",
    "Direito Empresarial",
    "Direito Família e Sucessões",
    "Direito Penal",
    "Direito Trabalhista",
    "Direito Tributário",
    "Direitos Humanos",
    "Direito Agrário",
    "Direito Previdenciário",
    "Direito Internacional",
    "Direito Eleitoral",
    "Direito Militar",
    "Direito Desportivo",
    "Direito Digital",
    "Direito de Trânsito",
    "Direito Imobiliário",
    "Direito de Propriedade Intelectual",
    "Direito do Idoso",
    "Direito da Infância e Juventude",
    "Direito Marítimo",
    "Direitos de Família e das Sucessões",
  ];

  const options = especialidades.map((especialidade) => ({
    value: especialidade,
    label: especialidade,
  }));

  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formDataForAPI = new FormData();
    formDataForAPI.append("name", formData.name);
    formDataForAPI.append("phone", formData.phone);
    formDataForAPI.append("email", formData.email);
    formDataForAPI.append("image", formData.image);
    formDataForAPI.append("oab", formData.oab);
    formDataForAPI.append("address", formData.address);
    formDataForAPI.append("city", formData.city);
    formDataForAPI.append("state", formData.state);
    formDataForAPI.append(
      "especialidade",
      JSON.stringify(formData.especialidade)
    );
    formDataForAPI.append("about", formData.about);

    try {
      const response = await axios.post(
        "https://advocacias-api-production.up.railway.app/api/register",
        formDataForAPI
      );
      if (response.data) {
        setIsLoading(false); // Defina isLoading como false após o envio bem-sucedido
        setSuccessMessage("Cadastro realizado com sucesso!");
        navigate("/confirmation-page");
      }
    } catch (error) {
      setIsLoading(false); // Defina isLoading como false em caso de erro
      console.error("Erro ao enviar dados", error);
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-4 md:pt-16 lg:pt-22">
      <form
        className="bg-white p-8 rounded shadow-md  w-full md:w-3/4 lg:w-2/3 "
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-5">Cadastro de Escritório</h2>

        <input
          type="text"
          name="name"
          placeholder="Nome do Advogado/Advocacia"
          className="w-full p-2 mb-4 border rounded"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="Cidade"
          className="w-full p-2 mb-4 border rounded"
          value={formData.city}
          onChange={handleInputChange}
          required
        />
        <Select
          isMulti
          name="especialidade"
          placeholder="Selecione uma ou mais Especialidades"
          options={options}
          className="w-full p-1 mb-4 border rounded"
          classNamePrefix="select"
          styles={{
            control: (provided) => ({
              ...provided,
              border: "none",
              boxShadow: "none",
            }),
            menu: (provided) => ({
              ...provided,
              borderRadius: "0.375rem",
            }),
          }}
          onChange={(selectedOptions) => {
            setFormData({
              ...formData,
              especialidade: selectedOptions
                ? selectedOptions.map((option) => option.value)
                : [],
            });
          }}
          required
        />

        <input
          type="text"
          name="state"
          placeholder="Estado"
          className="w-full p-2 mb-4 border rounded"
          value={formData.state}
          onChange={handleInputChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Telefone com DDD (será exibido para os clientes)"
          className="w-full p-2 mb-4 border rounded"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <div className="mb-4">
          <label className="block mb-2">Foto do Advogado/Escritório</label>
          <input
            type="file"
            name="image"
            className="w-full p-2 border rounded"
            onChange={handleImageChange}
            required
          />
        </div>

        <input
          type="text"
          name="oab"
          placeholder="OAB do Advogado Responsável"
          className="w-full p-2 mb-4 border rounded"
          value={formData.oab}
          onChange={handleInputChange}
          required
        />

        <textarea
          name="address"
          placeholder="Endereço do Escritório"
          className="w-full p-2 mb-4 border rounded"
          rows="4"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="about"
          placeholder="Escreve um breve texto sobre você ou seu escritório"
          className="w-full p-2 mb-4 border rounded"
          rows="4"
          value={formData.about}
          onChange={handleInputChange}
          required
        />

        <div className="mb-4">
          <input
            type="checkbox"
            id="termsOfUse"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
            required
          />
          <label htmlFor="termsOfUse" className="ml-2">
            Eu li e aceito os{" "}
            <Link className="text-blue-800" to="/terms-of-use">
              Termos de Uso.
            </Link>
          </label>
        </div>
        <p className="text-red-600 ">
          *Recomendamos que sua imagem tenha o tamanho de 800px por 640px!
        </p>
        {successMessage && (
          <p className="text-green-500 text-center mb-4">{successMessage}</p>
        )}
        {isLoading ? (
          <div className="flex items-center justify-center">
            <BsArrowRepeat className="animate-spin mr-2" />
            Enviando...
          </div>
        ) : (
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-4"
          >
            Cadastrar
          </button>
        )}
      </form>
    </div>
  );
}

export default RegisterPage;
