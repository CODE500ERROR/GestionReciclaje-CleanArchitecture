using System;
using System.Collections.Generic;
using BaseProject.Application.Common;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Plant.Queries.GetAllPlant
{
    public class PlantLookupModel
    {
        public Guid PlantId{ get; set; }
        public string Name{ get; set; }
        public string Address{ get; set; }
        public string MunicipioName{ get; set; }
        public int OperatorsQuantity{ get; set; }
    }
}
