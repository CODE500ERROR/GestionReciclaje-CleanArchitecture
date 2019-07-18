using System.Collections.Generic;
using BaseProject.Application.Common;

using MediatR;

namespace BaseProject.Application.Separation.Queries
{
    public class GetSeparationListQuery :FilterBase ,IRequest<SeparationListViewModel>
    {
        public string Description { get; set; }

    }
}
