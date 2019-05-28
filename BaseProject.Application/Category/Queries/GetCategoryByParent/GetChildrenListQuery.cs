using System;
using System.Collections.Generic;
using BaseProject.Application.Common;

using MediatR;

namespace BaseProject.Application.Category.Queries.GetCategoryByParent
{
    public class GetChildrenListQuery : IRequest<ChildrenListViewModel>
    {
        public Guid ParentId{ get; set; }

    }
}
