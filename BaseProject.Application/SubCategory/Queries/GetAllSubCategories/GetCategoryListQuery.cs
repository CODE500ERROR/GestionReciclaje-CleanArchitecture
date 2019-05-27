using System.Collections.Generic;
using BaseProject.Application.Common;

using MediatR;

namespace BaseProject.Application.Category.Queries.GetAllSubCategories
{
    public class GetSubCategoryListQuery :FilterBase ,IRequest<SubCategoryListViewModel>
    {
        public string Name { get; set; }

    }
}
