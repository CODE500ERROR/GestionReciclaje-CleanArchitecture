using System;
using System.Collections.Generic;
using AutoMapper;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using MediatR;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Category.Commands.CreateCategory
{
    public class CreateCategoryCommand: IRequest<bool>
    {
        public string Name { get; set; }

    }
}
