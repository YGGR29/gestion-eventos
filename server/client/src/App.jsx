import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './LoginForm';
import OrganizadorDashboard from "./Organizador/OrganizadorDashboard";
import CrearEvento from "./Organizador/CrearEvento";
import EditarEvento from "./Organizador/EditarEvento";
import ParticipanteDashboard from "./Participante/ParticipanteDashboard";
import Mensajeria from "./Components/Mensajeria";
import MensajeriaA from "./Administrador/MensajeriaA";
import MensajeriaO from "./Organizador/MensajeriaO";
import MensajeriaP from "./Participante/MensajeriaP";
import VerUsuarios from "./Administrador/VerUsuarios";
import VerParticipantes from "./Organizador/VerParticipantes";
import InscripcionEvento from "./Participante/InscripcionEvento";
import AdminDashboard from "./Administrador/AdminDashboard";
import CrearEventoAdmin from "./Administrador/CrearEventoAdmin";


function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path="/login" element={<LoginForm />}></Route>

          <Route path="/orgdash" element={<OrganizadorDashboard />}></Route>
          <Route path="/crearevento" element={<CrearEvento />}></Route>
          <Route path="/editarevento" element={<EditarEvento />}></Route>
          <Route path="/verpart" element={<VerParticipantes />}></Route>
          <Route path="/mensajeriaO" element={<MensajeriaO />}></Route>

          <Route path="/pardash" element={<ParticipanteDashboard />}></Route>
          <Route path="/inscripcion" element={<InscripcionEvento />}></Route>
          <Route path="/mensajeriaP" element={<MensajeriaP />}></Route>

          <Route path="/mensajeriaA" element={<MensajeriaA />}></Route>
          <Route path="/veruser" element={<VerUsuarios />}></Route>
          <Route path="/admindash" element={<AdminDashboard />}></Route>
          <Route path="/creareventoad" element={<CrearEventoAdmin />}></Route>

          <Route path="/mensajeria" element={<Mensajeria />}></Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
