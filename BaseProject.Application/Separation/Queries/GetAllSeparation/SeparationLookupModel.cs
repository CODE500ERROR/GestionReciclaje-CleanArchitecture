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
        public string Description { get; set; }
        public string ProductName { get; set; }
        //public string PlantName { get; set; }
        public double Quantity { get; set; }
        public string MeasuresUnit { get; set; }
    }
}
