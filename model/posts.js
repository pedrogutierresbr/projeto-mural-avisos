module.exports = {
    posts: [
        { id: "1", title: "Teste 1", description: "Descrição do teste" },
        { id: "2", title: "Teste 2", description: "Descrição do teste" },
        { id: "3", title: "Teste 3", description: "Descrição do teste" },
    ],

    getAll() {
        return this.posts;
    },

    newPosts(title, description) {
        this.posts.push({ id: genereateId(), title, description });
    },
};

function genereateId() {
    //Usando base 36, tenho letras envolvidas
    return Math.random().toString(36).substring(2);
}