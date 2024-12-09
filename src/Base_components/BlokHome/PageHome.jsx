

import { Route, Routes } from 'react-router-dom';


// Список всех страниц

import Planer from "../../Pages/Planer";
import Profil from "../../Pages/Profil";
import Main from '../../Pages/Main';






function PageHome() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/main' element={<Main />} />
            <Route path='/profil' element={<Profil />} />
            <Route path='/planer' element={<Planer />} />
        </Routes>

    );
}

export default PageHome;