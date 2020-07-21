import React from "react";
import "./ContactItem.css";

interface IProps {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
}

const AVATAR_SIZE = 50;
const BASE_AVATAR_URL = `https://api.adorable.io/avatars/${AVATAR_SIZE}`;
// Note: I prefer to include the default avatar in the bundle instead of fetching it
const DEFAULT_AVATAR_URL =
  "https://api.adorable.io/avatars/face/eyes4/nose3/mouth7/8e8895";

export function ContactItem(props: IProps) {
  const { email, firstName, lastName, phone } = props;
  const fullName = `${firstName} ${lastName}`;
  const imageUrl = email ? `${BASE_AVATAR_URL}/${email}` : DEFAULT_AVATAR_URL;
  return (
    <div className="ContactItem">
      <img
        src={imageUrl}
        alt={fullName}
        height={AVATAR_SIZE}
        width={AVATAR_SIZE}
        className="ContactItem__avatar"
      />
      <div>{fullName}</div>
      <div className="ContactItem__buttons">
        {phone ? (
          <a
            href={`tel:${phone}`}
            className="ContactItem__button ContactItem__button--call"
          >
            Call
          </a>
        ) : null}
        {email ? (
          <a
            href={`mailto:${email}`}
            className="ContactItem__button ContactItem__button--email"
          >
            Email
          </a>
        ) : null}
      </div>
    </div>
  );
}
