import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminPage() {
  const [pendingOffices, setPendingOffices] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const ADMIN_USERNAME = "mvNicolas1983";
  const ADMIN_PASSWORD = "n4A3AM0ZRpMQulng*";

  const handleLogin = () => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Nome de usuário ou senha incorretos!");
    }
  };

  useEffect(() => {
    async function fetchPendingOffices() {
      try {
        const response = await axios.get(
          "https://advocacias-api-production.up.railway.app/api/pending-offices"
        );
        setPendingOffices(response.data);
      } catch (error) {
        console.error("Erro ao buscar escritórios pendentes", error);
      }
    }
    fetchPendingOffices();
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-xl shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Admin Login
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  const approveOffice = async (officeId) => {
    try {
      await axios.put(
        `https://advocacias-api-production.up.railway.app/api/approve-office/${officeId}`
      );
      setPendingOffices((prev) =>
        prev.filter((office) => office._id !== officeId)
      );
    } catch (error) {
      console.error("Erro ao aprovar escritório", error);
    }
  };

  const rejectOffice = async (officeId) => {
    try {
      await axios.delete(
        `https://advocacias-api-production.up.railway.app/api/offices/${officeId}`
      );
      setPendingOffices((prev) =>
        prev.filter((office) => office._id !== officeId)
      );
    } catch (error) {
      console.error("Erro ao rejeitar escritório", error);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl mb-5">Administração - Escritórios Pendentes</h1>
      {pendingOffices.map((office) => (
        <div key={office._id} className="border p-3 mb-3">
          <h2>{office.name}</h2>
          <p>
            <strong>Cidade:</strong> {office.city}
          </p>
          <p>
            <strong>Estado:</strong> {office.state}
          </p>
          <p>
            <strong>OAB:</strong> {office.oab}
          </p>
          <p>
            <strong>Especialidade:</strong> {office.especialidade}
          </p>
          <p>
            <strong>Telefone:</strong> {office.phone}
          </p>
          <p>
            <strong>Email:</strong> {office.email}
          </p>
          <p>
            <strong>Sobre:</strong> {office.about}
          </p>
          <button
            className="bg-green-500 text-white p-2 rounded mr-2"
            onClick={() => approveOffice(office._id)}
          >
            Aprovar
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded"
            onClick={() => rejectOffice(office._id)}
          >
            Rejeitar
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminPage;
