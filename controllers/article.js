const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

const { Article, Authors } = require('../models');

const createArticle = async (req, res) => {
    try {
        const { name, slug, image, body, author_id } = req.body;

        const newArticle = await Article.create({
            name,
            slug,
            image,
            body,
            published: new Date(),
            author_id
        });

        return res.status(201).json({ article: newArticle });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getAllArtticles = (req, res) => {
    Article.findAll()
    .then(articles => {
        console.log(articles)
        return res.status(200).json({ articles })
    })
    .catch (error => {
        return res.status(500).send(error.message)
    })
}

const getArticleBySlug = (req, res) => {
    Article.findOne({
        where: {
            slug: req.params.slug
        }
    })
    .then(article => {
        console.log(article)
        return res.status(200).json({ article });
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
} 

const getAllAuthors = (req, res) => {
    Authors.findAll()
    .then(authors => res.status(200).json({ authors }))
    .catch(error => res.status(500).send(error.message));
}

module.exports = {
    createArticle,
    getAllArtticles,
    getArticleBySlug,
    getAllAuthors
};