import React from "react";
import "./Contact.css"

export default function Contact() {
  return (
    <div className="contact">
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
