using System;
using System.Collections.Generic;
using BaseProject.Application.Infrastructure.Request.Queries.GetById;
using BaseProject.Application.Plant.Queries.GetAllPlant;
using MediatR;

namespace BaseProject.Application.Separation.Queries.GetSeparationByPlant
{
    public class GetSeparationByPlantQuery :  IRequest<List<GetSeparationByPlantModel>>
    {
        
    }
}
