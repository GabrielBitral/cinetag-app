import styles from './Favoritos.module.css';
import Banner from "@/Components/Banner";
import Titulo from "@/Components/Titulo";
import Card from "@/Components/Card";
import { useFavoritoContext } from '@/Contextos/Favoritos';

const Favoritos = () => {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            {!favorito.length ? <h1 className={styles.tituloSemFavorito}>Ainda não tem vídeos marcados como favoritos.</h1> : <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />;
                })
                }

            </section>
            }
        </>
    );
};

export default Favoritos;