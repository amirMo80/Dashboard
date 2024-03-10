import { createContext } from "react";

export const DashboardContext = createContext({
    openModal: false,
    value: 0,
    drawerOpen: false,
    setDrawerOpen: () => { },
    handleOpenModal: () => { },
    handleCloseModal: () => { },
    handleChangeValue: () => { }
});