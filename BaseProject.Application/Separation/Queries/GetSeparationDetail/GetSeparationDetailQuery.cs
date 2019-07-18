using System;
using BaseProject.Application.Infrastructure.Request.Queries.GetById;
using BaseProject.Application.Plant.Queries.GetAllPlant;
using MediatR;

namespace BaseProject.Application.Separation.Queries
{
    public class GetSeparationDetailQuery :  IRequest<SeparationDetailModel>
    {
        public Guid SeparationId { get; set; }
    }
}
