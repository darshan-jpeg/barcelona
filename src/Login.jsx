import './Login.css';

function Login() {
    return (
        <section id="login" className="Login">
        <h1 className="login-title">Login</h1>
        <form className="login-form">
            <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="login-button">Login</button>
        </form>
        </section>
    );
}

export default Login;