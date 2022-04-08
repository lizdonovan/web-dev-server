import posts from "./tuits/tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    tuits.push(newTuit);
    res.json(newTuit);
}
const findAllTuits = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitID = req.params['tid'];
    const updateTuit = req.body;
    tuits = tuits.map(tuit =>
        tuit._id === tuitID ? updateTuit : tuit);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitID = req.params['tid'];
    tuits = tuits.filter(tuit =>
        tuit._id !== tuitID);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

