import { createContext, useContext, useState } from "react";

import style from './Modal.module.css';

const ModalContext = createContext(null)

export function useModal() {
    const modalState = useContext(ModalContext)

    if (!modalState) {
        throw new Error("ModalContext is undefined!")
    }

    return modalState
}

export function Modal({ title, children }) {
    const [_, setModal] = useModal()

    return <div className={style.outerContainer}>
        <div className={style.innerContainer}>
            <div className={style.modalHeader}>
                <span>{title}</span>
                <button onClick={() => setModal({ enabled: false, title: "", children: undefined })}>X</button></div>
            <div className={style.modalBody}>{children}</div>
        </div>
    </div>
}

export function ModalProvider({ children }) {
    const modalState = useState({
        enabled: false,
        title: "",
        children: undefined
    })

    const [state, _] = modalState

    return <ModalContext.Provider value={modalState}>
        {state.enabled ? <Modal title={state.title} children={state.children} /> : null}

        {children}
    </ModalContext.Provider>
}


