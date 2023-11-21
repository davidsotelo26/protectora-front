import React, { useState } from "react";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";

const FormularioAdopcion = () => {
  const [step, setStep] = useState(1);
  const [tieneMascotas, setTieneMascotas] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [dni, setDni] = useState(""); 
  const [codigoPostal, setCodigoPostal] = useState("");

  const dniRegex = /^[0-9]{8}[A-Za-z]$/;

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

    return true;
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <h3>Formulario de adopción</h3>
          {/* <ProgressBar value={step} max={3} /> */}
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
          <input type="text" placeholder="Código postal" value={codigoPostal} onChangeCapture={(e) => setCodigoPostal(e.target.value)}/>
          <input type="text" placeholder="Ciudad" />
          <input type="checkbox" required /> Acepto los términos y condiciones
          de adopción
          <button onClick={handleContinue}>Continuar</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h3>Formulario de adopción</h3>
          {/* <ProgressBar value={step} max={3} /> */}
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
          {/* <ProgressBar value={step} max={3} /> */}
          {/* Aquí va el contenido del paso 3 */}
          <button onClick={handleContinue}>Finalizar</button>
        </div>
      )}
    </div>
  );
};

export default FormularioAdopcion;