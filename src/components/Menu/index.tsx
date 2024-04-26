import { Container, MenuContainer, MenuContent, PaginaContainer, ItemContainer, ItemContent, ContainerImg} from './styles';
import Home from '../../assets/menu_principal/home.png';
import Shorts from '../../assets/menu_principal/shorts.png';
import Inscricoes from '../../assets/menu_principal/inscricoes.png';
import SeuCanal from '../../assets/menu_you/seucanal.png';
import Historico from '../../assets/menu_you/historico.png';
import Playlist from '../../assets/menu_you/playlist.png';
import Seusvideos from '../../assets/menu_you/seusvideos.png';
import Seusfilmes from '../../assets/menu_you/seusfilmes.png';
import Seuscursos from '../../assets/menu_you/seuscursos.png';
import Assistirmaistarde from '../../assets/menu_you/assistir_mais_tarde.png';
import Videoscomgostei from '../../assets/menu_you/like.png';
import Emalta from '../../assets/menu_explorer/em_alta.png';
import Shopping from '../../assets/menu_explorer/shopping.png';
import Musica from '../../assets/menu_explorer/musica.png';
import Filmes from '../../assets/menu_explorer/filmes.png';
import Aovivo from '../../assets/menu_explorer/aovivo.png';
import Jogos from '../../assets/menu_explorer/jogos.png';
import Noticias from '../../assets/menu_explorer/noticias.png';
import Esportes from '../../assets/menu_explorer/esportes.png';
import Cursos from '../../assets/menu_explorer/cursos.png';
import Podcasts from '../../assets/menu_explorer/podcasts.png';
import Youtubepremium from '../../assets/menu_explorer/em_alta.png';
import Youtubestudio from '../../assets/menu_explorer/em_alta.png';
import Youtubemusic from '../../assets/menu_explorer/em_alta.png';
import Youtubekids from '../../assets/menu_explorer/em_alta.png';
import Configuracoes from '../../assets/menu_config/config.png';
import Historicodedenuncias from '../../assets/menu_config/historico.png';
import Ajuda from '../../assets/menu_config/ajuda.png';
import Enviarfeedback from '../../assets/menu_config/feedback.png';

function Menu() {
  
  const iconMenu = [Home, Shorts, Inscricoes, SeuCanal, Historico,
    Playlist, Seusvideos,   Seusfilmes, Seuscursos, Assistirmaistarde, 
    Videoscomgostei, Emalta,   Shopping, Musica, Filmes, Aovivo, Jogos, 
    Noticias, Esportes, Cursos,   Podcasts, Youtubepremium, Youtubestudio, 
    Youtubemusic, Youtubekids,   Configuracoes, Historicodedenuncias, Ajuda,
    Enviarfeedback];

 const textMenu = ['Início', 'Shorts', 'Inscricoes', 'Seu Canal',  'Historico',
   'Playlist', 'Seusvideos',  'Seus filmes', 'Seuscursos', 'Assistirmaistarde', 
   'Videos com gostei', 'Em alta',   'Shopping', 'Musica', 'Filmes', 'Aovivo', 'Jogos', 
   'Noticias', 'Esportes', 'Cursos',   'Podcasts', 'Youtube Premium', 'Youtub Estudio', 
   'Youtube Music', 'Youtube kids',   'Configuracoes', 'Historico de denuncias', 'Ajuda',
   'Enviar feedback'];  

  const result = iconMenu.map ((item, index) => {
    
    return{
      element1: item,
      element2: textMenu[index],
    };
  });

  return (
    <>
      <Container>
          <MenuContainer>
            <MenuContent>
            {result.map((item, index) => (
              <ItemContainer key={index}>
                <ItemContent>
                  <ContainerImg>
                  <img src={item.element1} alt={item.element2} style={{width:'22px', height:'22px'}}/>
                  </ContainerImg>
                <div  style={{width:'100%', height:'40px', display:'flex', justifyContent:'left', alignItems:'center'}}>{item.element2}</div>
                </ItemContent>
              </ItemContainer>
            ))}
            </MenuContent>
          </MenuContainer>
          <PaginaContainer>
                  Aqui será a Paginação em breve....
          </PaginaContainer>
      </Container>
</>
)}

export default Menu;
