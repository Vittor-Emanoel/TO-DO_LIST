import { useNavigate } from 'react-router-dom'

import logo from '../assets/images/Logo.png'
import CustomButton from './CustomButton'
import './Sidebar.scss'

const Sidebar = () => {
  const navigate = useNavigate()

  const handleSignInClick = () => {
    navigate('/login')
  }
  return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div className="sign-out">
                <CustomButton onClick={handleSignInClick}>Sair</CustomButton>
            </div>
        </div>
  )
}

export default Sidebar
