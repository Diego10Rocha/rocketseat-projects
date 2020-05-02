import React from '../../../node_modules/react'
import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logoSVG from '../../assets/logo.svg'
import {FiLogIn} from '../../../node_modules/react-icons/fi'
import {Link} from '../../../node_modules/react-router-dom'

export default  function Logon(){
    return(
    <div className="logon-container">
        <section className="form">
            <img src={logoSVG} alt="Be The Hero"></img>
            <form>
                <h1>Faça seu logon</h1>
                <input type="text" placeholder="Sua ID"></input>
                <button type="submit" className="button">Entrar</button>
                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041"/>
                    Não tenho cadastro
                </Link>
            </form>

        </section>
        <img src={heroesImg} alt="Heroes"></img>
    </div>
    );
}