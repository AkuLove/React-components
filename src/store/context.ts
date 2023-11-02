import React from 'react';

interface IContext {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
interface IPrevContext {
  prevPage: number;
  setPrevPage: React.Dispatch<React.SetStateAction<number>>;
}

export const CurrentPageContext = React.createContext<null | IContext>(null);
export const PrevPageContext = React.createContext<null | IPrevContext>(null);
