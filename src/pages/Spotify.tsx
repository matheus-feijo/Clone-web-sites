import { Fragment } from "react";
import { Button } from "../components/Button";
import  {IconSpotify,IconFace,IconInsta,IconTwitter}  from "../components/Icons";

import "../styles/spotify.scss";

export function Spotify(){


    function ButtonsEmpresa(){
        return(
            <Fragment>
            <Button className="footer-sobre">sobre</Button>
            <Button className="footer-empregos">Empregos</Button>
            <Button className="footer-record">For the record</Button>
            </Fragment>
        )
    }

    function ButtonsComunity(){
        return(
            <Fragment>
                <Button className="footer-artista">Para artistas</Button>
                <Button className="footer-desenvolvedor">Desenvolvedores</Button>
                <Button className="footer-publicidade">Publicidades</Button>
                <Button className="footer-investidor">Investidores</Button>
                <Button className="footer-fornecedor">Fornecedores</Button>
            </Fragment>
        )
    }

    function ButtonsLink(){
        return(
            <Fragment>
                <Button className="footer-suporte">Suporte</Button>
                <Button className="footer-player">Player da web</Button>
                <Button className="footer-app-movel">Aplicativel movel gratis</Button>
            </Fragment>
        )
    }

    function IconButtonsMidia(){
        return(
            <Fragment>
                <Button className="footer-icon-insta">
                    <IconInsta></IconInsta>
                </Button>
                <Button className="footer-icon-twitter">
                    <IconTwitter></IconTwitter>
                </Button>
                <Button className="footer-icon-face">
                    <IconFace></IconFace>
                </Button>
            </Fragment>
        )
    }


    return(
        <div className="container">
            <header>
                <div className="container-header">
                    <Button className="button-nav-spotify">
                        <IconSpotify /> 
                    </Button>
                </div>

                <div className="container-buttons-extras">
                    <Button className="premium">Premium</Button>
                    <Button className="suporte">Suporte</Button>
                    <Button className="baixar">Baixar</Button>
                </div>
                <div className="separator" />
                <div className="container-buttons-cadastro">
                    <Button className="inscrever">Inscrever-se</Button>
                    <Button className="entrar">Entrar</Button>

                </div>

            </header>
            <div className="plano-fundo">
                <div className="container-body">
                    <div className="container-conteudo">
                        <p className="title">Escutar muda tudo</p>

                        <p className="subtitle">Milhoes de musicas e podcasts para explorar. E nem precisa de cartao de credito</p>

                        <div className="container-button-principal"> 
                            <Button className="button-principal">
                                baixe o spotify free
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="footer-icon-spotify">
                <Button className="button-footer-spotify"><IconSpotify /></Button>

                </div>

                <div className="footer-list-empresa">
                    <p>Empresa</p>
                    <ButtonsEmpresa />
                </div>

                <div className="footer-list-link">
                    <p>Comunidades</p>
                    <ButtonsComunity />
                </div>

                <div className="footer-list-link">
                    <p>Link Uteis</p>
                    <ButtonsLink />
                </div>

                <div className="footer-icon-social-midia">
                    <IconButtonsMidia />
                </div>

                



            </footer>



        </div>


    )
}