using System;
using BaseProject.Application.Infrastructure.Request.Commands.Update;
using BaseProject.Domain;
using MediatR;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Category.Commands.DeleteCategory
{
    public class DeleteCategoryCommand : IRequest
    {
        public Guid CategoryId{ get; set; }
    }
}
