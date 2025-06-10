"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name !== "phone") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Phone input handled separately for digit-only logic
  const handlePhoneChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    if (onlyDigits.length <= 10) {
      setFormData((prev) => ({ ...prev, phone: onlyDigits }));
    }
  };

  useEffect(() => {
    if (
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match.",
      }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.confirmPassword;
        return newErrors;
      });
    }
  }, [formData.password, formData.confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name.trim()) validationErrors.name = "Full Name is required.";
    if (!formData.email.trim()) validationErrors.email = "Email is required.";
    if (formData.phone.length !== 10)
      validationErrors.phone = "Phone number must be exactly 10 digits.";
    if (!formData.password) validationErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match.";
      alert("Error: Passwords do not match.");
    }
    if (!formData.role) validationErrors.role = "Please select a role.";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => {
        alert("Registered successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          role: "",
        });
        setSubmitted(false);
      }, 1000);
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-8 bg-white">
      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-4 left-4 text-black font-bold text-sm bg-white px-2 py-1 rounded hover:underline z-10"
      >
        &lt; Back
      </Link>

      {/* Left Panel */}
      <aside className="bg-[#5E5D5D1A] rounded-3xl flex flex-col items-center justify-center p-6 w-full md:w-[25rem] h-auto md:h-[30rem]">
        <header className="w-full flex justify-center z-10">
          <div className="w-[40%]">
            <Image
              className="block h-auto w-full object-contain"
              src="/revivelogo.svg"
              alt="Revive logo"
              width={250}
              height={300}
            />
          </div>
        </header>

        <figure className="w-full flex justify-center -mt-20 z-0 mb-8">
          <div className="w-[65%]">
            <Image
              className="block h-auto w-full object-contain"
              src="/sideimg.svg"
              alt="Recycling theme illustration"
              width={500}
              height={500}
            />
          </div>
        </figure>
      </aside>

      {/* Right Panel */}
      <section className="bg-[#5E5D5D1A] rounded-3xl flex flex-col items-center justify-center p-6 w-full md:w-[35rem] h-auto md:h-[30rem]">
        <div className="w-full max-w-md">
          <nav className="flex justify-center mb-4">
            <ul className="flex gap-10">
              <li>
                <Link
                  href="/login"
                  className="text-center font-medium text-black pb-2 hover:border-b-2 hover:border-green-700"
                >
                  Login
                </Link>
              </li>
              <li>
                <span className="text-center font-medium text-black pb-2 border-b-2 border-green-700">
                  Sign Up
                </span>
              </li>
            </ul>
          </nav>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4"
            noValidate
          >
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className={`border ${
                errors.name ? "border-red-500" : "border-black/70"
              } rounded-3xl px-3 py-2 text-sm text-black bg-transparent placeholder:text-black/50 focus:border-lime-400 outline-none h-8`}
            />
            {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}

            <input
              name="email"
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className={`border ${
                errors.email ? "border-red-500" : "border-black/70"
              } rounded-3xl px-3 py-2 text-sm text-black bg-transparent placeholder:text-black/50 focus:border-lime-400 outline-none h-8`}
            />
            {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}

            {/* ✅ Updated phone input field below */}
            <input
              name="phone"
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Phone (10 digits)"
              value={formData.phone}
              onChange={handlePhoneChange}
              className={`border ${
                errors.phone ? "border-red-500" : "border-black/70"
              } rounded-3xl px-3 py-2 text-sm text-black bg-transparent placeholder:text-black/50 focus:border-lime-400 outline-none h-8`}
            />
            {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}

            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`border ${
                errors.password ? "border-red-500" : "border-black/70"
              } rounded-3xl px-3 py-2 text-sm text-black bg-transparent placeholder:text-black/50 focus:border-lime-400 outline-none h-8`}
            />
            {errors.password && (
              <p className="text-xs text-red-600">{errors.password}</p>
            )}

            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`border ${
                errors.confirmPassword ? "border-red-500" : "border-black/70"
              } rounded-3xl px-3 py-2 text-sm text-black bg-transparent placeholder:text-black/50 focus:border-lime-400 outline-none h-8`}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-600">{errors.confirmPassword}</p>
            )}

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={`border ${
                errors.role ? "border-red-500" : "border-black/70"
              } rounded-3xl px-3 py-2 text-sm bg-transparent text-black focus:border-lime-400 outline-none h-8`}
            >
              <option value="">Join As</option>
              <option value="Customer">Customer</option>
              <option value="Raddiwala">Raddiwala</option>
              <option value="Company">Company</option>
            </select>
            {errors.role && <p className="text-xs text-red-600">{errors.role}</p>}

            <button
              type="submit"
              className="w-full h-[2rem] flex items-center justify-center text-sm font-medium bg-black text-white rounded-[1.5rem] hover:bg-gray-900"
            >
              {submitted ? "Registered ✅" : "Register"}
            </button>
          </form>

          <Link href="/login" className="block mt-3">
            <div className="w-full h-[2rem] flex items-center justify-center text-sm font-medium bg-[#c5e863] text-black rounded-[1.5rem]">
              Have account? Sign In
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
