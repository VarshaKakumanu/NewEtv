import React, { createContext, useState, useContext } from 'react';

const DraftContext = createContext();

export const DraftProvider = ({ children }) => {
  const [drafts, setDrafts] = useState({});

  const saveDraft = (formName, data) => {
    setDrafts((prevDrafts) => {
      const updatedDrafts = { ...prevDrafts };
      if (!updatedDrafts[formName]) {
        updatedDrafts[formName] = [];
      }
      updatedDrafts[formName].push(data);
      return updatedDrafts;
    });
  };

  console.log(drafts, "drafts");

  return (
    <DraftContext.Provider value={{ drafts, saveDraft }}>
      {children}
    </DraftContext.Provider>
  );
};

export const useDraft = () => useContext(DraftContext);
