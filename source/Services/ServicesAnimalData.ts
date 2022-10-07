/**
 * Service layer for validation from controller
 */
import { Request, Response } from 'express';
import ModelAnimalData from '../model/modelAnimalData';

/**
 * Get animal data from model
 * @param req 
 * @param res 
 * @returns Response header
 */
const getAllAnimalData  = async (req: Request, res: Response) => {
    return ModelAnimalData.getAllAnimalData(req, res);
};

/**
 * Get Random animal data from model
 * @param req 
 * @param res 
 * @returns Response header
 */
const getRandomAnimalData  = async (req: Request, res: Response) => {
    let iAnimalDataLength =  ModelAnimalData.getAnimalDataLength();
    let iRandomKey = Math.floor(Math.random() * iAnimalDataLength);
    return ModelAnimalData.getRandomAnimalData(req, res, iRandomKey);
};

/**
 * Insert animal data to model
 * @param req 
 * @param res 
 * @returns Response header
 */
const insertNewAnimalData  = async (req: Request, res: Response, sAnimal: string, sAnimalColor: string) => {
    if(sAnimal === undefined || sAnimalColor === undefined || parseInt(sAnimal) || parseInt(sAnimalColor)) {
        return res.status(301).json({
            error_message: 'Not a valid animal or color',
        });
    }

    let aNewAnimal = {
        "color": sAnimalColor,
        "animal": sAnimal,
    };
    
    return ModelAnimalData.insertNewAnimalData(req, res, aNewAnimal);
};

/**
 * Update animal data existing on model
 * @param req 
 * @param res 
 * @returns Response header
 */
const updateAnimalData = async (req: Request, res: Response, sAnimal: string, sAnimalColor: string, sOldData: string) => {
    if(sAnimal === undefined || sAnimalColor === undefined || parseInt(sAnimal) || parseInt(sAnimalColor)) {
        return res.status(301).json({
            error_message: 'Not a valid animal or color',
        });
    }

    let aNewAnimal = {
        "animal": sAnimal,
        "color": sAnimalColor
    };

    let oOldData = JSON.parse(sOldData);
    let aAnimalData =  ModelAnimalData.getAnimalData();

    let iUpdateArrayKey;
    aAnimalData.filter((oAnimal, iArrayKey) => {
        if (oAnimal.color === oOldData.color && oAnimal.animal === oOldData.animal) {
            iUpdateArrayKey = iArrayKey;
        }
    });

    if(iUpdateArrayKey === undefined) {
       return res.status(302).json({
            error_message: 'Animal data not found',
        });
    }
    
    return ModelAnimalData.updateAnimalData(req, res, aNewAnimal, iUpdateArrayKey);
};

/**
 * Delete animal data existing on model
 * @param req 
 * @param res 
 * @returns Response header
 */
const deleteAnimalData = async (req: Request, res: Response, sAnimal: string, sAnimalColor: string) => {
    if(sAnimal === undefined || sAnimalColor === undefined || parseInt(sAnimal) || parseInt(sAnimalColor)) {
        return res.status(301).json({
            error_message: 'Not a valid animal or color',
        });
    }
    let aAnimalData =  ModelAnimalData.getAnimalData();

    let iDeleteArrayKey;
    aAnimalData.filter((oAnimal, iArrayKey) => {
        if (oAnimal.color === sAnimalColor && oAnimal.animal === sAnimal) {
            iDeleteArrayKey = iArrayKey;
        }
    });

    if(iDeleteArrayKey === undefined) {
       return res.status(302).json({
            error_message: 'Animal data not found',
        });
    }
    
    return ModelAnimalData.deleteAnimalData(req, res, iDeleteArrayKey);
};
export default { getAllAnimalData, getRandomAnimalData, insertNewAnimalData, updateAnimalData, deleteAnimalData };