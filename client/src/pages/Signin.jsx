import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        console.log(data);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h3>Signin</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="passsword"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Signin</button>
      </form>
    </div>
  );
}
