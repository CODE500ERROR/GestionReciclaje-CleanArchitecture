using System;
using System.Collections.Generic;
using AutoMapper;
using BaseProject.Application.Infrastructure.Request.Commands.Update;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using MediatR;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Product.Commands.UpdateProduct
{
    public class UpdateProductCommand : UpdateCommand, IRequest
    {
        public Guid ProductId { get; set; }
        public string Name { get; set; }
        
        public Guid CategoryId{ get; set; }

    }
}
