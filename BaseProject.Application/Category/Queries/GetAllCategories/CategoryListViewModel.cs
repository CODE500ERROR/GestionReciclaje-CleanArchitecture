using System.Collections.Generic;
using BaseProject.Application.Common;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Category.Queries.GetAllCategories
{
    public class CategoryListViewModel:FilterBase
    {
        public List<CategoryLookupModel> Categories { get; set; }
    }
}
