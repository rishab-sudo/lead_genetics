
import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import "./Registration.css";

import registrationBanner from "../assets/registration-banner.jpg";

// =========================================
// EVENT DATES
// =========================================

const YEAR = 2026;
const MONTH_INDEX = 8; // September
const MONTH_LABEL = "September 2026";
const AVAILABLE_DAYS = [14, 15, 16, 17];

const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

const dayToLabel = (day) => `Sep ${day}`;

// =========================================
// BUILD EVENT CALENDAR ROW
// =========================================

const buildEventWeekRow = () => {
  const row = Array(7).fill(null);

  AVAILABLE_DAYS.forEach((day) => {
    const weekdayIndex = new Date(
      YEAR,
      MONTH_INDEX,
      day
    ).getDay();

    row[weekdayIndex] = day;
  });

  return row;
};

// =========================================
// REGISTRATION COMPONENT
// =========================================

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institute: "",
    department: "",
    researchArea: "",
    designation: "",
    dates: [],
  });

  const [loading, setLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const dateFieldRef = useRef(null);

  const eventWeekRow = buildEventWeekRow();

  // =========================================
  // CLOSE CALENDAR ON OUTSIDE CLICK
  // =========================================

  useEffect(() => {
    if (!showCalendar) return;

    const handleOutsideClick = (e) => {
      if (
        dateFieldRef.current &&
        !dateFieldRef.current.contains(e.target)
      ) {
        setShowCalendar(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    document.addEventListener(
      "touchstart",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

      document.removeEventListener(
        "touchstart",
        handleOutsideClick
      );
    };
  }, [showCalendar]);

  // =========================================
  // HANDLE INPUT CHANGE
  // =========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================================
  // HANDLE DATE SELECTION
  // =========================================

  const handleDateToggle = (day) => {
    const label = dayToLabel(day);

    setFormData((prev) => {
      const alreadySelected =
        prev.dates.includes(label);

      const updatedDates = alreadySelected
        ? prev.dates.filter(
            (selectedDate) =>
              selectedDate !== label
          )
        : [...prev.dates, label].sort(
            (a, b) =>
              parseInt(a.replace("Sep ", ""), 10) -
              parseInt(b.replace("Sep ", ""), 10)
          );

      return {
        ...prev,
        dates: updatedDates,
      };
    });
  };

  // =========================================
  // VALIDATION
  // =========================================

  const validateForm = () => {
    const nameRegex =
      /^[A-Za-zÀ-ÿ\s.'-]{2,100}$/;

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const phoneRegex = /^[6-9]\d{9}$/;

    // NAME
    if (!formData.name.trim()) {
      return "Please enter your name.";
    }

    if (!nameRegex.test(formData.name.trim())) {
      return "Please enter a valid name.";
    }

    // EMAIL
    if (!formData.email.trim()) {
      return "Please enter your email address.";
    }

    if (!emailRegex.test(formData.email.trim())) {
      return "Please enter a valid email address.";
    }

    // PHONE
    if (!formData.phone.trim()) {
      return "Please enter your phone number.";
    }

    if (!phoneRegex.test(formData.phone.trim())) {
      return "Please enter a valid 10-digit Indian mobile number.";
    }

    // INSTITUTE
    if (!formData.institute.trim()) {
      return "Please enter your institute name / affiliation.";
    }

    // DEPARTMENT
    if (!formData.department.trim()) {
      return "Please enter your department.";
    }

    // RESEARCH AREA
    if (!formData.researchArea.trim()) {
      return "Please enter your area of research.";
    }

    // DESIGNATION
    if (!formData.designation.trim()) {
      return "Please enter your designation.";
    }

    // DATE
    if (formData.dates.length === 0) {
      return "Please select at least one date.";
    }

    return null;
  };

  // =========================================
  // SUBMIT FORM
  // =========================================

const handleSubmit = async (e) => {
  e.preventDefault();

  const validationError = validateForm();

  if (validationError) {
    Swal.fire({
      icon: "warning",
      title: "Please Check",
      text: validationError,
      confirmButtonText: "OK",
    });

    return;
  }

  setLoading(true);

  try {
    const submitData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      institute: formData.institute.trim(),
      department: formData.department.trim(),
      researchArea: formData.researchArea.trim(),
      designation: formData.designation.trim(),
      dates: formData.dates.join(", "),
    };

    const response = await fetch("/cattleevent.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Accept: "application/json",
      },
      body: new URLSearchParams(submitData).toString(),
    });

    const responseText = await response.text();

    let result;

    try {
      result = JSON.parse(responseText);
    } catch (jsonError) {
      console.error("Invalid PHP response:", responseText);

      throw new Error(
        "Server returned an invalid response."
      );
    }

    if (!response.ok || !result.success) {
      throw new Error(
        result.message ||
        "Registration could not be submitted."
      );
    }

    await Swal.fire({
      icon: "success",
      title: "Registration Successful!",
      text:
        result.message ||
        "Thank you for registering. We will contact you shortly.",
      confirmButtonText: "OK",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      institute: "",
      department: "",
      researchArea: "",
      designation: "",
      dates: [],
    });

    setShowCalendar(false);

  } catch (error) {
    console.error("Registration Error:", error);

    Swal.fire({
      icon: "error",
      title: "Registration Failed",
      text:
        error.message ||
        "Unable to submit your registration right now. Please try again later.",
      confirmButtonText: "OK",
    });

  } finally {
    setLoading(false);
  }
};
  // =========================================
  // JSX
  // =========================================

  return (
    <main className="registration-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section
        className="registration-hero"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.58),
            rgba(0, 0, 0, 0.58)
          ), url("${registrationBanner}")`,
        }}
      >
        <div className="registration-hero-content">
          <span className="registration-eyebrow"></span>

          <h1 className="section-heading">
            INVITATION
          </h1>

          <p>
            Live Birth of India's First Elite,
            Genetically Selected Gir Calves
          </p>
        </div>
      </section>

      {/* =====================================
          FORM
      ===================================== */}

      <section className="registration-form-section">
        <div className="registration-container">

          <div className="registration-form-box">

            <div className="registration-form-heading">

              <span className="registration-form-eyebrow section-subHeading">
                EVENT REGISTRATION
              </span>

              <h2 className="section-heading">
                CATTLE GENOMICS SUMMIT 2026
              </h2>

              <p>
                Please fill in the details below to
                complete your registration.
              </p>

            </div>

            <form
              className="registration-form"
              onSubmit={handleSubmit}
              noValidate
            >

              {/* =====================================
                  ROW 1
              ===================================== */}

              <div className="registration-form-row">

                <div className="registration-field">

                  <label htmlFor="name">
                    Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    maxLength="100"
                    autoComplete="name"
                    required
                  />

                </div>

                <div className="registration-field">

                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    maxLength="150"
                    autoComplete="email"
                    required
                  />

                </div>

              </div>

              {/* =====================================
                  ROW 2
              ===================================== */}

              <div className="registration-form-row">

                <div className="registration-field">

                  <label htmlFor="phone">
                    Phone No. <span>*</span>
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      const value =
                        e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10);

                      setFormData((prev) => ({
                        ...prev,
                        phone: value,
                      }));
                    }}
                    placeholder="Enter 10-digit mobile number"
                    maxLength="10"
                    inputMode="numeric"
                    autoComplete="tel"
                    required
                  />

                </div>

                <div className="registration-field">

                  <label htmlFor="institute">
                    Institute Name / Affiliation{" "}
                    <span>*</span>
                  </label>

                  <input
                    type="text"
                    id="institute"
                    name="institute"
                    value={formData.institute}
                    onChange={handleChange}
                    placeholder="Enter institute / affiliation"
                    maxLength="150"
                    required
                  />

                </div>

              </div>

              {/* =====================================
                  ROW 3
              ===================================== */}

              <div className="registration-form-row">

                <div className="registration-field">

                  <label htmlFor="department">
                    Department <span>*</span>
                  </label>

                  <input
                    type="text"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="Enter your department"
                    maxLength="100"
                    required
                  />

                </div>

                <div className="registration-field">

                  <label htmlFor="researchArea">
                    Area of Research <span>*</span>
                  </label>

                  <input
                    type="text"
                    id="researchArea"
                    name="researchArea"
                    value={formData.researchArea}
                    onChange={handleChange}
                    placeholder="Enter your research area"
                    maxLength="150"
                    required
                  />

                </div>

              </div>

              {/* =====================================
                  ROW 4
              ===================================== */}

              <div className="registration-form-row">

                <div className="registration-field">

                  <label htmlFor="designation">
                    Designation <span>*</span>
                  </label>

                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Enter your designation"
                    maxLength="100"
                    required
                  />

                </div>

                {/* DATE PICKER */}

                <div className="registration-field">

                  <label>
                    Date <span>*</span>
                  </label>

                  <div
                    className="registration-date-wrapper"
                    ref={dateFieldRef}
                  >

                    <button
                      type="button"
                      className={`registration-date-trigger ${
                        showCalendar
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        setShowCalendar(
                          (prev) => !prev
                        )
                      }
                    >

                      <span
                        className={
                          formData.dates.length > 0
                            ? "registration-date-trigger-text"
                            : "registration-date-trigger-placeholder"
                        }
                      >
                        {formData.dates.length > 0
                          ? formData.dates.join(", ")
                          : "Select date(s)"}
                      </span>

                      <svg
                        className="registration-date-trigger-icon"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 2v3M17 2v3M3.5 9h17M5 4.5h14A1.5 1.5 0 0 1 20.5 6v13a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V6A1.5 1.5 0 0 1 5 4.5Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                    </button>

                    {/* CALENDAR */}

                    {showCalendar && (
                      <div className="registration-date-calendar">

                        <div className="registration-calendar-month">
                          {MONTH_LABEL}
                        </div>

                        <div className="registration-calendar-weekdays">

                          {WEEKDAY_LABELS.map(
                            (w, i) => (
                              <span key={i}>
                                {w}
                              </span>
                            )
                          )}

                        </div>

                        <div className="registration-calendar-row">

                          {eventWeekRow.map(
                            (day, idx) => {

                              if (day === null) {
                                return (
                                  <span
                                    key={idx}
                                    className="registration-calendar-day empty"
                                  />
                                );
                              }

                              const isSelected =
                                formData.dates.includes(
                                  dayToLabel(day)
                                );

                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  className={`registration-calendar-day available ${
                                    isSelected
                                      ? "selected"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    handleDateToggle(
                                      day
                                    )
                                  }
                                >
                                  {day}
                                </button>
                              );
                            }
                          )}

                        </div>

                        <div className="registration-calendar-footer">

                          <button
                            type="button"
                            className="registration-calendar-done"
                            onClick={() =>
                              setShowCalendar(false)
                            }
                          >
                            Done
                          </button>

                        </div>

                      </div>
                    )}

                  </div>

                  <div className="selected-dates-text">
                    {formData.dates.length > 0
                      ? `Selected: ${formData.dates.join(
                          ", "
                        )}`
                      : "No dates selected yet"}
                  </div>

                </div>

              </div>

              {/* =====================================
                  SUBMIT
              ===================================== */}

              <div className="registration-submit-wrapper">

                <button
                  type="submit"
                  className="registration-submit-btn"
                  disabled={loading}
                >

                  {loading ? (
                    <>
                      <span className="registration-spinner"></span>
                      SUBMITTING...
                    </>
                  ) : (
                    "SUBMIT REGISTRATION"
                  )}

                </button>

              </div>

            </form>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Registration;

