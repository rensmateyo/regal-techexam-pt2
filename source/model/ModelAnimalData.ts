//Mock m,model  for the Animal data
import { Request, Response, NextFunction } from 'express';

//Initial animal data
const oAnimalData = [
            {
                "color" : "red",
                "animal" : "fox"
            },
            {
                "color" : "green",
                "animal" : "dog"
            },
            {
                "color" : "yellow",
                "animal" : "cat"
            }
        ];

/**
 * Return all animal data with the header 200
 * @param req 
 * @param res 
 * @returns Response header
 */
const getAllAnimalData  = async (req: Request, res: Response) => {
    return res.status(200).json(oAnimalData);
};

/**
 * Return random animal data with the header 200
 * @param req 
 * @param res 
 * @returns Response header
 */
const getRandomAnimalData  = async (req: Request, res: Response, iRandomKey:number) => {
    return res.status(200).json(oAnimalData[iRandomKey]);
};

/**
 * Insert animal data with the header 200
 * @param req 
 * @param res 
 * @returns Response header
 */
const insertNewAnimalData  = async (req: Request, res: Response, aNewAnimal: {color: string, animal:string}) => {
    oAnimalData.push(aNewAnimal);
    return res.status(200).json({
        message: 'Inserted successfully',
        updated_list: oAnimalData
    });

};

/**
 * Update existing animal data with the header 200
 * @param req 
 * @param res 
 * @returns Response header
 */
const updateAnimalData = async (req: Request, res: Response, aNewAnimal: {color: string, animal:string}, iUpdateArrayKey: any) => {
    oAnimalData[iUpdateArrayKey].animal = aNewAnimal.animal;
    oAnimalData[iUpdateArrayKey].color = aNewAnimal.color;
    return res.status(200).json({
        message: 'Updated object successfully',
        updated_object: oAnimalData[iUpdateArrayKey]
    });
};

/**
 * Delete existing animal data with the header 200
 * @param req 
 * @param res 
 * @returns Response header
 */
const deleteAnimalData = async (req: Request, res: Response, iRemoveArrayKey: any) => {
    oAnimalData.splice(iRemoveArrayKey, 1)
    return res.status(200).json({
        message: 'Deleted object successfully',
        deleted_object: oAnimalData
    });
};

/**
 * Return animal Data length
 * @returns int
 */
function getAnimalDataLength () {
    return oAnimalData.length;
};

/**
 * Return animal Data
 * @returns Array
 */
function getAnimalData () {
    return oAnimalData;
};

export default { getAllAnimalData, getAnimalDataLength, getRandomAnimalData, insertNewAnimalData, updateAnimalData, getAnimalData, deleteAnimalData };