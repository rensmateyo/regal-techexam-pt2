import { Request, Response } from 'express';
import ServicesAnimalData from '../Services/ServicesAnimalData';


/**
 * Controller to get all data
 * Route: /all/animal
 * @param req 
 * @param res 
 * @returns Response header
 */
const getAllAnimalData  = async (req: Request, res: Response) => {
    return ServicesAnimalData.getAllAnimalData(req, res);
};

/**
 * Controller to get random animal data
 * Route: /random/animal
 * @param req 
 * @param res 
 * @returns Response header
 */
const getRandomAnimalData  = async (req: Request, res: Response) => {
    return ServicesAnimalData.getRandomAnimalData(req, res);
};

/**
 * Controller to insert new animal data
 * Route: /insert/animal
 * @param req 
 * @param res 
 * @returns Response header
 */
const insertNewAnimalData  = async (req: Request, res: Response) => {
    let sAnimalColor = req.query.color;
    let sAnimal = req.query.animal;
    return ServicesAnimalData.insertNewAnimalData(req, res, sAnimal as string, sAnimalColor as string);
};

/**
 * Controller to Update existing animal data
 * Route: /update/animal
 * @param req 
 * @param res 
 * @returns Response header
 */
const updateAnimalData  = async (req: Request, res: Response) => {
    let sAnimalColor = req.query.color;
    let sAnimal = req.query.animal;
    let sOldData = req.query.find_data;
    return ServicesAnimalData.updateAnimalData(req, res, sAnimal as string, sAnimalColor as string, sOldData as string);
};

/**
 * Controller to Delete existing animal data
 * Route: /delete/animal
 * @param req 
 * @param res 
 * @returns Response header
 */
const deleteAnimalData  = async (req: Request, res: Response) => {
    let sAnimalColor = req.query.color;
    let sAnimal = req.query.animal;
    return ServicesAnimalData.deleteAnimalData(req, res, sAnimal as string, sAnimalColor as string);
};

export default { getAllAnimalData,  getRandomAnimalData, insertNewAnimalData, updateAnimalData, deleteAnimalData };