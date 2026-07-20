
import './modal.css';


export default function Modal({ id, header, body, footer, onClose }) {

    return <div id={id || 'Modal'} className="modal">
        <div className="modal-content">
            <div className="header">
                <h2 className='header-middle'>{
                    header ? header : 'Header'
                }</h2>
                <span onClick={onClose} className="close-modal-icon">&times;</span>
            </div>
            <div className="body">
                {
                    body ? body : 'This is Modal Body'
                }
            </div>
            <div className="footer">
                {
                    footer ? footer : 'This is a footer'
                }
            </div>
        </div>
    </div>;
}