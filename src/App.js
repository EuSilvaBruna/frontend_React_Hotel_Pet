import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import './style.css'
import './app.css'
import CadastrarUsuario from './pages/Funcionario/CadastrarUsuario/CadastrarUsuario'
import EditarReservaAndamento from './pages/Funcionario/EditarReservaAndamento/EditarReservaAndamento'
import Usuario from './pages/Funcionario/Usuario/Usuario'
import Reservas from './pages/Funcionario/Reservas/Reservas'
import Pets from './pages/Funcionario/Pets/Pets'
import VerReserva from './pages/Funcionario/VerReserva/VerReserva'
import CadastrarPet from './pages/Funcionario/CadastrarPet/CadastrarPet'
import EditarPerfil from './pages/Funcionario/EditarPerfil/EditarPerfil'
import EditarPet from './pages/Funcionario/EditarPet/EditarPet'
import FazerReserva from './pages/Funcionario/FazerReserva/FazerReserva'
import VisualizarPet from './pages/Funcionario/VisualizarPet/VisualizarPet'
import EditarReserva from './pages/Funcionario/EditarReserva/EditarReserva'


import PetsCliente from './pages/Cliente/Pets/Pets'
import CadastrarPetCliente from './pages/Cliente/CadastrarPet/CadastrarPet'
import ReservasCliente from './pages/Cliente/Reservas/Reservas'
import VerReservaCliente from './pages/Cliente/VerReserva/VerReserva'
import EditarPetCliente from './pages/Cliente/EditarPet/EditarPet'
import EditarPerfilCliente from './pages/Cliente/EditarPerfil/EditarPerfil'
import EditarReservaCliente from './pages/Cliente/EditarReserva/EditarReserva'
import FazerReservaCliente from './pages/Cliente/FazerReserva/FazerReserva'
import VisualizarPetCliente from './pages/Cliente/VisualizarPet/VisualizarPet'



import UsuarioGerente from './pages/Gerente/Usuario/Usuario'
import EditarReservaAndamentoGerente from './pages/Gerente/EditarReservaAndamento/EditarReservaAndamento'
import ReservasGerente from './pages/Gerente/Reservas/Reservas'
import PetsGerente from './pages/Gerente/Pets/Pets'
import VerReservaGerente from './pages/Gerente/VerReserva/VerReserva'
import CadastrarPetGerente from './pages/Gerente/CadastrarPet/CadastrarPet'
import EditarPerfilGerente from './pages/Gerente/EditarPerfil/EditarPerfil'
import EditarPetGerente from './pages/Gerente/EditarPet/EditarPet'
import FazerReservaGerente from './pages/Gerente/FazerReserva/FazerReserva'
import Configuracao from './pages/Gerente/Configuração/Configuracao'
import VisualizarPetGerente from './pages/Gerente/VisualizarPet/VisualizarPet'
import EditarReservaFinalizada from './pages/Gerente/EditarReservaFinalizada/EditarReservaFinalizada'
import CadastrarUsuarioGerente from './pages/Gerente/CadastrarUsuario/CadastrarUsuario'
import EditarReservaGerente from './pages/Gerente/EditarReserva/EditarReserva'

function App() {
  return (
    <div>
      <Topbar />

      <div className="container">
        <Sidebar />
       
        <EditarReservaGerente />

      </div>
    
    </div>
  );
}

export default App;
