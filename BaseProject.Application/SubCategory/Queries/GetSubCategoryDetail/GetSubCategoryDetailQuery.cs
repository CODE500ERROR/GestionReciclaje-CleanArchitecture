using System;
using BaseProject.Application.Infrastructure.Request.Queries.GetById;
using BaseProject.Application.Plant.Queries.GetAllPlant;
using MediatR;

namespace BaseProject.Application.Category.Queries.GetSubCategoryDetail
{
    public class GetSubCategoryDetailQuery :  IRequest<SubCategoryDetailModel>
    {
        public Guid SubCategoryId { get; set; }
    }
}
