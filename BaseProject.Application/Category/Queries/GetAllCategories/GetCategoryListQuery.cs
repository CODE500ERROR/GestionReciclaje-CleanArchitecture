using System.Collections.Generic;
using BaseProject.Application.Common;

using MediatR;

namespace BaseProject.Application.Category.Queries.GetAllCategories
{
    public class GetCategoryListQuery :FilterBase ,IRequest<CategoryListViewModel>
    {
        public string Name { get; set; }

    }
}
