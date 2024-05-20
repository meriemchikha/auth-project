import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Inscription() {
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    city: "",
    country: "",
  });
  console.log("formData----->", formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
  };
  return (
    <>
      <div className="flex flex-col  items-center py-24">
        <form
          className="space-y-4 p-4 md:items-center  flex flex-col justify-center shadow-2xl bg-white w-1/2   "
          onSubmit={handleSubmit}
        >
          <h1 className="mt-8 font-jacques text-2xl">Créer un compte</h1>
          <div className="flex  flex-row gap-6 md:w-96  ">
            <div className="flex flex-col">
              <h2>Prénom</h2>
              <input
                className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="Firstname"
                required
              />
            </div>
            <div className="flex flex-col">
              <h2>Nom de famille</h2>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Lastname"
                required
              />
            </div>
          </div>

          <div>
            <h2>Address</h2>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
            />
          </div>
          <div className="flex flex-row gap-6 md:w-96 ">
            <div>
              <h2>Ville</h2>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                required
              />
            </div>
            <div>
              <h2>Pays</h2>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="country"
                required
              />
            </div>
          </div>

          <div className="md:w-96">
            <h2>Email</h2>
            <input
              className="shadow appearance-none border rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>

          <div className="md:w-96">
            <h2>Mot de passe</h2>
            <input
              className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline relative"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Mot de passe"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            {errorMessage && (
              <p className="text-red-500 md:w-96 ">{errorMessage}</p>
            )}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 md:w-96 rounded focus:outline-none focus:shadow-outline"
            >
              S'inscrire
            </button>

            <Link to="/connexion">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
