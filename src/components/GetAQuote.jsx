import React, { useState } from "react";
import Swal from "sweetalert2";
import "./GetAQuote.css";

const GetAQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    description: "",
    organization: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const {
      name,
      phone,
      email,
      service,
      description,
      organization,
    } = formData;

    // Name validation
    if (!name.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Name Required",
        text: "Please enter your name.",
        confirmButtonColor: "#1976d2",
      });
      return false;
    }

    if (name.trim().length < 2) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Name",
        text: "Name must contain at least 2 characters.",
        confirmButtonColor: "#1976d2",
      });
      return false;
    }

    // Phone validation
    if (!phone.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Phone Required",
        text: "Please enter your phone number.",
        confirmButtonColor: "#1976d2",
      });
      return false;
    }

    const phoneRegex = /^[+]?[0-9\s-]{10,15}$/;

    if (!phoneRegex.test(phone.trim())) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Phone Number",
        text: "Please enter a valid phone number.",
        confirmButtonColor: "#1976d2",
      });
      return false;
    }

    // Email validation
    if (!email.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Email Required",
        text: "Please enter your work email.",
        confirmButtonColor: "#1976d2",
      });
      return false;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailRegex.test(email.trim())) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#1976d2",
      });
      return false;
    }

    // Service validation
    if (!service) {
      Swal.fire({
        icon: "warning",
        title: "Select a Service",
        text: "Please select a service or product you're interested in.",
        confirmButtonColor: "#1976d2",
      });
      return false;
    }

    // Organization validation
    if (!organization.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Organization Required",
        text: "Please enter your organization name.",
        confirmButtonColor: "#1976d2",
      });
      return false;
    }

    // Description validation
    if (!description.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Project Description Required",
        text: "Please describe your project.",
        confirmButtonColor: "#1976d2",
      });
      return false;
    }

    if (description.trim().length < 10) {
      Swal.fire({
        icon: "warning",
        title: "Description Too Short",
        text: "Please provide at least 10 characters about your project.",
        confirmButtonColor: "#1976d2",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate before submitting
    if (!validateForm()) {
      return;
    }

    // Confirmation popup
    const result = await Swal.fire({
      title: "Submit Quote Request?",
      text: "Please confirm that the information you've provided is correct.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Submit",
      cancelButtonText: "Review",
      confirmButtonColor: "#1976d2",
      cancelButtonColor: "#64748b",
    });

    if (!result.isConfirmed) {
      return;
    }

    // Loading popup
    Swal.fire({
      title: "Submitting Request",
      text: "Please wait while we submit your request...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      // Success
      await Swal.fire({
        icon: "success",
        title: "Request Submitted!",
        text: "Thank you. Our team will get back to you shortly.",
        confirmButtonText: "Done",
        confirmButtonColor: "#1976d2",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        description: "",
        organization: "",
      });
    } catch (error) {
      console.error("Quote request error:", error);

      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong while submitting your request. Please try again later.",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#1976d2",
      });
    }
  };

  return (
    <section className="get-quote">
      <div className="get-quote-container">

        {/* IMAGE SIDE */}
        <div className="get-quote-image">
          <div className="quote-image-overlay">
            <span className="quote-tag">
              ADVANCING GENOMICS
            </span>

            <h2>
              Let's Advance
              <br />
              Your Research
            </h2>

            <p>
              Share your project details and our experts
              will connect with you shortly.
            </p>
          </div>
        </div>

        {/* FORM SIDE */}
        <div className="get-quote-content">

          <div className="quote-header">
            <span className="quote-icon">▤</span>

            <div>
              <h2>Quote Request</h2>

              <p>
                Tell us about your project and we'll get back to you.
              </p>
            </div>
          </div>

          <form
            className="quote-form"
            onSubmit={handleSubmit}
            noValidate
          >

            {/* NAME + PHONE */}
            <div className="quote-row">

              <div className="quote-field">
                <label htmlFor="name">
                  Name:
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>

              <div className="quote-field">
                <label htmlFor="phone">
                  Phone:
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>

            </div>

            {/* EMAIL */}
            <div className="quote-field">
              <label htmlFor="email">
                Email:
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />

              <span className="field-help">
                Providing your work email helps us offer the best
                support for your research.
              </span>
            </div>

            {/* SERVICE + ORGANIZATION */}
            <div className="quote-row">

              <div className="quote-field">
                <label htmlFor="service">
                  Services &amp; Products of Interest:
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">
                    Service &amp; Products Interested
                  </option>

                  <option value="agri-genomics">
                    Agri Genomics
                  </option>

                  <option value="clinical-genomics">
                    Clinical Genomics
                  </option>

                  <option value="animal-livestock">
                    Animal &amp; Livestock Genomics
                  </option>

                  <option value="ivf-reproductive">
                    IVF &amp; Reproductive Genomics
                  </option>

                  <option value="sequencing">
                    Sequencing Services
                  </option>

                  <option value="bioinformatics">
                    Bioinformatics
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              <div className="quote-field">
                <label htmlFor="organization">
                  Organization:
                </label>

                <input
                  id="organization"
                  type="text"
                  name="organization"
                  placeholder="Organization"
                  value={formData.organization}
                  onChange={handleChange}
                  autoComplete="organization"
                />
              </div>

            </div>

            {/* PROJECT DESCRIPTION */}
            <div className="quote-field description-field">
              <label htmlFor="description">
                Project Description:
              </label>

              <textarea
                id="description"
                name="description"
                placeholder="Please Input Project Description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            {/* DISCLAIMER + SUBMIT */}
            <div className="quote-bottom">

              <div className="quote-disclaimer">
                <span>!</span>

                <p>
                  For research purposes only, not intended for
                  clinical diagnosis, treatment, or individual
                  health assessments.
                </p>
              </div>

              <button
                type="submit"
                className="quote-submit"
              >
                Submit
                <span>↗</span>
              </button>

            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default GetAQuote;