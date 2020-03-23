using System;
using System.Collections.Generic;
using AutoMapper;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using MediatR;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Separation.Commands
{
    public class CreateSeparationCommand: IRequest<bool> ,IHaveCustomMapping
    {

        public Guid SeparationId { get; set; }
        public string Description { get; set; }
        public Guid? PlantId { get; set; }
        public Guid ProductId { get; set; }
        public double Quantity { get; set; }
        public string MeasuresUnit { get; set; }

        public void CreateMappings(Profile configuration)
        {
            //            CreationTime
            //IsDeleted
            //Plant
            //Product

            configuration.CreateMap<CreateSeparationCommand, Domain.Separation>()
                .ForMember(x => x.CreationTime, opt => opt.Ignore())
                .ForMember(x => x.Plant, opt => opt.Ignore())
                .ForMember(x => x.Product, opt => opt.Ignore())
                .ForMember(x => x.IsDeleted, opt => opt.Ignore());

        }
    }
}
