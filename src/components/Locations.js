import React from "react";
import "./Locations.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const locations = [
  {
    id: 1,
    city: "Bareilly Headquarters",
    address:
      "123, Research Park, Bareilly, Uttar Pradesh - 243001",
    phone: "+91 98765 43210",
    email: "bareilly@leadsgenetics.com",
  },
  {
    id: 2,
    city: "Lucknow Hub",
    address:
      "456, Innovation Centre, Gomti Nagar, Lucknow, Uttar Pradesh - 226010",
    phone: "+91 98765 43211",
    email: "lucknow@leadsgenetics.com",
  },
];

const Locations = () => {
  return (
    <section className="locations-section">
      <div className="locations-container">

        <div className="locations-heading">
          <span>Our Locations</span>
          <h2>Visit Our Genomics Hubs</h2>
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
  href="https://maps.app.goo.gl/YDrRKUbqp7qmtowV9"
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
  );
};

export default Locations;