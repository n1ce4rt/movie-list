import {Route, Routes} from 'react-router-dom';
import { FilmsList } from '../films_list/films_list';
import { Login } from '../login/login';
import { NotFoundPage } from '../error/not_found_page';
import { Layout } from '../layout/layout';
import { HomePage } from '../home_page/home_page';
import { News } from '../news/news';
import { Film } from '../film/film';

function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="news" element={<News/>}/>
          <Route path={'login'} element={<Login/>} />

          <Route path={'films/page/:page'} element={<FilmsList/>}/>

          <Route path={'film/:id'} element={<Film/>}/>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
