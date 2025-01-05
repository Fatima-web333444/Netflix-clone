import { Routes, Route, Navigate } from "react-router-dom"; // Ensure Routes is imported
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/home/HomePage";
import SignUpPage from "./pages/SignUpPage";
import WatchPage from "./pages/WatchPage";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import { userAuthStore } from "./store/authUser";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import SearchPage from "./pages/Searchpage";
import SearchHistoryPage from "./pages/SearchHistory";
import NotFoundPage from "./pages/404";

function App() {
  const {user,isCheckingAuth,authCheck}=userAuthStore();
  console.log("auth user is here",user);
  useEffect(()=>{//we use it to cjheck if user is already loged in or not
    authCheck();//Auth check is called when the app loads or refreshes
  },[authCheck]);//is ceez ko is liya rakha ha ka ager changes ati hain authCheck ma tu dobara authcheck ka function run ho
  if(isCheckingAuth){
    return(
      <div className="h-screen">
        <div className="flex justify-center itmes-center bg-black h-full">
        <Loader className="animate-spin text-red-600 size-10"/>
        </div>
      </div>
    )
  }
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={!user?<LoginPage />:<Navigate to={"/"}/>} />
      <Route path="/watch/:id" element={user ? <WatchPage /> : <Navigate to="/login" />} />
      <Route path="/signup" element={!user?<SignUpPage />:<Navigate to={"/"}/>} />
      <Route path='/search' element={user ? <SearchPage /> : <Navigate to={"/login"} />} />
      <Route path='/history' element={user ? <SearchHistoryPage /> : <Navigate to={"/login"} />} />
      <Route path='/*' element={<NotFoundPage />} />

    </Routes>
    <Footer/>
    <Toaster/>
    </>
  );
}

export default App;
