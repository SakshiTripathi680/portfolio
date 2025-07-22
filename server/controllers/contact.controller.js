import Contact from '../models/contact.model.js'

// GET: /api/contact
export const getContact = async (req, res) => {
    try{
        const contact = await Contact.find();
        res.json(contact);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}

// POST: /api/contact
export const postContact = async (req, res) => {
    try{
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({message: "Message saved successfully!"})
    }
    catch(error){
        res.status(500).json({ error: "Something went wrong" });
    }
}
