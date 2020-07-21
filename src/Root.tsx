import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ServerProvider } from "./api";
import { ContactsScreen } from "./ContactsScreen";
import { NewContactScreen } from "./NewContactScreen";

export function Root() {
  return (
    //  Also I did not add error-boundary, i18n, theme provider
    <ServerProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactsScreen />} />
          <Route path="/new-contact" element={<NewContactScreen />} />
        </Routes>
      </BrowserRouter>
    </ServerProvider>
  );
}
