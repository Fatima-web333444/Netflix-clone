import { userAuthStore } from "../../store/authUser";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";


const HomePage = () => {
const {user}=userAuthStore();//already logen in user ka token or cookie hogi jo browser ma majood hogi 
//tu wo cookie automatically subsequent request kar agi or authCHeck ka function cahala ga jo batiay ga ka user logein ha ya nhi
  return (
    <div>{user ?<HomeScreen/>:<AuthScreen/>}</div>
    
  )
}

export default HomePage
