import { Navigate,Route, Routes } from "react-router-dom"
import { DCPage, MarvelPage, SearchPage, HeroPage } from "../pages"
import { Navbar } from "../../ui"


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="/marvel" element={ <MarvelPage />}></Route>
                <Route path="/dc" element={<DCPage />}></Route>

                
                <Route path="/search" element={<SearchPage />}></Route>
                <Route path="/hero/:id" element={<HeroPage />}></Route>
                
                
                <Route path="/" element={<Navigate to={'/marvel'} />} />
            </Routes>
        </div>
        
    </>
  )
}

