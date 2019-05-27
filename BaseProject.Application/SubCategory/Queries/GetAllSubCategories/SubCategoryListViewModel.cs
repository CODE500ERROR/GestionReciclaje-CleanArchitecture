using System.Collections.Generic;
using BaseProject.Application.Common;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Category.Queries.GetAllSubCategories
{
    public class SubCategoryListViewModel:FilterBase
    {
        public List<SubCategoryLookupModel> SubCategories { get; set; }
    }
}
