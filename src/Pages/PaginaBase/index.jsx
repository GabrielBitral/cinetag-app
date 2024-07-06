import FavoritosProvider from "@/Contextos/Favoritos";
import Container from "../../Components/Container";
import Cabecalho from "@/Components/Cabecalho";
import Rodape from "@/Components/Rodape";
import { Outlet } from "react-router-dom";

const PaginaBase = () => {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    );
};

export default PaginaBase;