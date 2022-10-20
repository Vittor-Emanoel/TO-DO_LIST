import CustomButton from "../components/CustomButton";

import logo from "../components/logo-2.png";

const Login = () => {
    return (
        <div className="login-container">
            <img src={logo} alt="" />

            <div className="button-container">
                <CustomButton>Entrar</CustomButton>
            </div>
        </div>
    );
};

export default Login;
