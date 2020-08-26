const Idea = require('../models/Idea');

class IdeaController {
    async landingPage (request, response) {
        const lastIdeas = await Idea.find().sort({ createdAt: 'desc' }).limit(2);

        return response.render('index.html', { ideas: lastIdeas });
    }
    
    async ideasPage (request, response) {
        const ideas = await Idea.find().sort({ createdAt: 'desc' });

        return response.render('ideas.html', { ideas });
    }

    async create (request, response) {
        const { title, category, image, description, link } = request.body;
        
        await Idea.create({
            title,
            category,
            image,
            description,
            link
        });

        return response.redirect('/');
    }
}

module.exports = IdeaController;