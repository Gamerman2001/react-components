import React, {useState} from "react";
import "./Contact.css"




export default function Contact() {
  const [form, setForm] = useState('');
  const handleChange = (event) => {
    setForm(event.target.value);
    console.log(event.target.value)
  }
  return (
    <div className="contact">
      <form>
        <label>
          Name:
          <input type="text" value={form} onChange={handleChange} name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

