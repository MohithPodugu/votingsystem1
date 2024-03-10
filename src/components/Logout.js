export default function Logout() {
    localStorage.removeItem("token")
    return(
        <div>
            <center><h1>you had logged out sucessfully
                </h1></center>
        </div>
    )
}