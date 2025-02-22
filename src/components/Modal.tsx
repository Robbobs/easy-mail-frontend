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
    if(!modalContainer) return null;

    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="fixed inset-0 backdrop-blur bg-gray-500/55"></div>
            <div className="fixed inset-40 bg-white p-10 rounded">
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