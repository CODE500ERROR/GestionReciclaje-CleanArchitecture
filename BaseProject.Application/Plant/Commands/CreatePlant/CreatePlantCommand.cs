using System;
using System.Collections.Generic;
using AutoMapper;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using MediatR;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Plant.CreatePlant
{
    public class CreatePlantCommand: IRequest<bool>
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public Guid MunicipioId { get; set; }
        public int OperatorsQuantity { get; set; }
        public float Latitude { get; set; }
        public float Longitude { get; set; }

    }
}
