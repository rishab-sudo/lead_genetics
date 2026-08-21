import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactForm.css";

const locations = [
  {
    id: 1,
    city: "Bareilly Headquarters",
    address:
      "B-31, Road No. 2, Parsakhera Industrial Area, C.B. Ganj, Bareilly, Uttar Pradesh 243502",
    phone: "+91 73111 49681",
    email: "Info@leadsgenetics.com",
    mapUrl: "https://maps.app.goo.gl/DJgKQ2rgvhQxFBo29",
  },
  {
    id: 2,
    city: "Noida Hub",
    address:
      "1ST FLOOR, PLOT NO. 014, Udyog Vihar Extension, Ecotech-II, Udyog Vihar, Greater Noida, Uttar Pradesh 201306",
    phone: "063899 13132",
    email: "Info@leadsgenetics.com",
    mapUrl:
      "https://www.google.com/maps/search/1ST+FLOOR,+PLOT+NO.+014,+Udyog+Vihar+Extension,+Ecotech-II,+Udyog+Vihar,+Greater+Noida,+Uttar+Pradesh+201306/@28.5467551,77.4232461,14z?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D",
  },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;

    if (!name.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Name Required",
        text: "Please enter your name.",
      });
      return false;
    }

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Phone Number",
        text: "Please enter a valid 10-digit phone number.",
      });
      return false;
    }

    if (message.trim().length < 10) {
      Swal.fire({
        icon: "warning",
        title: "Message Too Short",
        text: "Please enter at least 10 characters.",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      Swal.fire({
        icon: "success",
        title: "Submitted Successfully!",
        text: "Thank you for contacting us. We'll get back to you shortly.",
        confirmButtonColor: "#16A34A",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <>
      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">

          {/* Contact Information */}
          <div className="contact-right">
            <h3 className="section-heading">Contact Information</h3>

            <p>
              Reach out to our genomics experts for consultations,
              partnerships, or service inquiries.
            </p>

            <div className="contact-details">

              <div className="info-card">
                <div className="info-item">
                  <div className="info-icon">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+917311149681">
                      +91 73111 49681
                    </a>
                    <br />
                    <a href="tel:+916389913132">
                       +91  63899 13132
                    </a>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <div className="info-item">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:Info@leadsgenetics.com">
                      Info@leadsgenetics.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <div className="info-item">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4>Headquarters (Bareilly)</h4>
                    <p>
                      B-31, Road No. 2, Parsakhera Industrial Area, C.B. Ganj, Bareilly, Uttar Pradesh 243502
                    </p>
                    <h4 style={{ marginTop: "12px" }}>Noida Hub</h4>
                    <p>
                      1ST FLOOR, PLOT NO. 014, Udyog Vihar Extension, Ecotech-II, Udyog Vihar, Greater Noida, Uttar Pradesh 201306
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Google Maps */}
            <div className="map-container">
              <iframe
                title="Leads Genetics Headquarters"
                src="https://maps.google.com/maps?q=B-31%2C+Road+No.+2%2C+Parsakhera+Industrial+Area%2C+C.B.+Ganj%2C+Bareilly%2C+Uttar+Pradesh+243502&t=&z=14&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Contact Form */}
          <div className="contact-left">
            <div className="contact-heading">
              <h2 className="section-heading">Please Fill Out the Form</h2>
              <p>
                Have a question regarding our genomics services? We'd love to
                hear from you.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                className="submit-btn"
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* Locations Section */}
      <section className="locations-section">
        <div className="locations-container">

          <div className="locations-heading">
            <span>Our Locations</span>
            <h2 className="section-heading">Visit Our Genomics Hubs</h2>
            <p>
              We are expanding precision genomics across India through our
              research and diagnostic centers.
            </p>
          </div>

          <div className="locations-grid">
            {locations.map((office) => (
              <div className="location-card" key={office.id}>
                <h3>{office.city}</h3>

                <div className="location-info">
                  <FaMapMarkerAlt />
                  <p>{office.address}</p>
                </div>

                <div className="location-info">
                  <FaPhoneAlt />
                  <a href={`tel:${office.phone}`}>{office.phone}</a>
                </div>

                <div className="location-info">
                  <FaEnvelope />
                  <a href={`mailto:${office.email}`}>
                    {office.email}
                  </a>
                </div>

                <a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="direction-btn"
                >
                  Get Directions
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default ContactForm;