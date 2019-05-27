using System;
using System.Collections;
using System.Collections.Generic;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Category.Queries.GetSubCategoryDetail
{
    public class SubCategoryDetailModel
    {
        public Guid SubCategoryId { get; set; }
        public string Name { get; set; }
        public Guid CategoryId{ get; set; }
    }
}
