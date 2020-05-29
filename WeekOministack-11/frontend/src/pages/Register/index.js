import React from '../../../node_modules/react'
import './styles.css'
import LogoImg from '../../assets/logo.svg'
import {Link} from '../../../node_modules/react-router-dom'
import {FiArrowLeft} from '../../../node_modules/react-icons/fi'

export default function Register(){
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos de sua ONG</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </section>
                <form>
                    <input type="text" placeholder="Nome da ONG"/>
                    <input type="email" placeholder="E-mail"/>
                    <input type="text" placeholder="Whatsapp"/>

                    <div className="input-group">
                    <input type="text" placeholder="Cidade"/>
                    <input type="text" placeholder="UF" style={{width:80}}/>
                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form>

            </div>
        </div>
    );
}