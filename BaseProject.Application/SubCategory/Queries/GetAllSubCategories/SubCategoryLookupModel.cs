using System;
using System.Collections.Generic;
using BaseProject.Application.Common;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Category.Queries.GetAllSubCategories
{
    public class SubCategoryLookupModel
    {
        public Guid SubCategoryId{ get; set; }
        public string Name{ get; set; }
        public string CategoryName{ get; set; }
    }
}
