import ReactDOM from 'react-dom';
import { useEffect, ReactNode } from 'react';

interface ModalProps {
    onClose: () => void;
    children: ReactNode;
    actionBar?: ReactNode;
}

export default function Modal({ onClose, children, actionBar }: ModalProps){
    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        
        return () => {
            document.body.classList.remove("overflow-hidden");
        }; 

    }, []);

    const modalContainer = document.querySelector('.modal-container');
    if(!modalContainer) return;

    return ReactDOM.createPortal(
        <div className="text-gray-300">
            <div onClick={onClose} className="fixed inset-0 backdrop-blur bg-[#1b2037]/35"></div>
            <div className="fixed inset-40 bg-gray-800 p-10 rounded">
                <div className="flex flex-col justify-between h-full">
                    { children }
                    <div className="flex justify-end"> 
                        { actionBar }
                    </div>
                </div>
            </div>
        </div>,
        modalContainer
    );
}