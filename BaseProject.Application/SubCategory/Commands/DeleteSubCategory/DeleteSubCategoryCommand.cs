using System;
using BaseProject.Application.Infrastructure.Request.Commands.Update;
using BaseProject.Domain;
using MediatR;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Category.Commands.DeleteSubCategory
{
    public class DeleteSubCategoryCommand : IRequest
    {
        public Guid SubCategoryId{ get; set; }
    }
}
