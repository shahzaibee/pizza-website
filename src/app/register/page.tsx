"use client";

import Image from "next/image";
import React, { useState } from "react";
import google from "../../../public/google.png";
import { parseVersionInfo } from "next/dist/server/dev/parse-version-info";
import { json } from "stream/consumers";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleformSubmit(ev: any) {
    ev.preventDefault();

    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-type": "application/json" },
    });
  }

  return (
    <section>
      <h1 className="text-center text-primary text-4xl mt-8 mb-4">Register</h1>
      <form
        action=""
        className="block max-w-xs mx-auto"
        onSubmit={handleformSubmit}
      >
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="email"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 items-center justify-center">
          <Image src={google} alt="google" width={24} height={24} />
          Login with google
        </button>
      </form>
    </section>
  );
};

export default Register;
