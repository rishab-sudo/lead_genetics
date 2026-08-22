import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUpload,
} from "react-icons/fa";
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
    phone: " +91 63899 13132",
    email: "Info@leadsgenetics.com",
    mapUrl:
      "https://maps.app.goo.gl/EAFC2aJY6SCRAiRZ6?g_st=ac",
  },
];

const serviceTypes = [
  "Genomics Service",
  "Livestock & IVF",
  "Clinical Partnership",
  "Sample Logistics",
];

const serviceInterests = [
  "Agricultural Genomics",
  "Clinical Genomics",
  "Research Genomics",
  "Livestock Genomics",
  "IVF Services",
  "DNA Testing",
  "Whole Genome Sequencing",
  "Whole Exome Sequencing",
  "RNA Sequencing",
  "Other",
];

const sampleTypes = [
  "Blood",
  "Tissue",
  "Saliva",
  "Buccal Swab",
  "DNA",
  "RNA",
  "Plant Sample",
  "Animal Sample",
  "Other",
];

const initialFormData = {
  serviceType: "",
  serviceInterest: "",
  name: "",
  organisation: "",
  email: "",
  phone: "",
  sampleType: "",
  sampleCount: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length <= 10) {
      setFormData((prev) => ({
        ...prev,
        phone: value,
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      setSelectedFile(null);
      return;
    }

    const allowedExtensions = [
      "pdf",
      "doc",
      "docx",
      "xls",
      "xlsx",
      "csv",
      "txt",
      "jpg",
      "jpeg",
      "png",
    ];

    const extension = file.name
      .split(".")
      .pop()
      .toLowerCase();

    const maxSize = 5 * 1024 * 1024;

    if (!allowedExtensions.includes(extension)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid File Type",
        text:
          "Please upload PDF, DOC, DOCX, XLS, XLSX, CSV, TXT, JPG or PNG files only.",
        confirmButtonColor: "#0c2d63",
      });

      e.target.value = "";
      setSelectedFile(null);
      return;
    }

    if (file.size > maxSize) {
      Swal.fire({
        icon: "warning",
        title: "File Too Large",
        text: "Maximum allowed file size is 5 MB.",
        confirmButtonColor: "#0c2d63",
      });

      e.target.value = "";
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
  };

  const validateForm = () => {
    const {
      serviceType,
      serviceInterest,
      name,
      organisation,
      email,
      phone,
      sampleType,
      sampleCount,
      message,
    } = formData;

    if (!serviceType) {
      Swal.fire({
        icon: "warning",
        title: "Service Type Required",
        text: "Please select a service type.",
        confirmButtonColor: "#0c2d63",
      });
      return false;
    }

    if (!serviceInterest) {
      Swal.fire({
        icon: "warning",
        title: "Service Interest Required",
        text: "Please select your service interest.",
        confirmButtonColor: "#0c2d63",
      });
      return false;
    }

    if (!name.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Name Required",
        text: "Please enter your full name.",
        confirmButtonColor: "#0c2d63",
      });
      return false;
    }

    if (name.trim().length < 2) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Name",
        text: "Name must contain at least 2 characters.",
        confirmButtonColor: "#0c2d63",
      });
      return false;
    }

    if (!organisation.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Organisation Required",
        text: "Please enter your organisation name.",
        confirmButtonColor: "#0c2d63",
      });
      return false;
    }

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!email.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Email Required",
        text: "Please enter your email address.",
        confirmButtonColor: "#0c2d63",
      });
      return false;
    }

    if (!emailRegex.test(email.trim())) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#0c2d63",
      });
      return false;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Phone Number",
        text: "Please enter a valid 10-digit Indian mobile number.",
        confirmButtonColor: "#0c2d63",
      });
      return false;
    }

    if (!sampleType) {
      Swal.fire({
        icon: "warning",
        title: "Sample Type Required",
        text: "Please select the sample type.",
        confirmButtonColor: "#0c2d63",
      });
      return false;
    }

    if (!sampleCount || !/^\d+$/.test(sampleCount)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Sample Count",
        text: "Please enter a valid sample count.",
        confirmButtonColor: "#0c2d63",
      });
      return false;
    }

    if (Number(sampleCount) <= 0) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Sample Count",
        text: "Sample count must be greater than 0.",
        confirmButtonColor: "#0c2d63",
      });
      return false;
    }

    if (!message.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Message Required",
        text: "Please enter your message.",
        confirmButtonColor: "#0c2d63",
      });
      return false;
    }

    if (message.trim().length < 10) {
      Swal.fire({
        icon: "warning",
        title: "Message Too Short",
        text: "Message must contain at least 10 characters.",
        confirmButtonColor: "#0c2d63",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("serviceType", formData.serviceType);
      formDataToSend.append(
        "serviceInterest",
        formData.serviceInterest
      );
      formDataToSend.append("name", formData.name.trim());
      formDataToSend.append(
        "organisation",
        formData.organisation.trim()
      );
      formDataToSend.append("email", formData.email.trim());
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("sampleType", formData.sampleType);
      formDataToSend.append("sampleCount", formData.sampleCount);
      formDataToSend.append("message", formData.message.trim());

      if (selectedFile) {
        formDataToSend.append("attachment", selectedFile);
      }

      const response = await fetch("/send-contact.php", {
        method: "POST",
        body: formDataToSend,
      });

      const responseText = await response.text();

      let result;

      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error(
          "Invalid server response:",
          responseText
        );

        throw new Error(
          "The server returned an invalid response. Please check send-contact.php and SMTP configuration."
        );
      }

      setLoading(false);

      if (!response.ok) {
        throw new Error(
          result?.message ||
            "Server error while submitting the form."
        );
      }

      if (result.success) {
        await Swal.fire({
          icon: "success",
          title: "Submitted Successfully!",
          text:
            "Thank you for contacting us. We'll get back to you shortly.",
          confirmButtonColor: "#0c2d63",
        });

        setFormData(initialFormData);
        setSelectedFile(null);

        const fileInput =
          document.getElementById("contact-file");

        if (fileInput) {
          fileInput.value = "";
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text:
            result.message ||
            "Something went wrong. Please try again.",
          confirmButtonColor: "#0c2d63",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setLoading(false);

      Swal.fire({
        icon: "error",
        title: "Connection Error",
        text:
          error.message ||
          "Unable to connect with the server. Please try again later.",
        confirmButtonColor: "#0c2d63",
      });
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-container">

          <div className="contact-right">

            <h3 className="section-heading contact-left-heading">
              Contact Information
            </h3>

            <p className="contact-description">
              Reach out to our genomics experts for
              consultations, partnerships, or service
              inquiries.
            </p>

            <div className="contact-details">

              <div className="info-card">
                <div className="info-item">

                  <div className="info-icon">
                    <FaPhoneAlt />
                  </div>

                  <div className="info-content">
                    <h4>Phone</h4>

                    <a href="tel:+917311149681">
                      +91 73111 49681
                    </a>

                    <br />

                    <a href="tel:+916389913132">
                      +91 63899 13132
                    </a>
                  </div>

                </div>
              </div>

              <div className="info-card">
                <div className="info-item">

                  <div className="info-icon">
                    <FaEnvelope />
                  </div>

                  <div className="info-content">
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

                  <div className="info-content">

                    <h4>
                      Headquarters (Bareilly)
                    </h4>

                    <p>
                      B-31, Road No. 2, Parsakhera
                      Industrial Area, C.B. Ganj,
                      Bareilly, Uttar Pradesh 243502
                    </p>

                    <h4 className="second-address-title">
                      Noida Hub
                    </h4>

                    <p>
                      1ST FLOOR, PLOT NO. 014,
                      Udyog Vihar Extension,
                      Ecotech-II, Udyog Vihar,
                      Greater Noida, Uttar Pradesh
                      201306
                    </p>

                  </div>

                </div>
              </div>

            </div>

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

          <div className="contact-left">

            <div className="contact-heading">

              <h2 className="section-heading">
                Please Fill Out the Form
              </h2>

              <p>
                Have a question regarding our genomics
                services? We'd love to hear from you.
              </p>

            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              noValidate
            >

              <div className="form-group">

                <label htmlFor="serviceType">
                  Service Type
                  <span>*</span>
                </label>

                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  <option value="">
                    Select Service Type
                  </option>

                  {serviceTypes.map((item) => (
                    <option
                      value={item}
                      key={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>

              </div>

              <div className="form-group">

                <label htmlFor="serviceInterest">
                  Service Interest
                  <span>*</span>
                </label>

                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                >
                  <option value="">
                    Select Service Interest
                  </option>

                  {serviceInterests.map((item) => (
                    <option
                      value={item}
                      key={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>

              </div>

              <div className="form-group">

                <label htmlFor="name">
                  Full Name
                  <span>*</span>
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={80}
                />

              </div>

              <div className="form-group">

                <label htmlFor="organisation">
                  Organisation
                  <span>*</span>
                </label>

                <input
                  id="organisation"
                  type="text"
                  name="organisation"
                  placeholder="Your organisation / company"
                  value={formData.organisation}
                  onChange={handleChange}
                  maxLength={120}
                />

              </div>

              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                  <span>*</span>
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={120}
                />

              </div>

              <div className="form-group">

                <label htmlFor="phone">
                  Phone Number
                  <span>*</span>
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  maxLength={10}
                  inputMode="numeric"
                />

              </div>

              <div className="form-group">

                <label htmlFor="sampleType">
                  Sample Type
                  <span>*</span>
                </label>

                <select
                  id="sampleType"
                  name="sampleType"
                  value={formData.sampleType}
                  onChange={handleChange}
                >
                  <option value="">
                    Select Sample Type
                  </option>

                  {sampleTypes.map((item) => (
                    <option
                      value={item}
                      key={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>

              </div>

              <div className="form-group">

                <label htmlFor="sampleCount">
                  Sample Type & Count
                  <span>*</span>
                </label>

                <input
                  id="sampleCount"
                  type="number"
                  name="sampleCount"
                  placeholder="Enter sample count"
                  value={formData.sampleCount}
                  onChange={handleChange}
                  min="1"
                />

              </div>

              <div className="form-group">

                <label htmlFor="message">
                  Message
                  <span>*</span>
                </label>

                <textarea
                  id="message"
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={1000}
                />

                <div className="character-count">
                  {formData.message.length}/1000
                </div>

              </div>

              <div className="form-group">

                <label htmlFor="contact-file">
                  File Upload
                  <small> (Optional)</small>
                </label>

                <div className="file-upload-wrapper">

                  <input
                    id="contact-file"
                    type="file"
                    name="attachment"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.jpg,.jpeg,.png"
                  />

                  <label
                    htmlFor="contact-file"
                    className="file-upload-label"
                  >
                    <FaUpload />

                    <span className="file-name">
                      {selectedFile
                        ? selectedFile.name
                        : "Choose a file"}
                    </span>
                  </label>

                </div>

                <small className="file-help">
                  PDF, DOC, DOCX, XLS, XLSX, CSV,
                  TXT, JPG or PNG. Maximum 5 MB.
                </small>

              </div>

              <button
                className="submit-btn"
                type="submit"
                disabled={loading}
              >
                {loading
                  ? "Sending..."
                  : "Submit"}
              </button>

            </form>

          </div>

        </div>
      </section>

      <section className="locations-section">

        <div className="locations-container">

          <div className="locations-heading">

            <span>Our Locations</span>

            <h2 className="section-heading">
              Visit Our Genomics Hubs
            </h2>

            <p>
              We are expanding precision genomics
              across India through our research and
              diagnostic centers.
            </p>

          </div>

          <div className="locations-grid">

            {locations.map((office) => (

              <div
                className="location-card"
                key={office.id}
              >

                <h3>{office.city}</h3>

                <div className="location-info">

                  <FaMapMarkerAlt />

                  <p>
                    {office.address}
                  </p>

                </div>

                <div className="location-info">

                  <FaPhoneAlt />

                  <a href={`tel:${office.phone}`}>
                    {office.phone}
                  </a>

                </div>

                <div className="location-info">

                  <FaEnvelope />

                  <a
                    href={`mailto:${office.email}`}
                  >
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