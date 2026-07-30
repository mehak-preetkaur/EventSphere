const Registration = require("../models/Registration");

const registerStudent = async(req,res)=>{

    console.log("===== Registration Request Received ====="); 
    console.log(req.body);


    try{

        const registration = await Registration.create(req.body);
         console.log("Saved:", registration);

        res.status(201).json(registration);

    }

    catch(error){

        console.error(error);
        res.status(500).json({
            message:error.message
        });

    }

};

const getRegistrations = async(req,res)=>{

    try{

        const registrations = await Registration.find();

        res.json(registrations);

    }

    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};

module.exports={
    registerStudent,
    getRegistrations
};