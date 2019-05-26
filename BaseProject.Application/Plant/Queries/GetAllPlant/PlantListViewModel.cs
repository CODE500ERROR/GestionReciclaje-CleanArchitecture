using System.Collections.Generic;
using BaseProject.Application.Common;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Plant.Queries.GetAllPlant
{
    public class PlantListViewModel:FilterBase
    {
        public List<PlantLookupModel> Plants { get; set; }
    }
}
