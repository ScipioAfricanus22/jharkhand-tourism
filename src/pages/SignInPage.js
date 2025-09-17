import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./SignInPage.css";

export default function SignInPage() {
  const [params] = useSearchParams();
  const type = params.get("type");
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    sex: "",
    nationality: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-in-page">
      <h2>{type === "vendor" ? "Vendor" : "Tourist"} Sign In</h2>
      <form>
        <input name="name" type="text" placeholder="Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" onChange={handleChange} required />
        <select name="sex" onChange={handleChange} required>
          <option value="">Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {type === "tourist" && (
          <>
            <input name="nationality" type="text" placeholder="Nationality" onChange={handleChange} required />
          </>
        )}
        <button type="button" className="id-verification-btn">
          ID Verification Portal
        </button>
      </form>
    </div>
  );
}
