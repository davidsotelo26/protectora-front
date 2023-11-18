import "LoginRegister.scss"

function LoginRegister() {

} return (
<div className="loginPage">

<h1 className="loginTitle">Login</h1>

<form className="loginForm" action="">
    <div className="inputEmail">
            <label id='emailLabel'>Email:</label>
            <input id='emailInput' type='email' />
    </div>
    <div className="inputPassword">
            <label id='passwordLabel'>Contraseña:</label>
            <input id='passwordInput' type='password'/>
    </div>
    <button type='submit'>Login</button>   
</form>

</div>
)

export default LoginRegister