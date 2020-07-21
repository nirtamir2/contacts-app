import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { useCreateContact } from "../api";
import { IContact } from "../interfaces";
import { Button, Input } from "../ui-core";
import "./NewContactScreen.css";

type FormT = Omit<IContact, "id">;

const EMAIL_ADDRESS_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export function NewContactScreen() {
  const { handleSubmit, control, errors: formErrors } = useForm<FormT>();
  const navigate = useNavigate();
  function handleNavigateToContactsScreen() {
    navigate("/");
  }
  const { createContact, loading, error } = useCreateContact({
    onCompleted: handleNavigateToContactsScreen,
  });

  function handleCreateNewContact(data: FormT) {
    createContact({
      variables: data,
    });
  }

  return (
    <div className="NewContactScreen">
      <div className="NewContactScreen__title">New Contact</div>
      <form
        onSubmit={handleSubmit(handleCreateNewContact)}
        className="NewContactScreen__form"
      >
        <div className="NewContactScreen__fields">
          <Controller
            name="firstName"
            defaultValue=""
            control={control}
            rules={{
              required: true,
            }}
            render={(props) => (
              <label className="NewContactScreen__label">
                <div className="NewContactScreen__label-text">First Name</div>
                <div className="NewContactScreen__field">
                  <Input {...props} error={formErrors.firstName != null} />
                  <div className="NewContactScreen__error">
                    {formErrors.firstName != null
                      ? "First Name is required"
                      : null}
                  </div>
                </div>
              </label>
            )}
          />
          <Controller
            name="lastName"
            defaultValue=""
            control={control}
            rules={{
              required: true,
            }}
            render={(props) => (
              <label className="NewContactScreen__label">
                <div className="NewContactScreen__label-text">Last Name</div>
                <div className="NewContactScreen__field">
                  <Input {...props} error={formErrors.lastName != null} />
                  <div className="NewContactScreen__error">
                    {formErrors.lastName != null
                      ? "Last Name is required"
                      : null}
                  </div>
                </div>
              </label>
            )}
          />
          <Controller
            name="email"
            defaultValue=""
            control={control}
            rules={{
              pattern: {
                value: EMAIL_ADDRESS_REGEX,
                message: "Invalid email address",
              },
            }}
            render={(props) => (
              <label className="NewContactScreen__label">
                <div className="NewContactScreen__label-text">Email</div>
                <div className="NewContactScreen__field">
                  <Input
                    {...props}
                    type="email"
                    error={formErrors.email != null}
                  />
                  <div className="NewContactScreen__error">
                    {formErrors.email?.message}
                  </div>
                </div>
              </label>
            )}
          />
          <Controller
            name="phone"
            defaultValue=""
            control={control}
            render={(props) => (
              <label className="NewContactScreen__label">
                <div className="NewContactScreen__label-text">Phone</div>
                <div className="NewContactScreen__field">
                  <Input {...props} type="tel" />
                </div>
              </label>
            )}
          />
        </div>
        <div className="NewContactScreen__buttons">
          <Button type="submit">Save</Button>
          <Link to="/">Cancel</Link>
        </div>
      </form>
      {loading ? "Loading..." : null}
      {error != null ? "Error" : null}
    </div>
  );
}
