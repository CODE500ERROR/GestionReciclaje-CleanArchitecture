using System.Collections.Generic;
using BaseProject.Application.Common;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Separation.Queries
{
    public class SeparationListViewModel:FilterBase
    {
        public List<SeparationLookupModel> Separations { get; set; }
    }
}
