import { useState } from "react";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>React Post Form</h1>
          </div>
          <div className="col-12">
            <form className="card border rounded p-4 bg-light">
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="" className="control-label">
                    Autore
                  </label>
                  <input
                    type="text"
                    name="author"
                    id="author"
                    className="form-control"
                    placeholder="Autore"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="" className="control-label">
                    Titolo
                  </label>
                  <input type="text" name="title" id="title" className="form-control" placeholder="Titolo" />
                </div>
                <div className="col-12">
                  <label htmlFor="" className="control-label">
                    Corpo dell'articolo
                  </label>
                  <textarea name="author" id="author" className="form-control" placeholder="Corpo dell'articolo"></textarea>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <label htmlFor="" className="form-check-label">
                      Pubblicato
                    </label>
                    <input type="checkbox" name="published" id="published" className="form-check-input" />
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Inserisci articolo
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
