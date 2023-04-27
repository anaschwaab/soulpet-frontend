import { Spinner } from "react-bootstrap";

export function Loader(){
    return(
        <div className="w-100 d-flex justify-content-center align-items-center">
            <Spinner variant="primary" />Carregando...
        </div>
    );
}