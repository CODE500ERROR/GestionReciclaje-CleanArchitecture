using System.Collections.Generic;
using BaseProject.Application.Common;

using MediatR;

namespace BaseProject.Application.Plant.Queries.GetAllPlant
{
    public class GetPlantListQuery :FilterBase ,IRequest<PlantListViewModel>
    {
        public string Name { get; set; }

    }
}
