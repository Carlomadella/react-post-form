import { useState } from "react";
import axios from "axios";

function App() {

  const [formData, setFormData] = useState({
    author:"",
    title:"",
    body:"",
    published: false
  })

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    
    const newData = { ...formData };

    newData[name] = type === 'checkbox' ? checked : value;

    setFormData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', formData).then((resp) => {
      console.log(resp.data)
    })
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>React Post Form</h1>
          </div>
          <div className="col-12">
            <form className="card border rounded p-4 bg-light" onSubmit={handleSubmit}>
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
                    value={formData.author}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="" className="control-label">
                    Titolo
                  </label>
                  <input type="text" name="title" id="title" className="form-control" placeholder="Titolo" value={formData.title} onChange={handleChange}/>
                </div>
                <div className="col-12">
                  <label htmlFor="" className="control-label">
                    Corpo dell'articolo
                  </label>
                  <textarea name="body" id="body" className="form-control" placeholder="Corpo dell'articolo" value={formData.body} onChange={handleChange}></textarea>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <label htmlFor="" className="form-check-label">
                      Pubblicato
                    </label>
                    <input type="checkbox" name="published" id="published" className="form-check-input" checked={formData.published} onChange={handleChange}/>
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
