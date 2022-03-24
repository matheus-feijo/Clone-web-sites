import "../styles/home.scss";
import {Link} from "react-router-dom"
import {Button} from "../components/Button";

export function Home(){
    return(
        <div className="container-home">
            <div>
                <Button className="link-spotify">
                    <Link to={"/spotify"}
                        style={{
                            color: "#fff",
                            font: "bold 18px Roboto",
                            textDecoration:"none",
                        }}
                    
                    >Spotify</Link>
                </Button>
                
                <Button className="link-disney">
                <Link to={"/disney"}
                    style={{
                        textDecoration:"none",
                        font: "bold 18px Roboto",
                        color: "#fff",
                    }}
                >Disney</Link>
                </Button>
            </div>
        </div>
    )
}