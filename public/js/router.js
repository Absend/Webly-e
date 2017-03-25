const view = new View();

let currentId;

const router = {
	init: $(function () {
		const appRouter = new Navigo(null, true);

		appRouter
			.on({
				'/home': () => {
					data.getPosts().then((allNews) => {
						view.home('#content', { news: allNews })
					});
				},
				'/blog': () => {
					view.blog('#content', {})
				},
				'/about': () => {
					view.about('#content', {})
				},
				'/tools': () => {
					view.tools('#content', {})
				},
				'/login': () => {

				},
				'/posts/:id': (context) => {
					data.getPostById(context.id).then((newsCurrent) => {
						currentId = context.id;
						view.news('#content', { news: newsCurrent[0] })
					}).catch((err) => {
						console.log(err);
					})
				},
				'/comment': (context) => {
					let inputValue = $('#new-comment-input').val();
					if (inputValue !== '') {
						let comment = { value: inputValue, user: localStorage.getItem('user') };
						let options = {
							data: { comment: comment }
						};

						$('#new-comment-input').val('');

						data.putPostComment(currentId, options).then((d) => {
							console.log(d);
							appRouter.navigate('/news/' + currentId);
						});
					}
				},
				'*': () => {
					appRouter.navigate('/home');
				}
			})
			.notFound(function () {
				alert('Error! Router not found!');
			})
			.resolve();
	})
}
