import Character from '../models/characterSchema.mjs';
import express from 'express';

const router = express.Router();

// Create
router.post('/', async (req, res) => {
    const newCharacter = await Character.create({});

    res.json(newCharacter);
})

// Read
router.get('/', async (req, res) => {
    const allCharacters = await Character.find({});

    res.json(allCharacters);
})

// Update
router.put('/:id', async (req, res) => {
    const editCharacter = await Character.findByIDAndUpdate({});

    res.json(editCharacter);
})

// Delete
router.delete('/:id', async (req, res) => {
    const deleteCharacter = await Character.findByIdAndDelete({});
    res.json(deleteCharacter);
})

export default router;