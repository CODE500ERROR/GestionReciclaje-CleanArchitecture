using System;
using System.Collections.Generic;
using AutoMapper;
using BaseProject.Application.Infrastructure.Request.Commands.Update;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using MediatR;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Plant.Commands.UpdatePlant
{
    public class UpdatePlantCommand : UpdateCommand, IRequest
    {
        public Guid PlantId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public Guid MunicipioId{ get; set; }

    }
}
