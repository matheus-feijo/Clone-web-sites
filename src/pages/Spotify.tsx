import { Button } from "../components/Button";
import  {IconSpotify}  from "../components/Icons";

import "../styles/spotify.scss";

export function Spotify(){
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

            </footer>



        </div>


    )
}