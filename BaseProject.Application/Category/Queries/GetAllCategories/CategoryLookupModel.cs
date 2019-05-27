using System;
using System.Collections.Generic;
using BaseProject.Application.Common;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Category.Queries.GetAllCategories
{
    public class CategoryLookupModel
    {
        public Guid CategoryId{ get; set; }
        public string Name{ get; set; }
    }
}
