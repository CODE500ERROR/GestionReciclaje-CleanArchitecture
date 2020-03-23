using System;
using System.Collections;
using System.Collections.Generic;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Separation.Queries.GetSeparationByPlant
{
    public class GetSeparationByPlantModel
    {
        public string PlantName { get; set; }
        public double Quantity{ get; set; }
    }
}
