using System;
using System.Collections.Generic;
using BaseProject.Application.Common;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Separation.Queries
{
    public class SeparationLookupModel
    {
        public Guid SeparationId{ get; set; }
        public string Description{ get; set; }        
    }
}
