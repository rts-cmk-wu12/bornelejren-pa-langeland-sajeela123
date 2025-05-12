
import React, { useState } from "react";

const Sponsor = () => {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    email: "",
    address: "",
    phone: "",
    amount: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Tak for din støtte!"); // Placeholder — replace with real submit later
    console.log(formData);
  };

  return (
    <section className="sponsor-container">
      <h1>Tilmeld som sponsor</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Støttetype:
          <select name="type" value={formData.type} onChange={handleChange} required>
            <option value="">-- Vælg --</option>
            <option value="børnesponsor">Børnesponsor (4.000 kr)</option>
            <option value="lejrsponsor">Lejrsponsor (2.000 kr)</option>
            <option value="diplomsponsor">Diplomsponsor (min. 1.000 kr)</option>
          </select>
        </label>

        <label>
          Firmanavn:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Adresse:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>

        <label>
          Telefon:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>

        <label>
          Beløb (DKK):
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
        </label>

        <button type="submit" style={{ backgroundColor: "#d0000b", color: "white", padding: "0.5rem 1rem" }}>
          Send
        </button>
      </form>
    </section>
  );
};

export default Sponsor;
