using System;
using BaseProject.Application.Infrastructure.Request.Queries.GetById;
using BaseProject.Application.Plant.Queries.GetAllPlant;
using MediatR;

namespace BaseProject.Application.Category.Queries.GetCategoryDetail
{
    public class GetCategoryDetailQuery :  IRequest<CategoryDetailModel>
    {
        public Guid CategoryId { get; set; }
    }
}
