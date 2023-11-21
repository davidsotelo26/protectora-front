import './FormularioAdopcion.scss';
import React, { useState } from "react";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";

const FormularioAdopcion = () => {
  const [step, setStep] = useState(1);
  const [tieneMascotas, setTieneMascotas] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [dni, setDni] = useState("");
  const dniRegex = /^[0-9]{8}[A-Za-z]$/;
  const [codigoPostal, setCodigoPostal] = useState("");
  const [aceptoTerminos, setAceptoTerminos] = useState(false);

  const handleContinue = () => {
    if (!isFormValid()) {
      return;
    }

    if (step < 3) {
      setStep(step + 1);
    }
  };

  const isFormValid = () => {
    const phoneRegex = /^[0-9]{9}$/;
    const codigoPostalRegex = /^[0-9]{5}$/;

    if (nombre === "") {
      alert("El nombre es requerido");
      return false;
    }

    if (!email.includes("@")) {
      alert("El email no es válido");
      return false;
    }

    if (!phoneRegex.test(telefono)) {
      alert("El teléfono no es válido");
      return false;
    }
    if (!dniRegex.test(dni)) {
      alert("El DNI no es válido");
      return false;
    }
    if (!codigoPostalRegex.test(codigoPostal)) {
      alert("El código postal no es válido");
      return false;
    }
    if (!aceptoTerminos) {
      alert("Debes aceptar los términos y condiciones antes de continuar.");
      return;
    }

    return true;
  };

  return (
    <div className='containerFormularioAdopcion'>
       {step === 1 && (
        <div>
    
          <h3>Formulario de adopción</h3>
          <ProgressBar pasoActual={step} />
          <h2>Tus datos</h2>
          <input
            type="text"
            placeholder="Nombre y apellidos"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="phone"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
          <input
            type="text"
            placeholder="DNI"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
          <h2>Dirección</h2>
          <input type="text" placeholder="Calle, número, piso" />
          <input
            type="text"
            placeholder="Código postal"
            value={codigoPostal}
            onChangeCapture={(e) => setCodigoPostal(e.target.value)}
          />
          <input type="text" placeholder="Ciudad" />
          
          <div className='terminos-group'>
          <input className='checkbox'
            type="checkbox"
            required
            onChange={(e) => setAceptoTerminos(e.target.checked)} 
          />
          <p>Acepto los términos y condiciones de adopción</p>
          </div>

          <button onClick={handleContinue}>Continuar</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h3>Formulario de adopción</h3>
          <ProgressBar pasoActual={step} />
          <h2>Sobre las mascotas</h2>
          <h4>¿Tienes otros animales?</h4>
          <label>
            <input
              type="radio"
              name="mascotas"
              value="si"
              required
              onChange={() => setTieneMascotas(true)}
            />
            Sí
          </label>
          <label>
            <input
              type="radio"
              name="mascotas"
              value="no"
              required
              onChange={() => setTieneMascotas(false)}
            />
            No
          </label>
          {tieneMascotas && (
            <div>
              <input type="text" placeholder="Nombre de la mascota" required />
              <input type="text" placeholder="Tipo de mascota" required />
            </div>
          )}

          <button onClick={handleContinue}>Continuar</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h3>Formulario de adopción</h3>
          <ProgressBar pasoActual={step} />
          <h2>Familia y hogar</h2>
          <h4>¿Dónde vives?</h4>
          <input type="text" placeholder="Piso, casa, chalet..." required />

          <div className="radio-container">
            <h4>¿Vives de alquiler?</h4>
            <label>
              <input
                type="radio"
                name="mascotas"
                value="si"
                required
                onChange={() => setTieneMascotas(true)}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="mascotas"
                value="no"
                required
                onChange={() => setTieneMascotas(false)}
              />
              No
            </label>
          </div>

          <div className="radio-container">
            <h4>¿Tu casero permite animales?</h4>
            <label>
              <input
                type="radio"
                name="mascotas"
                value="si"
                required
                onChange={() => setTieneMascotas(true)}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="mascotas"
                value="no"
                required
                onChange={() => setTieneMascotas(false)}
              />
              No
            </label>
          </div>

          <div className="radio-container">
            <h4>¿Crees que podrías mudarte pronto?</h4>
            <label>
              <input
                type="radio"
                name="mascotas"
                value="si"
                required
                onChange={() => setTieneMascotas(true)}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="mascotas"
                value="no"
                required
                onChange={() => setTieneMascotas(false)}
              />
              No
            </label>
          </div>

          <div className="radio-container">
            <h4>¿Tiene jardín?</h4>
            <label>
              <input
                type="radio"
                name="mascotas"
                value="si"
                required
                onChange={() => setTieneMascotas(true)}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="mascotas"
                value="no"
                required
                onChange={() => setTieneMascotas(false)}
              />
              No
            </label>
          </div>

          <div className="radio-container">
            <h4>¿Vives con otras personas?</h4>
            <label>
              <input
                type="radio"
                name="mascotas"
                value="si"
                required
                onChange={() => setTieneMascotas(true)}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="mascotas"
                value="no"
                required
                onChange={() => setTieneMascotas(false)}
              />
              No
            </label>
          </div>

          <div className="radio-container">
            <h4>¿Están todos de acuerdo con la adopción?</h4>
            <label>
              <input
                type="radio"
                name="mascotas"
                value="si"
                required
                onChange={() => setTieneMascotas(true)}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="mascotas"
                value="no"
                required
                onChange={() => setTieneMascotas(false)}
              />
              No
            </label>
          </div>

          <div className="radio-container">
            <h4>¿Estás de acuerdo con que visitemos tu casa?</h4>
            <label>
              <input
                type="radio"
                name="mascotas"
                value="si"
                required
                onChange={() => setTieneMascotas(true)}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="mascotas"
                value="no"
                required
                onChange={() => setTieneMascotas(false)}
              />
              No
            </label>
          </div>

          <button onClick={handleContinue}>Enviar</button>
        </div>
      )}
    </div>
  );
};

export default FormularioAdopcion;