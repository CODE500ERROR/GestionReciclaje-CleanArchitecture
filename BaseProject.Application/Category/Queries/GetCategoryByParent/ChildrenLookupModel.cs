using System;
using System.Collections.Generic;
using BaseProject.Application.Common;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Category.Queries.GetCategoryByParent
{
    public class ChildrenLookupModel
    {
        public Guid CategoryId{ get; set; }
        public string Name{ get; set; }
    }
}
