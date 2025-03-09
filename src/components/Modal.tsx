import ReactDOM from "react-dom";
import { useEffect, ReactNode } from "react";
import { GoX } from "react-icons/go";

interface ModalProps {
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    const modalContainer = document.querySelector(".modal-container");
    if (!modalContainer) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="relative bg-[#1b2037] text-white rounded-lg shadow-lg max-w-3xl w-full p-6 
                            flex flex-col gap-4 overflow-hidden">
                
                {/* Botão de Fechar */}
                <button onClick={onClose} className="absolute top-4 right-4">
                    <GoX className="text-3xl"/>
                </button>

                {/* Conteúdo Dinâmico */}
                <div className="max-h-[70vh] overflow-auto p-2">
                    {children}
                </div>
            </div>
        </div>,
        modalContainer
    );
}