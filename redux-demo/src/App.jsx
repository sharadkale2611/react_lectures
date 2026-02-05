import { useState } from "react"
import Header from "./components/Header"
import LeftSidebar from "./components/LeftSidebar"
import Main from "./components/Main"
import LoginPage from "./pages/login/LoginPage"

function App() {

  return (
    <div style={{background:'#ef84845c', height:'90vh', padding:'15px'}}>
      <LoginPage />
      <table width="100%">
        <tbody>
        <tr>
          <td colSpan={2}>
            <Header />
          </td>
        </tr>
        <tr>
          <td style={{textAlign:'left', width:'300px'}}>
              <LeftSidebar />
            </td>
          <td style={{ textAlign: 'left' }}>
              <Main  />            
           </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
