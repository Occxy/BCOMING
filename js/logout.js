if ((localStorage.getItem("loginUsername") != null) && (localStorage.getItem("login") != null)) {
	addAlertFlash("success", "You are now disconnected")
}

window.location = 'login.html';