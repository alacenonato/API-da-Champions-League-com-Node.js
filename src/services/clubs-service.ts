import { Request, Response } from "express"
import * as service from '../services/clubs-service'
import * as HttpResponse from '../utils/http-helper'
import * as repository from '../repositories/clubs-repository'

export const getClubService = async () => {
    const data =await repository.findAllClubs();
    const response = HttpResponse.ok(data);
    return response;

};

