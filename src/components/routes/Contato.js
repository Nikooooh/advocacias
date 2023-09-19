import React, { useState } from "react";
import Footer from "../footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await emailjs.send(
        "service_snqif0d",
        "template_utbaxbb",
        data,
        "disYs5XDSHkkvPAAx"
      );

      if (response.text === "OK") {
        setFormSubmitted(true);
        toast.success("Mensagem enviada com sucesso!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        throw new Error("Send email failed");
      }
    } catch (error) {
      toast.error(
        "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-1 px-4 md:px-0 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <h1 className="text-4xl font-semibold mb-10 text-center text-green-950">
            Entre em Contato
          </h1>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2  space-y-8 w-full max-w-md mx-auto">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-2xl font-bold mb-2 text-green-950"
                  htmlFor="name"
                >
                  Nome
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-2xl font-bold mb-2 text-green-950"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Seu email"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-2xl font-bold mb-2 text-green-950"
                  htmlFor="message"
                >
                  Mensagem
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                  id="message"
                  name="message"
                  placeholder="Sua mensagem"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
      <Footer />
    </div>
  );
}

export default ContactPage;
