using System;
using BaseProject.Application.Infrastructure.Request.Commands.Update;
using BaseProject.Domain;
using MediatR;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Users.Commands.UpdateUser
{
    public class DeletePlantCommand : IRequest
    {
        public Guid PlantId{ get; set; }
    }
}
