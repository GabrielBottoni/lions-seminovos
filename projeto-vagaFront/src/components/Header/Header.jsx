import './Header.css';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="/src/assets/logo.svg" alt="Logo" width="80" height="50" className="d-inline-block align-top me-2" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Financiamento</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Fipe</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Lojas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pós Vendas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Catálogo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Agende uma visita</a>
                        </li>
                    </ul>

                    <div className="d-flex gap-3">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem' }}>
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem' }}>
                            <i className="bi bi-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}