import './home.css';

export default function Home() {
    return (
        <>
            <section>
                <div className="container mt-4 banner-carousel">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/src/assets/banner-1.webp" className="d-block" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>Blindados à pronta entrega</h1>
                                    <p className='fs-5' >O conforto e segurança que você precisa</p>
                                    <button className="btn btn-outline-light fw-semibold">Ver modelos</button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/src/assets/banner-2.webp" className="d-block" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>IPVA grátis !</h1>
                                    <p className='fs-5'>Ofertas para você sair de carro novo hoje.</p>
                                    <button className="btn btn-outline-light fw-semibold">Ver modelos</button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/src/assets/banner-3.webp" className="d-block" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>A First diz <b>SIM</b>!</h1>
                                    <p>Aprovação rápida, confiança e transparência. Isso é FIRST.</p>
                                    <button className="btn btn-outline-light fw-semibold">Confira</button>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mt-5">
                    <hr></hr>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="row justify-content-center">
                                <div className="col-md-4 mt-4 mb-4">
                                    <div className="d-flex justify-content-center align-items-center gap-3 text-center">
                                        <i className="bi bi-shield-check" style={{ fontSize: '4rem', color: '#c41e3a' }}></i>
                                        <div>
                                            <h5 className="fw-bold mb-1">Qualidade e Segurança</h5>
                                            <p className="fw-semibold text-muted mb-0">Confira os melhores carros com os melhores preços aqui!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-4 mb-4">
                                    <div className="d-flex justify-content-center align-items-center gap-3 text-center">
                                        <i className="bi bi-truck" style={{ fontSize: '4rem', color: '#c41e3a' }}></i>
                                        <div>
                                            <h5 className="fw-bold mb-1">Carros à pronta entrega</h5>
                                            <p className="fw-semibold text-muted mb-0">Diversos modelos à pronta entrega para você</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-4 mb-4">
                                    <div className="d-flex justify-content-center align-items-center gap-3 text-center">
                                        <i className="bi bi-headset" style={{ fontSize: '4rem', color: '#c41e3a' }}></i>
                                        <div>
                                            <h5 className="fw-bold mb-1">Atendimento com foco em qualidade</h5>
                                            <p className="fw-semibold text-muted mb-0">Atendimento focado em qualidade e satisfação do cliente</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                </div>
            </section>

            <section>
                <div className="container mt-5 mb-5">
                    <h2 className="mb-4">Confira nossa linha de carros</h2>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="card model-card">
                                <div className="model-card-image utilitarios"><img src="/src/assets/utilitarios.webp" alt="Utilitários" /></div>
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">Utilitários</h5>
                                    <p className="card-text text-muted">Explore nossa linha de utilitários</p>
                                    <button className="btn btn-outline-danger btn-sm">Ver modelos</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card model-card">
                                <div className="model-card-image suv"><img src="/src/assets/suv.webp" alt="SUV" /></div>
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">SUV</h5>
                                    <p className="card-text text-muted">Explore nossa linha de SUV</p>
                                    <button className="btn btn-outline-danger btn-sm">Ver modelos</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card model-card">
                                <div className="model-card-image hatch"><img src="/src/assets/hatch.webp" alt="Hatch" /></div>
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">Hatch</h5>
                                    <p className="card-text text-muted">Explore nossa linha de Hatch</p>
                                    <button className="btn btn-outline-danger btn-sm">Ver modelos</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card model-card">
                                <div className="model-card-image sedan"><img src="/src/assets/sedan.webp" alt="Sedan" /></div>
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">Sedan</h5>
                                    <p className="card-text text-muted">Explore nossa linha de Sedan</p>
                                    <button className="btn btn-outline-danger btn-sm">Ver modelos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-cars-background mt-5">
                <div className="container">
                    <div className="row align-items-center min-vh-100">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="analysis-header mb-4">
                                <h4 className="analysis-title fw-bold fs-1 mb-2">Faça sua análise com a FIRST</h4>
                                <p className="analysis-subtitle fw-bold fs-2 mb-0">Seu crédito em primeiro lugar.</p>
                            </div>
                            <div className="card analysis-card">
                                <div className="card-body">
                                    <p className="card-text text-muted fw-bold fs-4">Seu carro novo com aprovação facilitada.</p>
                                    <div className="mb-3 mt-4">
                                        <label htmlFor="cpfInput" className="form-label fw-semibold">Digite aqui o seu CPF</label>
                                        <input type="text" className="form-control" id="cpfInput" placeholder="000.000.000-00" />
                                    </div>
                                    <button className="btn btn-danger mt-3 w-100">Começar análise</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
