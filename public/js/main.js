$(() => {
	let currentUser = localStorage.getItem('webly-user-data');
	if (currentUser) {
		console.log(`Logged user: ${currentUser}`);
	}

	$(() => {
		view.header('header', {});
		view.footer('footer', {});
	});


	router.init;
});
