import React, { useState } from 'react'

interface ModalProps{
    modalOpen: boolean;
    setModalOpen: (open : boolean)=> boolean | void;
    children: React.ReactNode
}

const Modal:React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open":""}`}>
        <div className="modal-box relative">
            <label htmlFor="my-modal-3" className='btn btn-sm btn-circle absolute right-2 top-2' onClick={() => setModalOpen(false)}>
                x
            </label>
            {children}
        </div>
    </div>
  )
}

export default Modal
