'use strict';

let templatesPath = './html-templates/';

class View {
	home(selector, data) {
		templateLoader.load(selector, templatesPath + 'home.html', data);
	}

	blog(selector, data) {
		templateLoader.load(selector, templatesPath + 'blog.html', data);
	}

	tools(selector, data) {
		templateLoader.load(selector, templatesPath + 'tools.html', data);
	}

	about(selector, data) {
		templateLoader.load(selector, templatesPath + 'about.html', data);
	}

	header(selector, data) {
		templateLoader.load(selector, templatesPath + 'common/' + 'header.html', data);
	}

	footer(selector, data) {
		templateLoader.load(selector, templatesPath + 'common/' + 'footer.html', data);
	}

	news(selector, data) {
		templateLoader.load(selector, templatesPath + 'posts.html', data);
	}
}
