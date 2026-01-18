import "./catalogo.css";
import { FiSearch, FiFilter } from "react-icons/fi";

export default function Catalogo() {
  return (
    <div className="catalogo-container">
      <div className="catalogo-sidebar pt-5">
        <h3>
          <FiFilter className="me-2" /> Filtros
        </h3>

        <div className="filter-group">
          <label htmlFor="marca">Marca</label>
          <select id="marca" className="form-select">
            <option value="">Selecionar marca</option>
            <option value="toyota">Toyota</option>
            <option value="honda">Honda</option>
            <option value="ford">Ford</option>
            <option value="volkswagen">Volkswagen</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="modelo">Modelo</label>
          <select id="modelo" className="form-select">
            <option value="">Selecionar modelo</option>
            <option value="corolla">Corolla</option>
            <option value="civic">Civic</option>
            <option value="fiesta">Fiesta</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Cor</label>
          <div className="cores-container">
            <button
              className="cor-bola cor-preto"
              title="Preto"
              data-cor="preto"
            ></button>
            <button
              className="cor-bola cor-branco"
              title="Branco"
              data-cor="branco"
            ></button>
            <button
              className="cor-bola cor-prata"
              title="Prata"
              data-cor="prata"
            ></button>
            <button
              className="cor-bola cor-azul"
              title="Azul"
              data-cor="azul"
            ></button>
            <button
              className="cor-bola cor-vermelho"
              title="Vermelho"
              data-cor="vermelho"
            ></button>
          </div>
        </div>

        <div className="filter-group">
          <label htmlFor="combustivel">Combustível</label>
          <select id="combustivel" className="form-select">
            <option value="">Selecionar combustível</option>
            <option value="gasolina">Gasolina</option>
            <option value="diesel">Diesel</option>
            <option value="etanol">Etanol</option>
            <option value="hibrido">Híbrido</option>
            <option value="eletrico">Elétrico</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="blindagem">Blindagem</label>
          <select id="blindagem" className="form-select">
            <option value="">Selecionar blindagem</option>
            <option value="nao">Não</option>
            <option value="nivel1">Nível 1</option>
            <option value="nivel2">Nível 2</option>
            <option value="nivel3">Nível 3</option>
            <option value="nivel4">Nível 4</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="carroceria">Carroceria</label>
          <select id="carroceria" className="form-select">
            <option value="">Selecionar carroceria</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="hatch">Hatch</option>
            <option value="perua">Perua</option>
            <option value="picape">Picape</option>
            <option value="minivan">Minivan</option>
          </select>
        </div>

        <button className="btn btn-primary w-100 mt-3">Filtrar</button>
        <button className="btn btn-outline-secondary w-100 mt-2">Limpar</button>
      </div>

      <div className="catalogo-content pt-5">
        <div className="catalogo-header">
          <h1>Carros em Estoque</h1>
          <div className="search-container">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Buscar por nome..."
              className="search-input"
            />
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header text-center justify-content-center">
                <h1
                  className="modal-title mt-3 fs-5 fw-bold text-center justify-content-center"
                  id="exampleModalLabel"
                >
                  Solicite sua cotação
                </h1>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label for="nome" className="col-form-label fw-semibold">
                      Nome:
                    </label>
                    <input type="text" className="form-control" id="nome" />
                  </div>
                  <div className="mb-3">
                    <label for="email" className="col-form-label fw-semibold">
                      Email:
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="mb-3">
                    <label
                      for="telefone"
                      className="col-form-label fw-semibold"
                    >
                      Telefone:
                    </label>
                    <input
                      type="tel"
                      placeholder="(xx) xxxxx-xxxx"
                      className="form-control"
                      id="telefone"
                    />
                  </div>

                  <div className="filter-group">
                    <label className="fw-semibold" htmlFor="loja">
                      Loja
                    </label>
                    <select id="loja" className="form-select">
                      <option value="">Selecionar loja mais próxima</option>
                      <option value="sedan">Loja 1</option>
                      <option value="suv">Loja 2</option>
                      <option value="hatch">Loja 3</option>
                      <option value="perua">Loja 4</option>
                      <option value="picape">Loja 5</option>
                      <option value="minivan">Loja 6</option>
                    </select>
                  </div>

                  <div className="mb-3 modal-button">
                    <button
                      type="button"
                      className="btn btn-primary w-100 mb-2"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Solicitar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="produtos-grid">
          <div className="produto-card">
            <img
              src="src/assets/toyota.jpg"
              alt="Veículo 1"
              className="produto-img"
            />
            <div className="produto-info">
              <h5>Toyota Corolla</h5>
              <p className="produto-detalhes">45.000 km | 2020 | Preto</p>
              <button
                className="btn btn-primary w-100 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Simular
              </button>
              <button className="btn btn-outline-dark w-100">
                Falar com Atendente
              </button>
            </div>
          </div>

          <div className="produto-card">
            <img
              src="src/assets/honda.jpg"
              alt="Veículo 2"
              className="produto-img"
            />
            <div className="produto-info">
              <h5>Honda Civic</h5>
              <p className="produto-detalhes">32.000 km | 2021 | Prata</p>
              <button
                className="btn btn-primary w-100 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Simular
              </button>
              <button className="btn btn-outline-dark w-100">
                Falar com Atendente
              </button>
            </div>
          </div>

          <div className="produto-card">
            <img
              src="src/assets/ford.jpg"
              alt="Veículo 3"
              className="produto-img"
            />
            <div className="produto-info">
              <h5>Ford Fiesta</h5>
              <p className="produto-detalhes">58.000 km | 2019 | Branco</p>
              <button
                className="btn btn-primary w-100 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Simular
              </button>
              <button className="btn btn-outline-dark w-100">
                Falar com Atendente
              </button>
            </div>
          </div>

          <div className="produto-card">
            <img
              src="src/assets/polo.jpg"
              alt="Veículo 4"
              className="produto-img"
            />
            <div className="produto-info">
              <h5>Volkswagen Polo</h5>
              <p className="produto-detalhes">38.500 km | 2020 | Vermelho</p>
              <button
                className="btn btn-primary w-100 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Simular
              </button>
              <button className="btn btn-outline-dark w-100">
                Falar com Atendente
              </button>
            </div>
          </div>

          <div className="produto-card">
            <img
              src="src/assets/hb20.jpg"
              alt="Veículo 5"
              className="produto-img"
            />
            <div className="produto-info">
              <h5>Hyundai HB20</h5>
              <p className="produto-detalhes">52.000 km | 2021 | Cinza</p>
              <button
                className="btn btn-primary w-100 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Simular
              </button>
              <button className="btn btn-outline-dark w-100">
                Falar com Atendente
              </button>
            </div>
          </div>

          <div className="produto-card">
            <img
              src="src/assets/onix.jpg"
              alt="Veículo 6"
              className="produto-img"
            />
            <div className="produto-info">
              <h5>Chevrolet Onix</h5>
              <p className="produto-detalhes">41.000 km | 2020 | Prata</p>
              <button
                className="btn btn-primary w-100 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Simular
              </button>
              <button className="btn btn-outline-dark w-100">
                Falar com Atendente
              </button>
            </div>
          </div>

          <div className="produto-card">
            <img
              src="src/assets/toyota.jpg"
              alt="Veículo 1"
              className="produto-img"
            />
            <div className="produto-info">
              <h5>Toyota Corolla</h5>
              <p className="produto-detalhes">45.000 km | 2020 | Preto</p>
              <button
                className="btn btn-primary w-100 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Simular
              </button>
              <button className="btn btn-outline-dark w-100">
                Falar com Atendente
              </button>
            </div>
          </div>

          <div className="produto-card">
            <img
              src="src/assets/honda.jpg"
              alt="Veículo 2"
              className="produto-img"
            />
            <div className="produto-info">
              <h5>Honda Civic</h5>
              <p className="produto-detalhes">32.000 km | 2021 | Prata</p>
              <button
                className="btn btn-primary w-100 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Simular
              </button>
              <button className="btn btn-outline-dark w-100">
                Falar com Atendente
              </button>
            </div>
          </div>

          <div className="produto-card">
            <img
              src="src/assets/ford.jpg"
              alt="Veículo 3"
              className="produto-img"
            />
            <div className="produto-info">
              <h5>Ford Fiesta</h5>
              <p className="produto-detalhes">58.000 km | 2019 | Branco</p>
              <button
                className="btn btn-primary w-100 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Simular
              </button>
              <button className="btn btn-outline-dark w-100">
                Falar com Atendente
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
