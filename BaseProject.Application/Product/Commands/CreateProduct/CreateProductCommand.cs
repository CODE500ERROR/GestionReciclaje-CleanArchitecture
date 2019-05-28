using System;
using System.Collections.Generic;
using AutoMapper;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using MediatR;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Product.Commands.CreateProduct
{
    public class CreateProductCommand: IRequest<bool>
    {
        public string Name { get; set; }
        public Guid CategoryId { get; set; }

    }
}
