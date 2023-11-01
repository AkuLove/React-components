import React from 'react';

interface IContext {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const CurrentPageContext = React.createContext<null | IContext>(null);
