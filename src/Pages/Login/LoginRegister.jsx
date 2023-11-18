import "./LoginRegister.scss"

const LoginRegister = () => {
return (

<div className="loginPage">

    <form className="loginForm" action="">

    <img src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/23B58F07-E761-4764-A5DD-0D73C60228FB.png"  className="logoLogin" alt="logotipo" />
    {/* linkar con la foto de assets para no perderla en un futuro */}

    <h1 className="loginTitle">Hola! Para continuar, inicia sesión o crea una cuenta.</h1>
    {/* linkar el logo al inicio **pendiente** */}

        <div className="inputEmail">
                <input id='emailInput' type='email' placeholder="Email"/>
                {/* introducir pipe de mail **pendiente** */}
        </div>
        <div className="inputPassword">
                <input id='passwordInput' type='password' placeholder="Contraseña"/>
                {/* introducir pipe de password **pendiente** */}
        </div>

    <a href="/loginregister" className="missedPass">Has olvidado tu contraseña?</a>

        <button className="buttonLogin" type='submit'>Iniciar sesión</button>  
    {/* linkear al inicio de sesion **pendiente** */}

        <button className="buttonSignIn" type='submit'>Crear cuenta</button> 
    {/* linkear al registro de usuario **pendiente** */}

    </form>

</div>
)}

export default LoginRegister;