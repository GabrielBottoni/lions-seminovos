import './footer.css';

export default function Footer() {
    return (

        <footer className="footer-section">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="footer-links">
                            <a href="#" className="footer-link">Trabalhe conosco</a>
                            <a href="#" className="footer-link">Parceiro de negócio</a>
                            <a href="#" className="footer-link">Termos de uso</a>
                        </div>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p className="footer-credit mb-0">
                            Desenvolvido por <strong>Gabriel Alves Bottoni</strong> © {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}