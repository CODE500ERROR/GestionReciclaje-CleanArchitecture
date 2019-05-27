using System;
using System.Collections;
using System.Collections.Generic;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Category.Queries.GetCategoryDetail
{
    public class CategoryDetailModel
    {
        public Guid CategoryId { get; set; }
        public string Name { get; set; }
    }
}
