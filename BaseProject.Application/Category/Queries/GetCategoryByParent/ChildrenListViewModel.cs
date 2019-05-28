using System.Collections.Generic;
using BaseProject.Application.Common;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Category.Queries.GetCategoryByParent
{
    public class ChildrenListViewModel
    {
        public List<ChildrenLookupModel> Children { get; set; }
    }
}
