import React from 'react';
import { Route, Switch } from "react-router-dom";
import AmericaApp from './America/America';
import AmericadoSulApp from './America/AmericadoSul/AmericadoSul';
import PantanalApp from './America/AmericadoSul/Pantanal/Pantanal';
import AsiaApp from './Componentes/Asia/Asia';
import OceaniaApp from './Componentes/Oceania/Oceania';
import AntarticaApp from './Componentes/Antartica/Antartica';
import EuropaApp from './Componentes/Europa/Europa';
import Inicio from './Componentes/Inicio/Inicio';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" render={() => <Inicio />}></Route>
          <Route exact path="/america" render={() => <AmericaApp />}></Route>
          <Route exact path="/america/americadosul" render={() => <AmericadoSulApp />}></Route>
          <Route exact path="/america/americadosul/pantanal" render={() => <PantanalApp />}></Route>
          <Route exact path="/asia" render={() => <AsiaApp />}></Route>
          <Route exact path="/oceania" render={() => <OceaniaApp />}></Route>
          <Route exact path="/antartica" render={() => <AntarticaApp />}></Route>
          <Route exact path="/europa" render={() => <EuropaApp />}></Route>
        </Switch>
      </main>
    </div >
  );
}
export default App;