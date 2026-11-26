const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');

router.get('/', articleController.getAllArtticles);
router.get('/authors', articleController.getAllAuthors);
router.get('/article/:slug', articleController.getArticleBySlug);
router.post('/', articleController.createArticle);
router.post('/admin/article/create', articleAdminController.createArticle);

module.exports = router;