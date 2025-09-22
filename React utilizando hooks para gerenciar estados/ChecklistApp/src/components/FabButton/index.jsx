import './fab-button.style.css'

export function FabButton({ children, onclick }) {
    return (
        <button className='fab' onClick={onclick}>
            {children}
        </button>
    );
};
