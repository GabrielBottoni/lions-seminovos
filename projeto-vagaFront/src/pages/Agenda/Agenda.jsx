import "./agenda.css";

export default function Agenda() {
  return (
    <div className="agendamento-page">
      <div className="container-fluid p-0">
        <div className="row g-0 min-vh-100">
          <div className="col-lg-6 position-relative d-flex align-items-center p-5 bg-right-section">
            <div className="content-overlay">
              <h2 className="text-white display-4 fw-bold">
                A LIONS ESTÁ COM VOCÊ EM CADA ENCONTRO
              </h2>
              <p className="text-white opacity-75 fs-5 mt-4">
                Na LIONS, cada visita é pensada para você. Um momento exclusivo,
                com atendimento humano e atenção aos detalhes...
              </p>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center bg-black p-5">
            <div
              className="form-container w-100 bg-white p-4 p-md-5 rounded-4 shadow-lg"
              style={{ maxWidth: "550px" }}
            >
              <h1 className="text-dark fw-bold mb-4">Agende sua visita</h1>

              <p className="text-muted fw-semibold mb-3">| Dados pessoais</p>

              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="Nome completo"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="tel"
                      className="form-control py-2"
                      placeholder="Telefone"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control py-2"
                    placeholder="E-mail"
                    required
                  />
                </div>

                <p className="text-muted fw-semibold mb-2 mt-4">
                  | Loja e Horário
                </p>
                <div className="mb-3">
                  <select className="form-select py-2">
                    <option value="">Selecionar loja mais próxima</option>
                    <option value="1">Loja Centro</option>
                    <option value="2">Loja Norte</option>
                  </select>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input type="date" className="form-control py-2" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input type="time" className="form-control py-2" required />
                  </div>
                </div>

                <button className="btn btn-primary w-100 fw-bold mt-4 py-3 shadow-sm rounded-3">
                  Agendar visita &rarr;
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
