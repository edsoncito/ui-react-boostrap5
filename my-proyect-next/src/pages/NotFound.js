import React from 'react';
import '../styles/NotFound.css';

class NotFound extends React.Component {
    render() {
        return (
            <>
                <div id="notfound">
                    <div className="notfound">
                        <div className="notfound-404">
                            <h1>4<span>0</span>4</h1>
                        </div>
                        <p>No encontramos lo que buscabas.</p>
                        <a href="/inicio">Inicio</a>
                    </div>
                </div>
            </>
        );
    }
}
export default NotFound;