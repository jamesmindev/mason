"use client";
import PageAnim from "@/layouts/PageAnim";
import { FormEvent, useRef, useState } from "react";
import Logo from "@/components/Logo";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/Button";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Apply = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const containerRef = useRef(null);
  useGSAP(
    () => {
      gsap.from(".stay-informed", {
        delay: 0.6,
        opacity: 0,
      });
    },
    { scope: containerRef },
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="page-apply" ref={containerRef}>
      <div className="wrapper">
        {!formSubmitted && (
          <div className="form-container">
            <div className="branding">
              <Logo />
              <p>Mason Homes Application</p>
            </div>

            <h2>Let's create an account to start your application</h2>

            <form className="form-signup" onSubmit={handleSubmit}>
              <div className="flex-h">
                <label>
                  <p>First Name</p>
                  <input
                    id="name"
                    type="text"
                    placeholder="John"
                    required
                  />
                </label>

                <label>
                  <p>Last Name</p>
                  <input
                    id="name"
                    type="text"
                    placeholder="Smith"
                    required
                  />
                </label>
              </div>

              <label>
                <p>Email</p>
                <input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                />
              </label>

              <label>
                <p>Password</p>
                <input
                  id="password"
                  type="password"
                  placeholder="Create password"
                  required
                />
              </label>

              <label>
                <p>Confirm password</p>
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm password"
                  required
                />
              </label>

              <input type="submit" value="Create Account" />
            </form>
          </div>
        )}

        {formSubmitted && (
          <>
            <div className="form-container">
              <div className="confirm-email">
                <div className="icon">
                  <img src="/icons/icon-mark-email-read.svg" alt="icon" />
                </div>
                <h2>Confirm your email</h2>
                <p>To get started, we need to confirm your email address. Simply click the link we’ve sent to your email. This helps us ensure the security and accuracy of your information.</p>

                <div className="resend-email">
                  <p>Didn't Receive the Email?</p>
                  <p>Check your spam or junk folder just in case it got misdirected. If you still can’t find it, you can resend the confirmation email.</p>
                  <Button href="" size="sm">Resend Confirmation Email</Button>
                </div>
              </div>
            </div>

            <div className="trial-notice">
              <p>Thanks for trying out!</p>
              <p>This website is a prototype intended for demo purposes only. All data is not permanently stored and features presented are for illustrative purposes only. No actual email is sent for vertification.</p>
            </div>
          </>
        )}
      </div>
    </div>

  );
};

export default Apply;
