import "./FormularioAdopcion.scss";
import React, { useState } from "react";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import BotonRetroceso from "../../assets/dentro/retroceso.png";

// ESTADOS QUE SE USARAN EN EL FORMULARIO

const FormularioAdopcion = () => {
  const [step, setStep] = useState(1);
  const [tieneMascotas, setTieneMascotas] = useState(null);
  const [viveDeAlquiler, setViveDeAlquiler] = useState(null);
  const [caseroPermite, setCaseroPermite] = useState(null);
  const [mudartePronto, setMudartePronto] = useState(null);
  const [tieneJardin, setTieneJardin] = useState(null);
  const [otrasPersonas, setOtrasPersonas] = useState(null);
  const [acuerdoAdopcion, setAcuerdoAdopcion] = useState(null);
  const [visitemosCasa, setVisitemosCasa] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [dni, setDni] = useState("");
  const dniRegex = /^[0-9]{8}[A-Za-z]$/;
  const [codigoPostal, setCodigoPostal] = useState("");
  const [aceptoTerminos, setAceptoTerminos] = useState(false);


  // FUNCIONES PARA EL FORMULARIO

  const handleContinue = () => {
    if (!isFormValid()) {
      return;
    }

    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
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
    <div className="divFormularioAdopcion">

      {/* PUNTO 1 */}

      {step === 1 && (
        <div>
          <h3 className="h3Formulario">
            {(step === 2 || step === 3) && (
              <img
                className="button-retroceder"
                src={BotonRetroceso}
                alt="Retroceder"
                onClick={handleBack}
              />
            )}
            Formulario de adopción
          </h3>

          {/* IMPORTADO COMPONENTE  */}
          <ProgressBar pasoActual={step} />

          <h2 className="h2Formulario">Tus datos</h2>
          <input
            className="inputFormulario"
            type="text"
            placeholder="Nombre y apellidos"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            className="inputFormulario"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inputFormulario"
            type="phone"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
          <input
            className="inputFormulario"
            type="text"
            placeholder="DNI"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
          <h2 className="h2Formulario">Dirección</h2>
          <input
            className="inputFormulario"
            type="text"
            placeholder="Calle, número, piso"
          />
          <input
            className="inputFormulario"
            type="text"
            placeholder="Código postal"
            value={codigoPostal}
            onChangeCapture={(e) => setCodigoPostal(e.target.value)}
          />
          <input className="inputFormulario" type="text" placeholder="Ciudad" />

          <div className="terminos-group">
            <input
              className="checkbox"
              type="checkbox"
              required
              onChange={(e) => setAceptoTerminos(e.target.checked)}
            />
            <p className="pFormulario">
              Acepto los términos y condiciones de adopción
            </p>
          </div>

          <button button className="buttonFormulario" onClick={handleContinue}>
            Continuar
          </button>
        </div>
      )}

      {/* PUNTO 2*/}

      {step === 2 && (
        <div>
          <h3 className="h3Formulario">
            {(step === 2 || step === 3) && (
              <img
                className="button-retroceder"
                src={BotonRetroceso}
                alt="Retroceder"
                onClick={handleBack}
              />
            )}
            Formulario de adopción
          </h3>

          {/* IMPORTADO COMPONENTE  */}
          <ProgressBar pasoActual={step} />

          <h2 className="h2Formulario">Sobre las mascotas</h2>
          <h4 className="h4Formulario">¿Tienes otros animales?</h4>
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
              <input
                className="inputFormulario"
                type="text"
                placeholder="Nombre de la mascota"
                required
              />
              <input
                className="inputFormulario"
                type="text"
                placeholder="Tipo de mascota"
                required
              />
            </div>
          )}

          <button className="buttonFormulario" onClick={handleContinue}>
            Continuar
          </button>
        </div>
      )}

      {/* PUNTO 3 Y FINAL */}

      {step === 3 && (
        <div>
          <h3 className="h3Formulario-two">
            {(step === 2 || step === 3) && (
              <img
                className="button-retroceder"
                src={BotonRetroceso}
                alt="Retroceder"
                onClick={handleBack}
              />
            )}
            Formulario de adopción
          </h3>

          {/* IMPORTADO COMPONENTE  */}
          <ProgressBar pasoActual={step} />

          <h2 className="h2Formulario">Familia y hogar</h2>
          <h4 className="h4Formulario">¿Dónde vives?</h4>
          <input
            className="inputFormulario"
            type="text"
            placeholder="Piso, casa, chalet..."
            required
          />

          <div className="radio-container">
            <h4 className="h4Formulario">¿Vives de alquiler?</h4>
            <label>
              <input
                type="radio"
                name="alquiler"
                value="si"
                required
                checked={viveDeAlquiler === "si"}
                onChange={(e) => setViveDeAlquiler(e.target.value)}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="alquiler"
                value="no"
                required
                checked={viveDeAlquiler === "no"}
                onChange={(e) => setViveDeAlquiler(e.target.value)}
              />
              No
            </label>
          </div>

          <div className="radio-container">
            <h4 className="h4Formulario">¿Tu casero permite animales?</h4>
            <label>
              <input
                type="radio"
                name="casero"
                value="si"
                required
                checked={caseroPermite === "si"}
                onChange={(e) => setCaseroPermite(e.target.value)}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="casero"
                value="no"
                required
                checked={caseroPermite === "no"}
                onChange={(e) => setCaseroPermite(e.target.value)}
              />
              No
            </label>
          </div>

          <div className="radio-container">
            <h4 className="h4Formulario">¿Crees que podrías mudarte pronto?</h4>
            <label>
              <input
                type="radio"
                name="mudar"
                value="si"
                required
                checked={mudartePronto === "si"}
                onChange={(e) => setMudartePronto(e.target.value)}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="mudar"
                value="no"
                required
                checked={mudartePronto === "no"}
                onChange={(e) => setMudartePronto(e.target.value)}
              />
              No
            </label>
          </div>

          <div className="radio-container">
            <h4 className="h4Formulario">¿Tiene jardín?</h4>
            <label>
              <input
                type="radio"
                name="jardin"
                value="si"
                required
                checked={tieneJardin === "si"}
                onChange={(e) => setTieneJardin(e.target.value)}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="jardin"
                value="no"
                required
                checked={tieneJardin === "no"}
                onChange={(e) => setTieneJardin(e.target.value)}
              />
              No
            </label>
          </div>

          <div className="radio-container">
            <h4 className="h4Formulario">¿Vives con otras personas?</h4>
            <label>
              <input
                type="radio"
                name="otraspersonas"
                value="si"
                required
                checked={otrasPersonas === "si"}
                onChange={(e) => setOtrasPersonas(e.target.value)}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="otraspersonas"
                value="no"
                required
                checked={otrasPersonas === "no"}
                onChange={(e) => setOtrasPersonas(e.target.value)}
              />
              No
            </label>
          </div>

          <div className="radio-container">
            <h4 className="h4Formulario">
              ¿Están todos de acuerdo con la adopción?
            </h4>
            <label>
              <input
                type="radio"
                name="acuerdoadopcion"
                value="si"
                required
                checked={acuerdoAdopcion === "si"}
                onChange={(e) => setAcuerdoAdopcion(e.target.value)}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="acuerdoadopcion"
                value="no"
                required
                checked={acuerdoAdopcion === "no"}
                onChange={(e) => setAcuerdoAdopcion(e.target.value)}
              />
              No
            </label>
          </div>

          <div className="radio-container">
            <h4 className="h4Formulario">
              ¿Estás de acuerdo con que visitemos tu casa?
            </h4>
            <label>
              <input
                className="inputFormulario"
                type="radio"
                name="visitemoscasa"
                value="si"
                required
                checked={visitemosCasa === "si"}
                onChange={(e) => setVisitemosCasa(e.target.value)}
              />
              Sí
            </label>
            <label>
              <input
                className="pruebaprueba"
                type="radio"
                name="visitemoscasa"
                value="no"
                required
                checked={visitemosCasa === "no"}
                onChange={(e) => setVisitemosCasa(e.target.value)}
              />
              No
            </label>
          </div>

          <button button className="buttonFormulario" onClick={handleContinue}>
            Enviar
          </button>
        </div>
      )}
    </div>
  );
};

export default FormularioAdopcion;