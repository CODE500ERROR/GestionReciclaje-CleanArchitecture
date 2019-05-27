using System;
using System.Collections.Generic;
using AutoMapper;
using BaseProject.Application.Infrastructure.Request.Commands.Update;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using MediatR;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Category.Commands.UpdateSubCategory
{
    public class UpdateSubCategoryCommand : UpdateCommand, IRequest
    {
   
        public Guid SubCategoryId { get; set; }
        public Guid CategoryId { get; set; }
        public string Name { get; set; }        

    }
}
