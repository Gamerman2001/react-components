import React, {useState} from "react";
import "./Contact.css"

export default function Contact() {
  const [form, setForm] = useState({name: '', company: '', email: ''});

  const handleChange = (event) => {
    setForm({[event.target.name]: event.target.value});
    console.log(event.target.name)
  }
  return (
    <div className="contact">
      <form>
        <label>
          Name:
          <input type="text" value={form.name} onChange={handleChange} name="name" />
        </label>
        <label>
          Company:
          <input type="text" value={form.company} onChange={handleChange} name="company" />
        </label>
        <label>
          Email:
          <input type="text" value={form.emal} onChange={handleChange} name="email" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

