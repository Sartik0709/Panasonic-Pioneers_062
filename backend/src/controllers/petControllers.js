import { petModel } from "../models/petModel.js";

export const addNewPet = async(req, res) => {
  const {type, name, breed, age, description, healthStatus, photos } = req.body;
  const {id} = req.user;
  console.log(id);
  try{
      const pets = new petModel({type,userId:id, name, breed, age, description, healthStatus, photos})
      await pets.save();
      res.status(200).json({Message : "New Pet Added", pets : pets})
  }
  catch(error){
    console.log("Error While Add Post Request:", error.message);
    res.status(500).json(error.message);
  }
};


export const deletePetById = async(req, res) => {
    const {id} = req.params;
    try{
        const pet = await petModel.findByIdAndDelete({_id : id});
        res.status(200).json({Message : "Post Deleted Successfully"});
    }
    catch(error){
      console.log("Error While Add Post Request:", error.message);
      res.status(500).json(error.message);
    }
  };

  export const getAllPets = async (req, res) => {
    try {
      const pets = await petModel.find();
      res.status(200).json({pets:pets});
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  export const searchPets = async (req, res) => {
    const {type, breed, age, size, gender } = req.query;
  
    let query = {};
    if(type) query.type = type;
    if (breed) query.breed = breed;
    if (age) query.age = age;
    if (size) query.size = size;
    if (gender) query.gender = gender;
  
    try{
      const pets = await petModel.find(query);
      res.status(200).json({pets:pets});
    } 
    catch(err){
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };