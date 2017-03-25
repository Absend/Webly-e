'use strict';

class Data {
	getPosts() {
		return ajaxRequester.get('/api/blogs');
	}

	postBlog(options) {
		return ajaxRequester.post('/api/blog', options);
	}

	getPostById(id) {
		return ajaxRequester.get('/api/blogs/' + id);
	}

	putPostComment(id, options) {
		return ajaxRequester.put('/api/comment/' + id, options);
	}

	getCloudinaryParams() {
		return ajaxRequester.get('../../cloudinary-image-store.json')
	}
}
