using System.Collections.Generic;
using BaseProject.Application.Common;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Category.Queries.GetAllCategoryParent
{
    public class CategoryParentListViewModel
    {
        public List<CatgoryParentLookupModel> Parents { get; set; }
    }
}
